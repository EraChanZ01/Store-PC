import Layout from "../Components/Layout/Layout"
import React from 'react'
import ReactDOM from 'react-dom'
import multer from 'multer'
import express from 'express'







export default class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {


        };

        this.handleChange = this.handleChange.bind(this);
        this.sendReauest = this.sendReauest.bind(this);


    };

    handleChange() {

        
        /*const requestURL = "https://jsonplaceholder.typicode.com/users" // Запросы будут по данному url

        this.sendReauest('POST', requestURL, {
            name: "Ilya",
            age: 21
        })
            .then(data => console.log(data))
            .catch(err => console.log(err))*/




    }

    sendReauest(method, url, body = null) {
        const headers = { 'Content-Type': 'application/json' }
        return fetch(url, { method: method, body: JSON.stringify(body), headers: headers })    // Пост запрос
            .then(response => {
                if (response.ok) {
                    return response.json()
                }
                return response.json().then(error => {
                    const e = new Error('Что-то не так')
                    e.data = error
                    throw e
                })
            })
        //return fetch(url).then(response => { return response.json() })      // fetch сразу асинхронен и выполняет метод GET по умолчанию. Первым параметром принемает url
        /*return new Promise((resolve, reject) => {


            const xhr = new XMLHttpRequest();

            xhr.open(method, url)

            xhr.responseType = 'json' // распарсиваем ответ в json
            xhr.setRequestHeader("Content-Type", "application/json")

            xhr.onload = () => { if (xhr.status >= 400) { reject(xhr.response) } else { resolve(xhr.response) } } // JSON.parse

            xhr.onerror = () => { console.log(xhr.response) }

            xhr.send(JSON.stringify(body))
        })*/
    }




    render() {


        return (
            <Layout>
                <div className=" bg-customize-blace111">
                    <div className="w-full h-[500px] bg-customize-button"></div>
                    <div className=" flex justify-around mt-10 mb-12 mx-14 h-[700px]">
                        <div className=" min-w-[3px]  h-[500px] relative border-t-[1px]  bg-gradient-to-b from-black/60 via-black/40 to-customize-blace111 border-white/30" >
                            <div className="my-5 w-[350px]  absolute text-white font-bold text-xl text-center">
                                <p className="mx-16">МОНТАЖ ТВОЕГО ПК В НАШ СТОЛ</p>
                            </div>
                            <div className="mt-20">
                                <img src="/card1.jpg" />
                            </div>
                            <div className="my-5 h-[300px]">
                                <ul className=" text-white ">
                                    <li className="border-l-[1px] border-yellow-600 w-[350px] mt-2 p-3">
                                        Размещение компонентов Вашего компьютера в столе
                                    </li>
                                    <li className="border-l-[1px] border-yellow-600 w-[350px] mt-2 p-3">
                                        Установка дополнительной кастомной системы водяного охлаждения
                                    </li>
                                    <li className="border-l-[1px] border-yellow-600 w-[350px] mt-2 p-3">
                                        Профессиональный кабель-менеджмент
                                    </li>
                                    <li className="border-l-[1px] border-yellow-600 w-[350px] mt-2 p-3">
                                        Нанесение винилографии по индивидуальным эскизам
                                    </li>
                                </ul>

                            </div>
                            <button className="text-white items-center text-center border-2 rounded-full w-full h-12" onClick={this.handleChange}>
                                Узнать подробнее
                            </button>
                        </div>
                        <div className=" min-w-[350px]  h-[500px] relative border-t-[1px] bg-gradient-to-b from-black/60 via-black/40 to-customize-blace111 border-white/30" >
                            <div className="my-5 w-[350px]  absolute text-white font-bold text-xl text-center">
                                <p className="mx-16">УВЕЛИЧЕНИЕ МОЩНОСТИ ТВОЕГО ПК</p>
                            </div>
                            <div className="mt-20">
                                <img src="/card2.jpg" />
                            </div>
                            <div className="my-5 h-[300px]">
                                <ul className=" text-white ">
                                    <li className="border-l-[1px] border-yellow-600 w-[350px] mt-2 p-3">
                                        Консультация по возможности апгрейда Вашего ПК
                                    </li>
                                    <li className="border-l-[1px] border-yellow-600 w-[350px] mt-2 p-3">
                                        Подбор и закупка комплектующих
                                    </li>
                                    <li className="border-l-[1px] border-yellow-600 w-[350px] mt-2 p-3">
                                        Установка комплектующих в Ваш ПК
                                    </li>

                                </ul>

                            </div>
                            <button className="text-white items-center text-center border-2 rounded-full w-full h-12">
                                Узнать подробнее
                            </button>
                        </div>
                        <div className=" min-w-[350px]  h-[500px] relative border-t-[1px] bg-gradient-to-b from-black/60 via-black/40 to-customize-blace111 border-white/30" >
                            <div className="my-5 w-[350px]  absolute text-white font-bold text-xl text-center">
                                <p className="mx-16">ЗАКАЗАТЬ КОРПУС - СТОЛ</p>
                            </div>
                            <div className="mt-20">
                                <img src="/card3.jpg" />
                            </div>
                            <div className="my-5 h-[300px]">
                                <ul className=" text-white ">
                                    <li className="border-l-[1px] border-yellow-600 w-[350px] mt-2 p-3">
                                        Заказ корпуса-стола по индивидуальным размерам
                                    </li>
                                    <li className="border-l-[1px] border-yellow-600 w-[350px] mt-2 p-3">
                                        Индивидуальная покраска корпуса-стола
                                    </li>

                                </ul>

                            </div>
                            <button className="text-white items-center text-center border-2 rounded-full w-full h-12">
                                Узнать подробнее
                            </button>
                        </div>
                    </div>
                    <div className="w-full h-[500px] bg-customize-button"></div>
                </div>
            </Layout>
        );
    }
}