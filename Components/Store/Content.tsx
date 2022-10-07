import React from "react"
import saga from 'redux/decorators/saga';
import ModelEntity from 'redux/models/model'
import CategoryEntity from "redux/models/category"
import { withRouter } from 'next/router';
import { connect } from 'react-redux';
import ContentItem from './ContentItem'

export interface IContentProps {
    active: any;
    models: any,
    categor: any,
    ModalEditActive: () => void
}

@saga(CategoryEntity)
export class Content extends React.Component<IContentProps> {




    render() {

        const { models, categor, active } = this.props

        const caregorCountid = []
        console.log(active)

        if (active == "Monitor") {
            caregorCountid.push("62d2a61f30618a11d019a134")
        }
        if (active == "Keyboard") {
            caregorCountid.push("62dc138402ba0d87e18de90b")
        }
        if (active == "Maus") {
            caregorCountid.push("62dc138402ba0d87e18de919")
        }
        if (active == "Earphones") {
            caregorCountid.push("62dc138402ba0d87e18de927")
        }
        if (active == "Chair") {
            caregorCountid.push("62dc138402ba0d87e18de935")
        }
        if (active == "Body") {
            caregorCountid.push("62dc138402ba0d87e18de943")
        }
        const currentModel = models?.filter(model => { if (model?.get("categoryid") == caregorCountid) { return true } })

        const res = []
        currentModel?.forEach(model => res.push(<ContentItem models={model} ModalEditActive={this.props.ModalEditActive} />))

        return (
            <div className=" lg:mx-[90px] xl:mx-[200px] mb-10 z-30 mt-5">
                <div className="grid grid-cols-3 gap-16 w-full">
                    {res}
                </div>
            </div>
        )
    }
}


const mapStateToProps = (state, props) => {
    const models = state.entities.get("models")
    const categor = state.entities.get("category")

    return {
        models,
        categor
    };
}


const monitor_connected = connect(mapStateToProps, ModelEntity.triggers())(Content);
export default withRouter(monitor_connected);