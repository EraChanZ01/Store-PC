import React, { useState } from "react"
import InputInfoList from "./InputInfoList"




export default function Info({ CountInfoDivece, infoDevice,InputGroupChange }) {

    /*console.log(CountInfoDivece)
    const [modelInfo, setModelInfo] = useState([{

    }])

    

    let i = modelInfo.length

    function handleClick() {
        if (i <= 9) {
            setModelInfo([...modelInfo, { id: Date.now() }])

            console.log(i)
        }
    }*/

    



    return (
        <div className=" mx-7 mt-6">
            <InputInfoList info={infoDevice} InputGroupChange={InputGroupChange}/>

            <button className="mt-3 after:content-['+'] border-4 w-[460px] rounded-md h-10 bg-yellow-600 border-yellow-600/10" type="button" onClick={CountInfoDivece}>

            </button>


        </div>
    )

}