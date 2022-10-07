import React from "react"
import InputInfoItem from "./InputInfoItem"

export default function InputInfo({ info, InputGroupChange}) {
   


    

    return (
        <div>
            {info.map( item => <InputInfoItem item={item} InputGroupChange={InputGroupChange}/>)}
        </div>
        
    )
}


/*<div className="flex w-[460px] mt-6">
            <input type="text" className="resize rounded-md bg-customize-text/70 w-[240px] h-12 brightness-200 border-4 border-gray-700/20 text-white/20" name={info} ></input>
            <input type="text" className="resize rounded-md bg-customize-text/70 w-[240px] h-12 ml-7 brightness-200 border-4 border-gray-700/20 text-white/20" name="info" ></input>
            
        </div> */