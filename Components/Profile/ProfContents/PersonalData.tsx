import { stringifyQuery } from "next/dist/server/server-route-utils";
import React, { useState } from "react"
import { connect } from "react-redux";
import Router, { withRouter } from "next/router";
import UserEntity from 'redux/models/users'
import ModelsEntity from 'redux/models/model'
import { IIdentity } from 'server/constants';
import identity from "redux/models/identity";
import saga from "redux/decorators/saga";

export interface IPersonalDataProps {
    identity: any;
    users: any;
    saveUsers: (data: any) => void
}

export interface MyState {
    firstName: string;
    lastName: string;
    phoneNumber: number;
    userEmail: string;
    location: string;
    role: string
    image: string


}
@saga(UserEntity)
export class PersonalData extends React.Component<IPersonalDataProps, MyState> {

    constructor(props) {
        super(props);
        this.state = {
            firstName: this.props.identity.firstName,
            lastName: this.props.identity.lastName,
            phoneNumber: this.props.identity.phoneNumber,
            userEmail: this.props.identity.userEmail,
            location: this.props.identity.location,
            role: this.props.identity.role,
            image: this.props.identity.image

        };

        this.handleChange = this.handleChange.bind(this);
        this.handeClick = this.handeClick.bind(this)
        //this.updateUser = this.updateUser.bind(this)
    };

    async handeClick(event) {

        const countUres = this.props.users?.find(user => user.get("id") == this.props.identity.userId)



        const { saveUsers } = this.props

        if (countUres) {
            const PersonalData: IIdentity = {
                userId: countUres.get("id"),
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                phoneNumber: this.state.phoneNumber,
                userEmail: this.state.userEmail,
                location: this.state.location,
                image: this.state.image

            }
            saveUsers(PersonalData)
        }
        else { return }







    }




    handleChange(event) {



        const target = event.target;
        const name = target.name;
        this.setState<typeof name>({

            [name]: target.value

        });




    }


    render() {
        const { identity } = this.props;








        return (
            <div className="mb-20 border-[1px] border-white/20 bg-customize-button/70 w-full h-[850px] rounded-lg">

                <div className=" flex border-b-[1px] text-white">
                    <div className="ml-5 mt-3 mb-3">
                        <p className="text-xl">Персональыне данные</p>
                        <p className="text-sm">Обновите свою личную информацию</p>
                    </div>
                    <div className="flex ml-40">
                        <button className=" mr-7 border-2 border-yellow-600 rounded-lg mt-4 h-10 p-1 px-3 bg-yellow-600" type="button" onClick={this.handeClick}>
                            Сохранить изменения
                        </button>
                        <button className="rounded-lg h-10 mt-4 p-1 px-3 bg-white/30">
                            Отмена
                        </button>
                    </div>
                </div>

                <div className="text-white" >
                    <div className="flex">
                        <div className=" ">
                            <p className="mt-24 ml-20 text-white">Аватар</p>
                        </div>
                        <div className="bg-[url('https://w7.pngwing.com/pngs/122/182/png-transparent-xiaomi-logo-xiaomi-mi-a1-smartphone-internet-business-smartphone-angle-electronics-text-thumbnail.png')] bg-cover rounded-lg h-[120px] w-[120px] ml-48 mt-20" >

                        </div>
                    </div>
                    <div className="flex">
                        <div className="w-[320px]">
                            <p className=" text-white ml-20 mt-16"> Имя</p>
                        </div>
                        <input className=" bg-white/10 h-10 w-96 mt-14 p-2 " name="firstName" defaultValue={identity.firstName} onChange={this.handleChange} >

                        </input>
                    </div>
                    <div className="flex">
                        <div className="w-[320px]">
                            <p className=" text-white ml-20 mt-16"> Фамилия</p>
                        </div>
                        <input className=" bg-white/10 h-10 w-96 mt-14 p-2 " defaultValue={identity.lastName} name="lastName" onChange={this.handleChange}>

                        </input>
                    </div>
                    <div className="mt-10 text-white text-center text-xl">
                        Контактная информация
                    </div>
                    <div className="flex">
                        <div className="w-[320px]">
                            <p className=" text-white ml-20 mt-16"> Контактный номер</p>
                        </div>
                        <div className="w-96 mt-14">
                            <input className=" bg-white/10 h-10 w-full p-2 " type='number' defaultValue={identity.phoneNumber} name="phoneNumber" onChange={this.handleChange}>

                            </input>
                            <p>Мы никогда не будем делиться вашей электронной почтой с кем-либо еще.</p>
                        </div>
                    </div>
                    <div className="flex">
                        <div className="w-[320px]">
                            <p className=" text-white ml-20 mt-16"> Електроная почта</p>
                        </div>
                        <div className="w-96">
                            <input className=" bg-white/10 h-10 w-full mt-14 p-2 " defaultValue={identity.userEmail} name="userEmail" onChange={this.handleChange}>

                            </input>
                        </div>
                    </div>
                </div>

            </div>
        )
    }


}


const mapStateToProps = (state, props) => {
    const users = state.entities.get('users');
    const identity = state.identity;
    return {
        identity,
        users,
    };
}

const home = connect(mapStateToProps, { ...UserEntity.triggers(), ...ModelsEntity.triggers() })(PersonalData);
export default withRouter(home);