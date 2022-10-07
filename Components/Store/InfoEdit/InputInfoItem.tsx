import React, { useState } from "react"



export default function InputInfoItem({ item, InputGroupEditInfo }) {

    console.log(item)

    return (
        <div className="flex mt-5 mx-10">
            <input type="text" className="resize rounded-md bg-customize-text/70 w-[240px] h-9 brightness-200 border-4 border-gray-700/20 text-white/20" defaultValue={item?.param} name="param" onChange={(e) => InputGroupEditInfo(e, item.id)} />
            <input type="text" className="resize rounded-md bg-customize-text/70 w-[220px] ml-7 h-9 brightness-200 border-4 border-gray-700/20 text-white/20" defaultValue={item?.value} name="value" onChange={(e) => InputGroupEditInfo(e, item.id)} />
        </div>
    )

}