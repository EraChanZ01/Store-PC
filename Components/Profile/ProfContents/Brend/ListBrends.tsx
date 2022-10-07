import React from "react"
import ItemBrends from "./ItemBrends"

export default function ListBrends({ brends }) {

    const result = [];
    brends?.forEach(element => {
        result.push(<ItemBrends brend={element} />)
    });

    return (
        <div>
            {result}
        </div>
    )
}