import React, { useEffect } from "react"
import OptionDevice from "./OptionDevice"

export interface ISelectDeviceProps {

    brends: any,
    СountBrend: (name) => void,

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


        const { brends, СountBrend } = this.props
        const result = [];
        brends?.forEach(element => {
            result.push(<OptionDevice brends={element} />)
        });

        return (
            <select className="bg-customize-text/60 min-w-20 w-[500px] h-12 ml-6 text-yellow-600 my-5 rounded-lg border-4 border-white/20" onChange={this.handleChange} name="brendName" >
                <option>

                </option>
                {result}
            </select>
        )
    }
}





