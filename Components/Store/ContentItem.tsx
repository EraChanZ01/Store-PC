import React from "react"
import ContentList from "./ContentList"
import Icons, { ICO } from "../../Components/icons"



export default function ContentItem({ models, ModalEditActive }) {


    const result = []

    models.get("info").map(info => result.push(<ContentList info={info} />))

    return (
        <div className=" relative border-y-[1px] border-white/20 text-center max-w-[350px] text-white">
            <button className=" absolute right-2 top-1" type="button" onClick={() => ModalEditActive(models.get("id"))}><Icons type={ICO.edit} /> </button>
            <button className=" absolute right-2 top-10"><img src="/delete.png" width={22} /> </button>
            <p className="p-5 text-2xl ">{models.get("name")}</p>
            <div className="mb-8">
                <img src="/mon1.png" />
            </div>
            <div className="text-left">

                {result}


                <div className="my-10 border-t-[1px] border-white/20">
                    <div className="flex items-center">
                        <p className="text-center text-lg py-3 p-2">Cтоимость: </p>
                        <p className="text-yellow-600 text-center py-3 p-2 text-2xl font-bold tracking-wide"> {models.get("price")}</p>
                        <p className="text-center py-3 text-lg">грн</p>
                    </div>
                    <button className=" mt-4 border-2 rounded-xl w-full h-12 ">
                        Добавить в корзину
                    </button>

                </div>
            </div>
        </div>

    )
}