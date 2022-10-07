import React from "react";




export interface IModalAddProps {
    result: string,
    files: any,
    filesName: string,
    filesSize: string,
    disp: string,
    Dispoff: (off) => void;
 
}

export interface IModalAddState {




}




export class AddBrendimg extends React.Component<IModalAddProps, IModalAddState> {


    constructor(props) {
        super(props);
        this.state = {
            
        };

       
        



    };

    

    bytesToSize(bytes) {

        
        const sizes = ["Bytes", "KB", "MB", "GB", "TB"]
        if (!bytes) {
            return '0 Byte'
        }
        const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
        return Math.round(bytes / Math.pow(1024, i), 2) + ' ' + sizes[i];

    }


    render() {


        
        const { result, files, filesName, filesSize,disp, Dispoff } = this.props

        return (

            <div className={`${disp? disp: 'hidden' } top-5 left-[70px]  h-64 w-64  z-40 `}>
                <div className="w-[20px] h-[20px] absolute top-0 right-0 font-bold flex justify-center items-center  bg-white/50  z-50 cursor-pointer " id="remove" onClick={() => Dispoff('hidden')} data-name={filesName} ></div>
                <img src={`${result}`} className="absolute  h-64 w-64  z-40" />
                <div className="absolute bottom-0 right-0 left-0 h-[25px] text-sm bg-white/50 flex items-center justify-between px-5 z-40 ">
                    <span>{filesName}</span>
                    {this.bytesToSize(filesSize)}
                </div>
            </div>
        )
    }
}


