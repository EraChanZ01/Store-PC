import React from "react";
import Router, { withRouter } from "next/router";
import saga from 'redux/decorators/saga';
import { connect } from 'react-redux';
import BrendsEntity from 'redux/models/brends'
import { IBrends } from 'server/constants';
import { AddBrendimg } from "./AddBrendImg";
import { composeWithDevTools } from "@reduxjs/toolkit/dist/devtoolsExtension";
import BrendInput from "./Brend/BrendInput"

export interface IModalAddProps {

    Disp: String,
    offDisp: (why) => void,
    saveBrand: (data: IBrends) => void,
    category: any

}

export interface IModalAddState {


    name: string,
    email: string,
    img: string,
    files: any,
    filesSize: string,
    filesName: string,
    dispOn: string,
    chooseCategory: any
}



@saga(BrendsEntity)
export class ModalAddBrend extends React.Component<IModalAddProps, IModalAddState> {


    constructor(props) {
        super(props);



        this.state = {

            name: "",
            email: "",
            img: "",
            files: [],
            filesSize: "",
            filesName: "",
            dispOn: "",
            chooseCategory: [],
        };

        this.handleChange = this.handleChange.bind(this);
        this.openInput = this.openInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.Dispoff = this.Dispoff.bind(this);
        this.СhooseCategory = this.СhooseCategory.bind(this);



    };

    СhooseCategory(input) {



        const { chooseCategory } = this.state
        if (input.checked.current.checked == true) {

            chooseCategory.push(input.id)

        }
        else if (input.checked.current.checked == false) {
            for (let i = 0; i < chooseCategory.length; i++) {
                if (input.id == chooseCategory[i]) {
                    chooseCategory.splice(i, 1)
                    console.log(chooseCategory)
                }
            }

        }


    }

    Dispoff(off) {
        this.setState({ dispOn: `${off}` })
        this.setState({ img: ' ' })
        this.setState({ filesName: ' ' })
        this.setState({ filesSize: ' ' })
    }



    async handleSubmit(event) {











        const { saveBrand } = this.props;
        const BrendsData: IBrends = {
            brendsId: null,
            email: this.state.email,
            name: this.state.name,
            img: "",
            categoryName: this.state.chooseCategory
        }

        saveBrand(BrendsData);


    };



    handleChange(event) {

        const target = event.target;
        const name = target.name;
        this.setState<typeof name>({

            [name]: target.value

        });




        // console.log(string64)

        //var string = string64.toString('base64')

        //console.log(string)


    }

    openInput(event) {

        this.setState({ dispOn: 'absolute' })


        const file = Array.from(event.target.files)





        this.setState({ files: event.target.files })

        file.forEach(file => {
            const reader = new FileReader()
            const div = document.getElementById('input-div')

            reader.onload = ev => {

                this.setState({ filesSize: file.size })
                this.setState({ filesName: file.name })
                this.setState({ img: `${ev.target.result}` })
            }
            reader.readAsDataURL(file)
        })





    }




    render() {
        const { Disp, category } = this.props;


        return (
            <div className={` ${Disp ? Disp : 'hidden'} w-[800px] min-h-[500px] max-h-[800px] bg-customize-button top-[100px] left-[550px] fixed z-40 rounded-xl border-[1px] border-customize-text `}>
                <button className="" type="button" onClick={() => this.props.offDisp('hidden')} >
                    <svg version="1.0" xmlns="http://www.w3.org/2000/svg" className="absolute top-2 right-2"
                        width="25.000000pt" height="25.000000pt" viewBox="0 0 512.000000 512.000000"
                        preserveAspectRatio="xMidYMid meet">

                        <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                            fill="#ca8a04" stroke="none">
                            <path d="M161 5103 c-88 -31 -161 -136 -161 -233 0 -20 7 -59 16 -86 15 -45 106 -139 1103 -1137 l1086 -1087 -1082 -1083 c-594 -595 -1089 -1097 -1098 -1116 -45 -90 -24 -213 50 -286 69 -70 163 -91 261 -59 45 15 139 106 1136 1103 l1088 1086 1088 -1086 c997 -997 1091 -1088 1136 -1103 98 -32 192 -11 261 59 70 69 91 163 59 261 -15 45 -106 139 -1103 1137 l-1086 1087 1086 1088 c997 997 1088 1091 1103 1136 32 98 11 192 -59 261 -69 70 -163 91 -261 59 -45 -15 -139 -106 -1137 -1103 l-1087 -1086 -1088 1086 c-997 997 -1091 1088 -1136 1103 -61 20 -117 19 -175 -1z" />
                        </g>
                    </svg>
                </button>
                <div className=" w-full h-full">
                    <div className="flex w-[700px]">
                        <div className=" static border-[1px] border-black h-64 w-64 mx-[70px] mt-5 bg-white/80  ">
                            <div className={`relative w-full h-full bg-white `} id="input-div">

                                <div className="block absolute border-2 border-black w-[120px] h-[120px] top-[66px] left-[66px] rounded-lg z-30">
                                    <input type="file" className=" " name="imgg" style={{ display: 'none' }} id="input-file" onChange={this.openInput} accept="image/*" />
                                    <label htmlFor="input-file" className=" rounded-lg block absolute border-2 border-black w-[40px] h-[40px] top-[37px] left-[37px] after:absolute after:border-b-2 after:top-[16px] after:w-8 after:border-black after:h-0 after:left-[2px]
                             before:absolute before:border-l-2 before:top-[2px] before:w-0 before:border-black before:h-8 before:left-[17px]">
                                    </label>
                                </div>

                            </div>

                            <AddBrendimg result={this.state.img} files={this.state.files} filesName={this.state.filesName} filesSize={this.state.filesSize} disp={this.state.dispOn} Dispoff={this.Dispoff} />

                        </div>
                        <div className=" mt-10 w-[300px] text-white/75">
                            <input type="text" className=" mt-10 w-[300px] h-8 autofill:bg-customize-text/60  bg-customize-text/60 p-1 " name="name" placeholder='Название' onChange={this.handleChange} />
                            <input type="email" className=" mt-10 w-[300px] h-8 autofill:bg-customize-text/60 bg-customize-text/60 p-1 " name="email" placeholder='Почта' onChange={this.handleChange} />
                        </div>
                    </div >
                    <BrendInput category={category} СhooseCategory={this.СhooseCategory} />
                    <div className=" flex justify-center mt-5">
                        <button className="bg-yellow-600 rounded-lg h-8 w-full mx-[150px] text-white" type='button' onClick={this.handleSubmit}>
                            Добавить
                        </button>
                    </div>
                </div >
            </div >
        )
    }




};



/**/

const mapStateToProps = (state, props) => {


    const category = state.entities.get("category")


    return {

        category
    };


}

const monitor_connected = connect(mapStateToProps, BrendsEntity.triggers())(ModalAddBrend);
export default withRouter(monitor_connected);

