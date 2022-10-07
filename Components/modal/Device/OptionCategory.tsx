import React from "react"



export default function SelectDevice({category }) {

  

    console.log(category.get("name"),"111")
    


    return (
        <option className="" value={category.get("id")}>
            {category.get("name")}
        </option>

    )

}