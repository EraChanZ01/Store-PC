import React from "react";






export default function ListBrends({ brend }) {
    
    return (
        <div className=" flex my-6 text-white">
            <div className="border w-12 h-12 ml-5">
                <img src={`data:${brend.get("img")}`} />
            </div >
            <div className=" flex ml-10 w-[310px] py-2">
                Название: 
                <p className="ml-2 text-yellow-600">{brend.get("name")} </p>
            </div>
            <div className=" w-64 flex py-2" >
                Почта:
                <p className="ml-2 text-yellow-600 "> {brend.get("email")} </p>
            </div>
            <button className="mr-5 py-2" >
                <img src="/delete.png" width={20}/>
            </button>
        </div>
    )
}