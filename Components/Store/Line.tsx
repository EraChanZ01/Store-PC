import React from "react"
import Link from "next/link"
import saga from 'redux/decorators/saga';
import ModelEntity from 'redux/models/model'
import { withRouter } from 'next/router';
import { connect } from 'react-redux';
import CategoryEntity from "redux/models/category"

interface MyProps {
    fetchAllModels: () => void,
    fetchAllCategory: () => void,

}



export class Line extends React.Component<MyProps>{

    constructor(props) {
        super(props);

        this.state = {

        }
        this.handleClick = this.handleClick.bind(this)
    }



    handleClick(event) {
        const { fetchAllModels, fetchAllCategory } = this.props
        fetchAllModels()
        fetchAllCategory()
    }

    render() {
        return (

            <div className=" flex justify-between text-white/20  mx-[350px] text-2xl font-bold">
                <Link href={"/store/Monitor"}>
                    <button type="button" onClick={this.handleClick}>
                        <div className="min-w-[120px] h-auto hover:text-white my-6 hover:border-b-2 border-yellow-600 ">
                            <img src="/Line/Monik.png" width={120} className="saturate-0 hover:filter-none" />
                            <p className=" text-center py-2"> Монитор</p>
                        </div>
                    </button>
                </Link>
                <Link href={"/store/Keyboard"}>
                    <button type="button" onClick={this.handleClick}>
                        <div className="min-w-[120px] h-auto hover:text-white my-6 hover:border-b-2 border-yellow-600 ">
                            <img src="/Line/Клава.png" width={120} className="saturate-0 hover:filter-none" />
                            <p className=" text-center py-2"> Клавиатура </p>
                        </div>
                    </button>
                </Link>
                <Link href={"/store/Maus"}>
                    <button type="button" onClick={this.handleClick}>
                        <div className="min-w-[120px] h-auto hover:text-white my-6 hover:border-b-2 border-yellow-600 ">
                            <img src="/Line/Мышка.png" width={120} className="saturate-0 hover:filter-none" />
                            <p className=" text-center py-2"> Мышка </p>
                        </div>
                    </button>
                </Link>
                <Link href={"/store/Earphones"}>
                    <button type="button" onClick={this.handleClick}>
                        <div className="min-w-[120px] h-auto hover:text-white my-6 hover:border-b-2 border-yellow-600 ">
                            <img src="/Line/Наушники.png" width={120} className="saturate-0 hover:filter-none" />
                            <p className=" text-center py-2"> Наушники </p>
                        </div>
                    </button>
                </Link>
                <Link href={"/store/Chair"}>
                    <button type="button" onClick={this.handleClick}>
                        <div className="min-w-[120px] h-auto hover:text-white my-6 hover:border-b-2 border-yellow-600 ">
                            <img src="/Line/Кресла.png" width={120} className="saturate-0 hover:filter-none" />
                            <p className=" text-center py-2">  Кресла</p>
                        </div>
                    </button>
                </Link>
                <Link href={"/store/Body"}>
                    <button type="button" onClick={this.handleClick}>
                        <div className="min-w-[120px] h-auto hover:text-white my-6 hover:border-b-2 border-yellow-600 ">
                            <img src="/Line/Корпус.png" width={120} className="saturate-0 hover:filter-none" />
                            <p className=" text-center py-2">  Корпуса</p>
                        </div>
                    </button>
                </Link>
            </div>


        )
    }
}

const mapStateToProps = (state, props) => {
    return {

    };
}

const monitor_connected = connect(mapStateToProps, { ...ModelEntity.triggers(), ...CategoryEntity.triggers() })(Line);
export default withRouter(monitor_connected);