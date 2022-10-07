import Layout from 'Components/Layout/Layout'
import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/Link'
import React from "react";
import Router, { withRouter } from 'next/router'
import identity from 'redux/models/identity'
import saga from 'redux/decorators/saga';
import { connect } from 'react-redux';
import { Ireg } from 'server/constants';

interface MyProps {

    registerUser: (data: Ireg) => void
}

interface MyState {
    userEmail: string,
    firstName: string,
    lastName: string,
    password: string,
    rePassword: string,
    passwordDoesNotMatch: boolean,
    location: string,
    phoneNumber: number,

}

// Cоздание класса Reg
@saga(identity)
export class Reg extends React.Component<MyProps, MyState> {


    //Конструктор
    constructor(props) {
        super(props);
        this.state = {
            userEmail: '',
            firstName: '',
            lastName: '',
            location: '',
            phoneNumber: null,
            password: '',
            rePassword: '',
            passwordDoesNotMatch: false,
        };


        //Забинженые функции
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        //this.registerUser = this.registerUser.bind(this);
    };






    // функция для отслеживание по нажатию на input
    handleChange(event) {

        const target = event.target;
        const name = target.name;
        this.setState<typeof name>({

            [name]: target.value

        });


    }

    //функция по нажатию на Кнопку
    async handleSubmit(event) {
        if (this.state.password == this.state.rePassword) {
            event.preventDefault();
            //const { registerUser } = this.props;
            // const regData: Ireg = {
            // firstName: this.state.firstName,
            // lastName: this.state.lastName,
            //  role: null,
            // image: null,
            // location: this.state.location,
            //  phoneNumber: this.state.phoneNumber,
            //  userEmail: this.state.email,
            //  password: this.state.password,

            // }

            // registerUser(regData);
            await this.registerUser()
            Router.push('/')

        }
        else {
            this.setState({ passwordDoesNotMatch: true });
        }
    }

    //функия регистрации
    registerUser() {
        let fullUrl = 'http://localhost:3000' + '/' + 'auth/signup';
        const params: any = {
            method: 'POST',
            credentials: 'include',
            headers: {
                Authorization: 'bearer',
            },
        };
        params['headers']['content-type'] = 'application/json';
        params['body'] = JSON.stringify(this.state);
        return fetch(fullUrl, params)
            .then((response) => {
                return response.json().then((json) => ({ json, response }));
            }).then(({ json, response }) =>
                Promise.resolve({
                    success: response.ok ? true : false,
                    response: json
                })
            );


    }




    render() {
        return (

            <form className=' bg-customize-blace111 text-white'>
                <Layout>
                    <div className=' border-b-[1px] border-customize-slate200/50 mx-56 top-0'>
                        <h1 className='flex justify-center text-3xl font-bold py-5 mt-20 pt-10'>
                            Зарегистрироваться
                        </h1>
                        <p className='flex justify-center pt-5 text-lg'> Мы обязуется поддерживать и защищать конфиденциальность предоставляемой Вами информации.</p>
                        <p className='flex justify-center pb-5 text-lg'> Информация, которую вы предоставляете на данном сайте, поможет нам улучшить качество обслуживания.</p>
                    </div>

                    <div className='grid grid-cols-2 mx-56 my-10 border-b-[1px] border-customize-slate200/50'>
                        <div className="col-span-2 flex flex-col mt-5 " >

                            <p className="after:content-['*'] after:ml-0.5 after:text-red-500" >Эл.Почта</p>
                            <input className=" rounded-sm my-2 py-3 w-full bg-customize-text border-b-[1px] border-customize-slate200/50" onChange={this.handleChange} placeholder='' name="userEmail" type="userEmail" required />

                        </div>

                        <div className='mr-8 my-4'>
                            <p className="after:content-['*'] after:ml-0.5 after:text-red-500">Пароль</p>
                            <input className=' rounded-sm my-2 py-3 w-full bg-customize-text border-b-[1px] border-customize-slate200/50' onChange={this.handleChange} placeholder='' name="password" type="password" required />
                        </div>
                        {this.state.passwordDoesNotMatch ? (
                            <div className='ml-8 my-4'>

                                <p className=" after:content-['*'] after:ml-0.5 after:text-red-500">Подтвердить пароль</p>
                                <input className=" rounded-sm my-2 py-3 w-full ring-2 ring-red-600 bg-customize-text border-b-[1px] border-customize-slate200/50"
                                    onChange={this.handleChange} placeholder='' name="rePassword" type="password" required />
                            </div>




                        ) : (
                            <div className='ml-8 my-4'>

                                <p className="after:content-['*'] after:ml-0.5 after:text-red-500">Подтвердить пароль</p>
                                <input className=" rounded-sm my-2 py-3 w-full bg-customize-text border-b-[1px] border-customize-slate200/50" onChange={this.handleChange} placeholder='' name="rePassword" type="password" required />
                            </div>

                        )
                        }

                        <div className='mr-8 my-4'>
                            <p className="after:content-['*'] after:ml-0.5 after:text-red-500">Имя</p>
                            <input className=' rounded-sm my-2 py-3 w-full bg-customize-text border-b-[1px] border-customize-slate200/50' onChange={this.handleChange} placeholder='' name="firstName" type="text" required />
                        </div>
                        <div className='ml-8 my-4'>
                            <p className="">Фамилия</p>
                            <input className=" rounded-sm my-2 py-3  w-full bg-customize-text border-b-[1px] border-customize-slate200/50" onChange={this.handleChange} placeholder='' name='lastName' type="text" />
                        </div>
                        <div className='mr-8 my-4'>
                            <p className="after:content-['*'] after:ml-0.5 after:text-red-500">Месторасположение</p>
                            <select className='rounded-sm my-2 py-3 w-full bg-customize-text border-b-[1px] border-customize-slate200/50' onChange={this.handleChange} name="location" required >
                                <option>Выбрать</option>
                                <option>Киев</option>
                                <option>Харьковская область</option>
                                <option>Одесская область</option>
                                <option>Днепропетровская область</option>
                                <option>Донецкая область</option>
                                <option>Запорожская область</option>
                                <option>Львовская область</option>
                                <option>Киевская область</option>
                                <option>Луганская область</option>
                                <option>Херсонская область</option>
                                <option>Полтавская область</option>
                                <option>Хмельницкая область</option>
                                <option>Черкасская область</option>
                                <option>Черниговская область</option>
                                <option>Черновицкая областьы</option>
                                <option>Ровенская область</option>
                                <option>Волынская область</option>
                                <option>Ивано-Франковская область</option>
                                <option>Тернопольская область</option>
                                <option>Винницкая область</option>
                                <option>Кировоградская область</option>
                                <option>Сумская область</option>
                                <option>Николаевская область</option>
                                <option>Закарпатская область</option>
                                <option>Житомирская область</option>

                            </select>
                        </div>
                        <div className='ml-8 mb-10 my-4'>
                            <p className="">Контактный номер телефона</p>
                            <input className=' bg-customize-text rounded-sm w-full py-3 my-2 border-b-[1px] border-customize-slate200/50' onChange={this.handleChange} name="phoneNumber" type="number" placeholder='' />
                        </div>
                    </div>

                    <div className='flex justify-between mx-56 mb-10'>
                        <button className=' rounded-sm bg-red-600 py-3 mr-7 w-full' type="button" onClick={this.handleSubmit} >
                            Зарегистрироваться
                        </button>
                        <Link href="/log">
                            <button className=' rounded-sm  py-3 ml-7 w-full bg-gray-400'>

                                Отмена
                            </button>
                        </Link>

                    </div>
                </Layout>
            </form >


        )
    }
}

const mapStateToProps = (state, props) => {
    return {
    };
}

const login_connected = connect(mapStateToProps, identity.triggers())(Reg);
export default withRouter(login_connected);
