import React from "react";

export interface IImgProps {
    img?: JSX.Element;
}



export default function Img(props: IImgProps) {
const {img} = props;

return(

    <div className="">
        {img}
    </div>
)

}