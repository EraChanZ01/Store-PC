import React, { useRef, useState } from "react"
import { extensions } from "sequelize/types/utils/validator-extras"



export interface IInputCategoriesProps {
    category: any,
    СhooseCategory: (option) => void;
    inputRef: any
}

export interface IInputCategoriesState {


    categories: any

}







export default function InputCategories({ category,СhooseCategory }) {
    
    
    const inputRef = useRef(null)
    

    const [input, setInput] = useState({name: category.get("name"), id: category.get("id"), checked: inputRef})



    function handleClick() {
        
        СhooseCategory(input)
        
       
       
    }




    return (
        <div className="flex justify-items-center">
            <input type={"checkbox"} value={category.get("id")} name="categories" id={category.get("name")} onChange={handleClick} className=" hidden peer" ref={inputRef} />
            <label htmlFor={category.get("name")} className="peer-checked:bg-yellow-600 w-[60px] h-[25px] bg-gray-500 block rounded-full relative my-2 
            after:absolute after:top-[3px] after:left-[4px] after:w-[20px] after:h-[20px] after:bg-white after:rounded-full active:after:w-[30px] after:ease-out after:duration-300
            peer-checked:after:translate-x-[-100%] peer-checked:after:left-[calc(100%-5px)]">
            </label>
            <p className="text-center items-center p-2">{category.get("name")}</p>
        </div>

    )


}
