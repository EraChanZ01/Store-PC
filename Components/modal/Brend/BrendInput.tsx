import { CannotBeSymbolError } from "@typegoose/typegoose/lib/internal/errors"
import React, { useState } from "react"
import InputCategories from "./InputCategories"


export default function BrendInput({ category, –°hooseCategory }) {


    const inputt = []

   



    const inputRef = React.createRef();
    const result = [];
    category?.forEach(element => {


        result.push(<InputCategories category={element} –°hooseCategory={–°hooseCategory} />)

    });

    const categ = {}


    return (
        <div className="grid gap-4 grid-cols-4 mx-[70px]">
            {result}
        </div>

    )

}