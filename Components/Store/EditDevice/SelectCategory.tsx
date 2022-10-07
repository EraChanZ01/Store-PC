import React from "react"
import OptionCategory from "./OptionCategory"


export default function SelectCategory({ category, СountCategory, countCategory }) {




    function handleChange(event) {
        const target = event.target;
        СountCategory(target.value)
    }

    const result = [];
    category?.forEach(element => {


        result.push(<OptionCategory category={element} />)

    });

    return (
        <select className="bg-customize-text/60 w-full h-12 text-yellow-600 rounded-lg border-4 border-white/20 " defaultValue={countCategory?.get("id")} onChange={(e) => handleChange(e)}>
            <option>
                {countCategory?.get("name")}
            </option>
            {result}
        </select>
    )

}