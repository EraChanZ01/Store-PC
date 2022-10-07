import React, { useEffect } from "react"
import OptionBrend from "./OptionBrend"

export interface ISelectDeviceProps {

    brends: any,
    СountBrend: (name) => void,
    countBrend: any,

}

export interface ISelectDeviceState {
    brendName: string,


}


export default class SelectDevice extends React.Component<ISelectDeviceProps, ISelectDeviceState>{

    constructor(props) {
        super(props);
        this.state = {
            brendName: ""
        };

        this.handleChange = this.handleChange.bind(this);




    };

    async handleChange(event) {
        const target = event.target;
        this.props.СountBrend(target.value)
    };


    render() {


        const { brends, СountBrend, countBrend } = this.props

        const result = [];
        brends?.forEach(element => {
            result.push(<OptionBrend brends={element} />)
        });

        return (
            <select className="bg-customize-text/60 w-full h-12 text-yellow-600 my-5 rounded-lg border-4 border-white/20" onChange={this.handleChange} name="brendName" defaultValue={countBrend?.get("id")} >
                <option>
                    {countBrend?.get("name")}
                </option>
                {result}
            </select>
        )
    }
}





