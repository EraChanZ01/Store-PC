import React from "react"



export default function SelectDevice({ category }) {

    return (
        <option className="" value={category.get("id")}>
            {category.get("name")}
        </option>

    )

}