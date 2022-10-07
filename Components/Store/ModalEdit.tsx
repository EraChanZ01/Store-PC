import React from "react"
import Info from "./InfoEdit/ModalInfo"
import SelectBrend from "./EditDevice/SelectBrend"
import SelectCategory from "./EditDevice/SelectCategory"
import ModelEntity from 'redux/models/model'
import BrendsEntity from 'redux/models/brends'
import CategoryEntity from "redux/models/category"
import saga from 'redux/decorators/saga';
import { withRouter } from 'next/router';
import { connect } from 'react-redux';

interface MyProps {
    categor: any,
    models: any,
    brends: any,
    ModalEditActiveState: string,
    CountEditDevice: string,
    saveModel: (data) => void,
    ModalEditActive: () => void,
    fetchAllBrend: () => void,
    fetchAllCategory: () => void,
    fetchAllModels: () => void

}
interface MyState {
    editInfo: any,
    edit: boolean,
    categoryid: string,
    brendName: string,
    load: boolean,
    price: number,
    img: any,
    name: string,
    load2: boolean,
    id: string

}

@saga(BrendsEntity)
export class EditModal extends React.Component<MyProps, MyState> {

    constructor(props) {
        super(props);

        this.state = {
            load: false,
            edit: false,
            editInfo: [],
            categoryid: "",
            brendName: "",
            name: "",
            load2: false,
            id: "",
            price: null,
            img: "",

        };

        this.EditInfoDivece = this.EditInfoDivece.bind(this);
        this.InputGroupEditInfo = this.InputGroupEditInfo.bind(this)
        this.СountCategory = this.СountCategory.bind(this)
        this.СountBrend = this.СountBrend.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)

    };


    handleChange(event) {

        const target = event.target;
        const name = target.name;
        this.setState<typeof name>({

            [name]: target.value

        });


    }

    handleSubmit(event) {
        console.log("!!!!!!!")
        const { saveModel } = this.props
        const EditModel = {
            id: this.state.id,
            name: this.state.name,
            price: this.state.price,
            img: this.state.img,
            info: this.state.editInfo,
            categoryid: this.state.categoryid,
            brendName: this.state.brendName,
        }
        console.log("!!!!!!!")

        saveModel(EditModel)

    }

    СountCategory(option) {
        this.setState({ categoryid: `${option}` })
    }

    СountBrend(name) {

        this.setState({ brendName: `${name}` })
    }

    EditInfoDivece() {
        const newArray = [...this.state.editInfo]
        if (newArray.length <= 9)
            if (newArray.length == 0) {

                newArray.push({
                    param: "",
                    value: "",
                    id: "Group-" + 1
                })

            }
            else {
                const last = newArray[newArray.length - 1]
                const index = parseInt(last.id.split("-")[1])
                newArray.push({
                    param: "",
                    value: "",
                    id: "Group-" + (index + 1)
                })
            }
        this.setState({ editInfo: newArray })
    }

    InputGroupEditInfo(e, id) {
        let newArray = [...this.state.editInfo]
        newArray = newArray.map(obj => {
            if (obj.id == id) {
                if (e.target.name == "value") {
                    obj.value = e.target.value
                }
                if (e.target.name == "param") {
                    obj.param = e.target.value
                }
            }
            return obj
        })




    }

    render() {
        const { ModalEditActiveState, brends, categor, models, CountEditDevice, ModalEditActive } = this.props

        if (this.state.load == false) {
            this.props.fetchAllBrend()
            this.props.fetchAllCategory()
            this.props.fetchAllModels()
            this.setState({ load: true })


        }

        const countDevice = models?.find(model => { if (model.get("id") == CountEditDevice) { return true } else false })  // выбирает тот дивайс на котором была нажала кнопка edit
        const countBrend = brends?.find(brend => brend.get("id") == countDevice?.get("brendName"))
        const countCategory = categor?.find(categ => categ.get("id") == countDevice?.get("categoryid"))



        const currentBrend = brends?.find(brend => brend?.get("id") == this.state.brendName)
        const brendCategories = categor?.filter(categor => {
            if (
                currentBrend?.get("categoryName").find(current => {
                    if (current == categor?.get("id")) { return true } else return false
                })) { return true } else return false
        }
        )


        if (this.state.load2 == false && ModalEditActiveState != "hidden") {
            setTimeout(() => {
                this.setState({ brendName: countBrend?.get("id") })
                this.setState({ categoryid: countCategory?.get("id") })
                this.setState({ id: countDevice?.get("id") })
                this.setState({ name: countDevice?.get("name") })

                countDevice?.get("info").map(info => this.state.editInfo.push({ param: info.get("param"), value: info.get("value"), id: info.get("id") }))

            }, 2000)
            this.setState({ load2: true })

        }
        if (ModalEditActiveState == "hidden" && this.state.load2 == true) {
            this.setState({ load2: false })
            this.setState({ brendName: "" })
            this.setState({ categoryid: "" })
            this.setState({ id: null })
            this.setState({ name: "" })
            this.setState({ price: null })
            this.setState({ editInfo: [] })
            console.log("11")
        }


        return (

            <div className={` ${ModalEditActiveState ? ModalEditActiveState : "hidden"} w-[900px] h-[800px] bg-customize-blacegray border-2 border-white/10 fixed top-[120px] right-[650px] z-50`}>
                <button onClick={() => ModalEditActive()} type="button" ><svg version="1.0" xmlns="http://www.w3.org/2000/svg" className="absolute top-2 right-2"
                    width="25.000000pt" height="25.000000pt" viewBox="0 0 512.000000 512.000000"
                    preserveAspectRatio="xMidYMid meet">

                    <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                        fill="#ca8a04" stroke="none">
                        <path d="M161 5103 c-88 -31 -161 -136 -161 -233 0 -20 7 -59 16 -86 15 -45 106 -139 1103 -1137 l1086 -1087 -1082 -1083 c-594 -595 -1089 -1097 -1098 -1116 -45 -90 -24 -213 50 -286 69 -70 163 -91 261 -59 45 15 139 106 1136 1103 l1088 1086 1088 -1086 c997 -997 1091 -1088 1136 -1103 98 -32 192 -11 261 59 70 69 91 163 59 261 -15 45 -106 139 -1103 1137 l-1086 1087 1086 1088 c997 997 1088 1091 1103 1136 32 98 11 192 -59 261 -69 70 -163 91 -261 59 -45 -15 -139 -106 -1137 -1103 l-1087 -1086 -1088 1086 c-997 997 -1091 1088 -1136 1103 -61 20 -117 19 -175 -1z" />
                    </g>
                </svg>
                </button>
                <div className=" flex">
                    <div className="flex w-full">

                        <div className=" mt-10 ml-10 w-[300px]">
                            <div className="flex static border-4 border-gray-700 h-[300px] w-[300px] bg-white/80   ">
                                <div className={`relative w-full h-full bg-white `} id="input-div">
                                    <div className="block absolute border-2 border-black w-[120px] h-[120px] top-[85px] left-[85px] rounded-lg z-30">
                                        <input type="file" style={{ display: 'none' }} id="input-file" accept="image/*" />
                                        <label htmlFor="input-file" className=" rounded-lg block absolute border-2 border-black w-[40px] h-[40px] top-[37px] left-[37px] after:absolute after:border-b-2 after:top-[16px] after:w-8 after:border-black after:h-0 after:left-[2px]
                             before:absolute before:border-l-2 before:top-[2px] before:w-0 before:border-black before:h-8 before:left-[17px]">
                                        </label>
                                    </div>
                                </div>

                            </div>
                            <div className="">
                                <div className=" text-white">
                                    <input className=" h-12 p-2 text-2xl bg-customize-text/70 my-5 w-full brightness-200 border-4 border-gray-700/20 rounded-lg " placeholder='Название' defaultValue={countDevice?.get("name")} name="name" onChange={this.handleChange} />
                                    <input className=" p-2 mb-5 text-2xl w-full h-12 bg-customize-text/70 brightness-200 border-4 border-gray-700/20 rounded-lg " placeholder='Цена' defaultValue={countDevice?.get("price")} name="price" onChange={this.handleChange} />
                                </div>
                                <div className="">
                                    <SelectBrend brends={this.props.brends} СountBrend={this.СountBrend} countBrend={countBrend} />
                                    <SelectCategory category={brendCategories} СountCategory={this.СountCategory} countCategory={countCategory} />
                                </div>
                            </div>

                        </div>

                    </div>
                    <Info infoDevice={this.state.editInfo} EditInfoDivece={this.EditInfoDivece} InputGroupEditInfo={this.InputGroupEditInfo} />
                </div>
                <div>
                    <button className=" bg-yellow-600 h-12 mt-14 px-[265px] mx-24 rounded-lg" type="button" onClick={this.handleSubmit}>
                        Применить изменения
                    </button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state, props) => {
    const models = state.entities.get("models")
    const categor = state.entities.get("category")
    const brends = state.entities.get("brands");

    return {
        models,
        categor,
        brends
    };
}


const monitor_connected = connect(mapStateToProps, { ...BrendsEntity.triggers(), ...CategoryEntity.triggers(), ...ModelEntity.triggers() })(EditModal);
export default withRouter(monitor_connected);