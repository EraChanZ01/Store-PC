import React from "react"
import OptionCategory from "./OptionCategory"


export default function SelectCategory({ category, СountCategory }) {




    console.log(category, "333")


    function handleChange(event) {
        const target = event.target;
        СountCategory(target.value)
    }

    const result = [];
    category?.forEach(element => {


        result.push(<OptionCategory category={element} />)
        console.log(element, "222")

    });

    return (
        <select className="bg-customize-text/60 w-[500px] h-12 ml-6 text-yellow-600 rounded-lg border-4 border-white/20 " onChange={handleChange}>
            <option>

            </option>
            {result}
        </select>
    )

}