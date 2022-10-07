import React from "react";
import Link from "next/link";

export interface ICatalogProps {
    img?: JSX.Element;
    text: String;
    href?: String;
}



export default function Catalog(props: ICatalogProps) {
const {img, text, href} = props;

return(
    <div className="border-b-[1px] border-white/50">
        <div>
            {img}
        </div>
        <div className=" text-white text-center text-xl p-5">
            {text}
        </div>
        <div className=" mb-10 flex justify-center">
            <Link href={`${href}`}>
            <button className={` border-[1px] border-yellow-600 text-lg text-center text-yellow-600 rounded-xl p-[1px] px-8`}>
                    Выбрать
            </button>
            </Link>
        </div>

    </div>
)

}