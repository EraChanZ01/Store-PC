import React from "react"



export default function ContentList({ info }) {

    return (
        <div className="flex ">
            <div className="my-[1px] w-[75px] font-bold">
                {info.get("param")}:
            </div>
            <div className="my-[1px] font-medium text-yellow-600">
                {info.get("value")}
            </div>

        </div>
    )
}