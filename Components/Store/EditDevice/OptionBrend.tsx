import React from "react"



export default function SelectDevice({ brends }) {
    return (
        <option className="" value={brends.get("id")}>
            {brends.get("name")}
        </option>

    )
}