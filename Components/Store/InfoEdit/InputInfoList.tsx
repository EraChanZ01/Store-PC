import React from "react"
import InputInfoItem from "./InputInfoItem"

export default function InputInfo({ info, InputGroupEditInfo }) {




    const result = []
    info?.map(item => result.push(<InputInfoItem item={item} InputGroupEditInfo={InputGroupEditInfo} />))
    //countInfoDevice?.map(infoD => result.push(<InputInfoItem item={infoD} InputGroupEditInfo={InputGroupEditInfo} />))

    return (
        <div>
            {result}
        </div>

    )
}
