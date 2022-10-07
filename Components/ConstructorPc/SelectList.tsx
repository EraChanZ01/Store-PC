import React from "react"





export default function SelectList({ model, category }) {


    return (
        <option className="bg-customize-blacegray2/95" id={category} >
            {model.get("name")}
        </option>
    )
}