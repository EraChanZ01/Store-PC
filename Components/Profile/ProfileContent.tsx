import React from "react";

export interface IProfileContentProps {
    children: any;
}

export default class ProfileContent extends React.Component<IProfileContentProps, null> {
    constructor(props) {
        super(props);
    }

    render() {
        const { children } = this.props;
        
        return (

            <div className=" bg-customize-blace111 relative mt-2">
                {children}
            </div>
        )
    }
}