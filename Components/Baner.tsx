import { PromiseProvider } from "mongoose";
import Link from "next/link";

export interface IBanerProps {
 bg?: string
}

export default function Baner(IBanerProps) {
    const { bg } = IBanerProps;
    
    return (
        <div className={`bg ${bg? bg:" "} flex  px-2 py-2 w-full bg-no-repeat h-[570px] bg-left bg-customize-text/75`} >

        </div>

    )
}