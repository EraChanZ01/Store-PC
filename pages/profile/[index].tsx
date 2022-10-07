import React, { useState, useEffect, useContext } from "react";
import Layout from "../../Components/Layout/Layout"
import Link from "next/Link"
import ProfileContent from "../../Components/Profile/ProfileContent"
import ProfileHeader from "../../Components/Profile/ProfileHeader"
import ProfileMenu from "../../Components/Profile/ProfileMenu"
import Router from "next/router"
import { WithRouterProps } from "next/dist/client/with-router";
import { withRouter } from 'next/router';
import { connect } from 'react-redux';
import PersonalData from '../../Components/Profile/ProfContents/PersonalData'
import PrfileBrend from '../../Components/Profile/ProfContents/ProfileBrend'
import ProfileDevice from '../../Components/Profile/ProfContents/ProfileDevice'
import CategoryEntity from 'redux/models/category'
import saga from 'redux/decorators/saga';


interface MyProps extends WithRouterProps {


}

interface MyState {



}

export enum PageParams {
    personalData = "PersonalData",
    prfileBrend = "PrfileBrend",
    profileDevice = "ProfileDevice"
}


@saga(CategoryEntity)
export class Profile extends React.Component<MyProps, MyState> {

    constructor(props) {
        super(props);
        this.state = {


        };


        //Забинженые функции
        // this.handleChange = this.handleChange.bind(this);
        //this.handleSubmit = this.handleSubmit.bind(this);
        this.getProfileContent = this.getProfileContent.bind(this);
    };


    getProfileContent() {
        const { router } = this.props;



        switch (router.query.index) {
            case PageParams.personalData:

                return (<PersonalData />)
                break;

            case PageParams.prfileBrend:

                return (<PrfileBrend />)
                break;

            case PageParams.profileDevice:

                return (<ProfileDevice />)
                break;
        }
    }





    render() {




        const Data = this.getProfileContent()
        return (
            <Layout>
                <div className="mt-20 bg-customize-blace111  relative ">
                    <div className='max-w-5xl mx-auto'>
                        <div className="">
                            <ProfileHeader />
                        </div>
                        <div className="flex flex-row justify-between mt-3">
                            <div className=''>
                                <ProfileMenu />
                            </div>
                            <div className='w-[770px]'>
                                <ProfileContent children={Data} />
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>



        )
    }
}

const mapStateToProps = (state, props) => {
    const users = state.entities.get('users');
    const entities = state.entities;
    return {
        users, entities
    };
}

const home = connect(mapStateToProps, CategoryEntity.triggers())(Profile);
export default withRouter(home);




