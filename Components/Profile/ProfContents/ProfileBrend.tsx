import ModalAddBrend from "../../modal/ModalAddBrend"
import React, { useEffect } from "react";
import Link from 'next/link'
import { threadId } from 'worker_threads';
import Router, { withRouter } from 'next/router'
import identity from 'redux/models/identity'
import saga from 'redux/decorators/saga';
import { connect } from 'react-redux';
import { ILoginData } from 'server/constants';
import BrendsEntity from 'redux/models/brends'
import CategoryEntity from 'redux/models/category'
import ListBrends from "./Brend/ListBrends";
import brends from "redux/models/brends";



interface MyProps {

    brends: any,
    //fetchAllBrend: () => void,
    //fetchAllCategory: () => void,
}

interface MyState {
    onDisp: string,
    setingDisp: string,
    brend: string,
    get: boolean
}






@saga(BrendsEntity)
export class PrfileBrend extends React.Component<MyProps, MyState> {

    constructor(props) {
        super(props);
        this.state = {
            onDisp: '',
            setingDisp: '',
            get: false,
            brend: '',

        };

        this.openDisp = this.openDisp.bind(this);
        this.offDisp = this.offDisp.bind(this)
        //this.Get = this.Get.bind(this)

    };




    //async Get() {

    // await this.props.fetchAllBrend()



    // this.setState({ get: true })





    //}

    openDisp(event) {
        this.setState({ setingDisp: 'brightness-50' });
        this.setState({ onDisp: 'flex' });


    }

    offDisp(why) {
        this.setState({ setingDisp: 'brightness-100' })
        this.setState({ onDisp: `${why} ` });

    }

    render() {






        // if (this.state.get == false) {

        // this.Get()


        // }



        const { brends } = this.props;




        return (
            <div className={` relative mb-20 border-[1px] border-white/20 bg-customize-button/70 w-full h-[850px] rounded-lg`}>

                <ModalAddBrend Disp={this.state.onDisp} offDisp={this.offDisp} />
                <div>


                    <div>
                        <div className="flex">
                            <div className="">
                                <p className="ml-16 mt-5 text-xl text-white">Доступные Бренды</p>
                            </div>
                            <div className=" ml-[340px] mr-10 mt-5 bg-yellow-600 rounded-lg h-10 w-36 text-center">
                                <button className="p-2 text-black" type="button" onClick={this.openDisp} >
                                    Добавить бренд
                                </button>
                            </div>
                        </div>
                        <div className="border-[1px] rounded-xl drop-shadow-2xl h-96 mt-8 mx-5 overflow-auto " >
                            <div className="">
                                <div>
                                    <ListBrends brends={brends} />
                                </div>

                            </div >
                            <div className="">

                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }

}


const mapStateToProps = (state, props) => {
    const brends = state.entities.get("brands");


    return {
        brends,

    };
}

const login_connected = connect(mapStateToProps, BrendsEntity.triggers())(PrfileBrend);
export default withRouter(login_connected);