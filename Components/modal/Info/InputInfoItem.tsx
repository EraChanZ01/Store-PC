import React, { useState } from "react"



export default function InputInfoItem({ item, InputGroupChange}) {


    /*const [info, setInfo] = useState([])


    async function handleChange(event) {
        const target = event.target;


        setInfo(info.map(i => i.number != target.id ? { ...i,[target.name]: target.value} : i ))
        console.log(info)

    }*/



    // const name = target.name;
    //this.setState<typeof name>({

    //[name]: target.value

    //});



    return (
        <div className="flex mt-5">
            <input type="text" className="resize rounded-md bg-customize-text/70 w-[240px] h-9 brightness-200 border-4 border-gray-700/20 text-white/20"  name="param" onChange={(e)=>InputGroupChange(e,item.id)} />
            <input type="text" className="resize rounded-md bg-customize-text/70 w-[220px] ml-7 h-9 brightness-200 border-4 border-gray-700/20 text-white/20" name="value" onChange={(e)=>InputGroupChange(e,item.id)} />
        </div>
    )

}