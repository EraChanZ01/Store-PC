import React from "react";
import Buts from "./Button";
import SelectList from './SelectList'


export interface ISELECTProps {
    title?: any;
    countProcessor?: any;
    CountModel: (e: any, active: any) => void;
    active?: any;
    models: any;

}



export default function Select(props: ISELECTProps) {
    const { models, active, CountModel, countProcessor, title } = props;



    const model = models?.filter(m => {
        if (active == "gigabyte") {
            const socketProcessor = models?.find(model => model?.get("name") === countProcessor)?.get("info")?.find(curProcessor => curProcessor?.get("param") == "Разъем(Socket)")
            const soketMotherboard = models?.find(model => model?.get("brendName") === "62e55e2a3316602408cc9196" && model.get("categoryid") == "62d2a61f30618a11d019a142")?.get("info")?.find(mp => mp?.get("param") == "Socket")
            if (m?.get("brendName") == "62e55e2a3316602408cc9196" && soketMotherboard?.get("value") == socketProcessor?.get("value") && m.get("categoryid") == "62d2a61f30618a11d019a142") { return true }
        }
        if (active == "asrock") {
            const socketProcessor = models?.find(model => model?.get("name") === countProcessor)?.get("info")?.find(curProcessor => curProcessor?.get("param") == "Разъем(Socket)")
            const soketMotherboard = models?.find(model => model?.get("brendName") === "62e55dfe3316602408cc9190" && model.get("categoryid") == "62d2a61f30618a11d019a142")?.get("info")?.find(mp => mp?.get("param") == "Socket")
            if (m?.get("brendName") == "62e55dfe3316602408cc9190" && soketMotherboard?.get("value") == socketProcessor?.get("value") && m.get("categoryid") == "62d2a61f30618a11d019a142") { return true }
        }
        if (active == "asus") {
            const socketProcessor = models?.find(model => model?.get("name") === countProcessor)?.get("info")?.find(curProcessor => curProcessor?.get("param") == "Разъем(Socket)")
            const soketMotherboard = models?.find(model => model?.get("brendName") === "62e55de73316602408cc918d" && model.get("categoryid") == "62d2a61f30618a11d019a142")?.get("info")?.find(mp => mp?.get("param") == "Socket")
            if (m?.get("brendName") == "62e55de73316602408cc918d" && soketMotherboard?.get("value") == socketProcessor?.get("value") && m.get("categoryid") == "62d2a61f30618a11d019a142") { return true }
        }
        if (active == "msi") {
            const socketProcessor = models?.find(model => model?.get("name") === countProcessor)?.get("info")?.find(curProcessor => curProcessor?.get("param") == "Разъем(Socket)")
            const soketMotherboard = models?.find(model => model?.get("brendName") === "62e55e0e3316602408cc9193" && model?.get("categoryid") == "62d2a61f30618a11d019a142")?.get("info")?.find(mp => mp?.get("param") == "Socket")
            if (m?.get("brendName") == "62e55e0e3316602408cc9193" && soketMotherboard?.get("value") == socketProcessor?.get("value") && m.get("categoryid") == "62d2a61f30618a11d019a142") { return true }
        }
        if (active == "amd") {
            if (m?.get("brendName") == "62e554763316602408cc9187") { return true }
        }
        if (active == "intel") {
            if (m?.get("brendName") == "62e554593316602408cc9181") { return true } else return false
        }
        if (title == "Видеокарта") { if (m.get("categoryid") == "62d2a61f30618a11d019a150") { return true } }
        if (title == "Система охлождения") { if (m.get("categoryid") == "62d2a61f30618a11d019a15e") { return true } }
        else return false
    })



    const currentModel = []


    const category = model?.forEach(mode => mode.get("categoryid"))

    model?.forEach(model => currentModel.push(<SelectList model={model} category={category} />))



    return (

        <div className={`flex justify-center`}>
            <select className={`w-full ${active ? active : "hidden"} bg-customize-blacegray2/5 text-center border-x-2 border-b-white/50 border-customize-blacegray2/0 active:border-customize-blacegray2/0`} onChange={(e) => CountModel(e, active)}>
                <option value={123} className=' bg-customize-blacegray2/95'>
                    Выбрать
                </option>
                {currentModel}
            </select>
        </div>


    )
}