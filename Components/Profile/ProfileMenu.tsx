import { WithRouterProps } from "next/dist/client/with-router";
import Link from "next/link"
import Router, { withRouter } from 'next/router'
import React from "react"
import BrendsEntity from 'redux/models/brends'
import saga from 'redux/decorators/saga';
import { connect } from 'react-redux';
import CategoryEntity from "redux/models/category"
import UsersEntity from "redux/models/users"


interface IProfileMenuProps extends WithRouterProps {

}

interface IProfileContentState {

}

@saga(BrendsEntity)
class ProfileMenu extends React.Component<IProfileMenuProps, IProfileContentState> {


    constructor(props) {
        super(props);
        this.state = {

        };


        //Забинженые функции
        // this.handleChange = this.handleChange.bind(this);
        //this.handleSubmit = this.handleSubmit.bind(this);
        //this.registerUser = this.registerUser.bind(this);

    };


    render() {



        return (
            <div className="mb-10 ">
                <div className=" border-[1px] border-white/20 bg-customize-button/70 rounded-lg mr-2  mt-2 h-[850px]">
                    <div className=" text-start text-white mt-10 border-1 hover:bg-white/5 hover:text-yellow-600 h-10 mx-6">
                        <Link href={"/profile/PersonalData"}>
                            <button >

                                <p className="p-2">Персональные данные</p>

                            </button>
                        </Link>
                    </div>
                    <div className=" text-start text-white mt-10 border-1 hover:bg-white/5 hover:text-yellow-600 h-10 mx-6">
                        <Link href={"/profile/PrfileBrend"}>
                            <button type="button">

                                <p className="p-2">Бренды</p>

                            </button>
                        </Link>
                    </div>
                    <div className=" text-start text-white mt-10 border-1 hover:bg-white/5 hover:text-yellow-600 h-10 mx-6">
                        <Link href={"/profile/ProfileDevice"}>
                            <button type="button">

                                <p className="p-2">Дивайсы</p>

                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state, props) => {
    const entities = state.entities;

    return {
        entities,


    };
}

const login_connected = connect(mapStateToProps, { ...BrendsEntity.triggers(), ...CategoryEntity.triggers(), ...UsersEntity.triggers() })(ProfileMenu);

export default withRouter(login_connected);


