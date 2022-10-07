import { HYDRATE } from "next-redux-wrapper";
import { AnyAction, combineReducers } from "redux";
import { fromJS, Map, List } from 'immutable';
import { REQUEST_RESULT } from "./models/Entities";
import { CLEAR_IDENTITY, CLEAR_SSR_DATA, GET_IDENTITY, SET_IDENTITY, SET_SSR_DATA } from "./action";
import { IIdentity, ROLE, IBrends } from "server/constants";



export interface AppState {
    entities: Map<string, Map<string, any>>,
    identity: {},
    ssrReducer: {}
}

const nextReducer = (
    state: AppState,
    action: AnyAction
) => {
    switch (action.type) {
        case HYDRATE:
            if (action.payload.entities.size <= 0) {
                return { ...state, ...action.payload };
            }

            return { ...state, ...action.payload };
        case 'APP':
            return { ...state, app: action.payload };
        case 'PAGE':
            return { ...state, page: action.payload };
        default:
            return state;
    }
};

const queryInitialState: any = null;

const ssrReducer = (state = queryInitialState, action: any) => {
    switch (action.type) {
        case SET_SSR_DATA: {
            if (action.data) {

                console.log(action.data.brands)
                //action = fromJS(action.data)
                //action.map(actio => actio.forEach(act => act.get("_id") = act.get("_id").toString()))
                //console.log(action.map(ac => ac.map(a => console.log(a.get("_id")))))



                return { ...action }
            }

            return { ...state };
        }
        case CLEAR_SSR_DATA: {
            if (state && (action.name in state)) {
                state[action.name] = undefined;
                return { ...state };
            }
            break;
        }
        default:
            return state;
    }
};

const initialIdentity: IIdentity = {
    firstName: 'guest',
    lastName: 'guest',
    role: ROLE.GUEST,
    userId: null,
    phoneNumber: 50,
    userEmail: 'guest',
    location: 'guest',
    token: null
};

const identity = (state = initialIdentity, action: any) => {
    switch (action.type) {
        case GET_IDENTITY: {
            if (action.data) {
                return { ...state, ...action.data };
            }

            return { ...state };
        }
        case SET_IDENTITY: {
            if (action.data) {

                return { ...state, ...action.data };
            }
            return { ...state, ...action };
        }
        case CLEAR_IDENTITY: {

            return { ...state, ...initialIdentity };
        }
        default: {
            return state;
        }
    }
}






const initialEntities = fromJS({});
function entities(state = initialEntities, action: any) {
    switch (action.type) {
        case REQUEST_RESULT:
            console.log(action.type)
            const { data } = action;


            if (data.entities) {
                Object.keys(data.entities).map((entityName) => {
                    let list = state.get(entityName);
                    // @ts-ignore
                    if (list && list.size > 0) {
                        // @ts-ignore
                        Object.keys(data.entities[entityName]).map((id) => list = list.remove(id));
                    }
                    // @ts-ignore
                    state = state.set(entityName, list);
                });
                // @ts-ignore
                state = state.mergeDeep(fromJS(data.entities));
            }
            break;
    }
    return state;
}

const appReducer = combineReducers({
    entities,
    ssrReducer,
    identity
});

function rootReducer(state, action) {
    const intermediateState = appReducer(state, action);
    // @ts-ignore
    const finalState = nextReducer(intermediateState, action);
    return finalState;
}


export default rootReducer;
