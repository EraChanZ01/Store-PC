import React, { useState } from "react"
import InputInfoList from "./InputInfoList"




export default function Info({ EditInfoDivece, infoDevice, InputGroupEditInfo }) {


    console.log(infoDevice)
    return (
        <div className=" mt-10">
            <InputInfoList info={infoDevice} InputGroupEditInfo={InputGroupEditInfo} />

            <button className="mt-3 after:content-['+'] border-4 w-[490px] rounded-md h-10 bg-yellow-600 border-yellow-600/10 mx-10" type="button" onClick={EditInfoDivece}>

            </button>


        </div>
    )

}