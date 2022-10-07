import * as React from 'react';


export interface IFrameProps {
    active?: any
    children: React.ReactNode;
    type: Framee;
    width?: string;
}

export enum Framee {
    CPU,
    MOTH,
    MONandBP,
    SMALL,
    KORPUS,
}

export interface IFrameState {
}



export default class Frame extends React.Component<IFrameProps, IFrameState> {


    constructor(props: IFrameProps) {
        super(props);

        this.state = {
        }
    }





    public render() {
        const { type, children, width, active } = this.props;

        return (
            <div className={`ring-2 rounded-2xl ring-white/50 relative  hover:ring-white/75 ${width ? width : ''} ${active ? active : "saturate-0 "}`}>
                {children}
            </div>
        )
        // switch (type) {
        //     case Framee.CPU:
        //         return (
        //             <div className=' ring-2 rounded-2xl ring-white/50hover:ring-white/75'>
        //                 {children}
        //             </div>


        //         )
        //     case Framee.MOTH:
        //         return (
        //             <div className='col-span-2 ring-2 rounded-2xl ring-white/50 w-[680px] h-[330px] relative hover:ring-white/75'>
        //                 {children}
        //             </div>
        //         )
        //     case Framee.MONandBP:
        //         return (
        //             <div className=' ring-2 ring-white/50 rounded-2xl relative hover:ring-white/75'>
        //                 {children}
        //             </div>
        //         )
        //     case Framee.SMALL:
        //         return (
        //             <div className="ring-2 ring-white/50 rounded-2xl w-[300px] h-[270px] relative hover:ring-white/75">
        //                 {children}
        //             </div>

        //         )
        //     case Framee.KORPUS:
        //         return (
        //             <div className=' col-span-3 mr-10 mt-14 ring-2 h-[800px] w-[1155px] ring-white/50 rounded-2xl relative hover:ring-white/75'>
        //                 {children}
        //             </div>
        //         )
        // }
    }
}
