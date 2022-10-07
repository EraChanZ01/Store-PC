import Layout from '../Components/Layout/Layout'
import Link from 'next/link'
import React from "react";
import { threadId } from 'worker_threads';
import Router, { withRouter } from 'next/router'
import identity from 'redux/models/identity'
import saga from 'redux/decorators/saga';
import { connect } from 'react-redux';
import { ILoginData } from 'server/constants';


interface MyProps {
    loginUser: (data: ILoginData) => void;
}

interface MyState {
    password: string,
    userEmail: string,
    auth: boolean,
}

@saga(identity)
class Login extends React.Component<MyProps, MyState>  {
    constructor(props) {
        super(props);
        this.state = {

            password: '',
            userEmail: '',
            auth: false

        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        //this.entranceUser = this.entranceUser.bind(this);
        
    };


    /*getCookie(token) {
        var matches = document.cookie.match(new RegExp("(?:^|; )" + token.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"));
        return matches ? decodeURIComponent(matches[1]) : undefined
        
        
        

        
    }*/



    

    handleChange(event) {

        const target = event.target;
        const name = target.name;
        this.setState<typeof name>({

            [name]: target.value

        });

    }


    async handleSubmit() {
        const { loginUser } = this.props;
        const loginData : ILoginData = {
            userEmail: this.state.userEmail,
            password: this.state.password
        }
        
        loginUser(loginData);
        console.log(loginData)
        // await this.entranceUser()
        // const data = await this.entranceUser();
    }

    /*entranceUser() {
        const fullUrl = 'http://localhost:3000' + '/' + 'auth/login';
        console.log(5)
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

    }*/

    render() {
        /*console.log(this.getCookie('token'));
         if(this.getCookie('token') != undefined)
         this.setState({ auth: true })
         */

        return (

            <div className=' bg-customize-blace111 text-white'>
                <Layout>

                    <form >
                        <div className='flex justify-center p-5 m-5 text-3xl font-bold mt-[82px] mb-16 '>
                            <p className='mt-10'>Добро пожаловать в центр участников Coregame.ua</p>
                        </div>
                        <div className='flex justify-between mb-10'>
                            <div className='flex ml-32'>
                                <div className='mx-5'>
                                    <img src="icon.png" width={170} />
                                </div>
                                <div>
                                    <h2 className='pb-5 text-xl font-bold'>Не являетесь участником?</h2>
                                    <p className=''>Станьте участником, чтобы следить за последними акциями и обновлениями о поддержке</p>
                                    <button className='flex ring-2 ring-yellow-600 ring-offset-4 ring-offset-customize-blace111 rounded-lg my-5 mr-33 text-xl hover:bg-yellow-600 text-yellow-600 hover:text-white hover:ring-offset-yellow-600'>
                                        <Link href="/register">
                                            <p className='p-5 '>Coздать учетную запись</p>
                                        </Link>
                                        <img className=" m-5" src='paint.png   ' width={30} />
                                    </button>
                                </div>
                            </div>
                            <div className='border-l-[1px] mr-96'>
                                <h1 className='flex justify-start text-xl pl-5 font-bold ml-5'> Войти в кабинет </h1>
                                <p className='flex justify-start p-5 ml-5'>Войдите, чтобы добавлять товары в избранное,
                                    и видеть свои заказы</p>
                                <div className='m-5 ml-10'>
                                    <input className='rounded-sm pl-2 h-12 w-full bg-customize-text border-b-[1px] border-customize-slate200/50' onChange={this.handleChange} type="userEmail" name="userEmail" required placeholder='Эл.почта' />
                                </div>
                                <div className='m-5 ml-10'>
                                    <input className='rounded-sm pl-2 h-12 w-full bg-customize-text border-b-[1px] border-customize-slate200/50' onChange={this.handleChange} type="password" name="password" required placeholder='Пароль' />
                                </div>
                                <button className='ring-4 ring-yellow-600 rounded-lg bg-yellow-600 text-white h-[50px] w-[500px] m-6 ml-12 hover:bg-customize-blace111 hover:text-yellow-600' type='button' onClick={this.handleSubmit} >
                                    Войти
                                </button>
                            </div>
                        </div>
                    </form>
                </Layout>
            </div>
        )
    }
}

const mapStateToProps = (state, props) => {
	return {
    };
}

const login_connected = connect(mapStateToProps, identity.triggers())(Login);
export default withRouter(login_connected);