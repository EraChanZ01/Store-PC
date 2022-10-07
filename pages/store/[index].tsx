import React from "react";
import Baner from "Components/Baner";
import Layout from "Components/Layout/Layout";
import { WithRouterProps } from "next/dist/client/with-router";
import Link from "next/Link";
import saga from 'redux/decorators/saga';
import ModelEntity from 'redux/models/model'
import { withRouter } from 'next/router';
import { connect } from 'react-redux';
import Line from '../../Components/Store/Line'
import Content from '../../Components/Store/Content'
import ModalEdit from '../../Components/Store/ModalEdit'
import CategoryEntity from "redux/models/category"



interface MyProps extends WithRouterProps {


}

interface MyState {
    ModalEditActive: string
    CountEditDevice: string

}

export enum PageParams {
    Monitor = "Monitor",
    Body = "Body",
    Keyboard = "Keyboard",
    Maus = "Maus",
    Chair = "Chair",
    Earphones = "Earphones"
}

@saga(ModelEntity)
export class Stor extends React.Component<MyProps, MyState> {

    constructor(props) {
        super(props);
        this.state = {
            ModalEditActive: "hidden",
            CountEditDevice: ""


        };

        this.ModalEditActive = this.ModalEditActive.bind(this);

    };

    ModalEditActive(modelsId) {
        if (this.state.ModalEditActive === "hidden") {
            this.setState({ ModalEditActive: "static" })
            this.setState({ CountEditDevice: modelsId })

        }
        else { this.setState({ ModalEditActive: "hidden" }) }

    }





    getStoreContent() {
        const { router } = this.props;

        switch (router.query.index) {
            case PageParams.Monitor:

                return "Monitor"
                break;

            case PageParams.Body:

                return "Body"
                break;

            case PageParams.Keyboard:

                return "Keyboard"
                break;
            case PageParams.Chair:

                return "Chair"
                break;
            case PageParams.Maus:

                return "Maus"
                break;
            case PageParams.Earphones:

                return "Earphones"
                break;
        }
    }



    render() {
        const Data = this.getStoreContent()
        return (
            <form className=" bg-customize-blacegray relative">
                <Layout>
                    <ModalEdit ModalEditActiveState={this.state.ModalEditActive} CountEditDevice={this.state.CountEditDevice} ModalEditActive={this.ModalEditActive} />
                    <div className={`mt-20 static `}>
                        <Baner bg={"bg-[url('/baner1.svg')]"} />

                        <div className=" border-y-[1px]  border-black h-[220px] bg-customize-blacegray2/95">
                            <Line />

                        </div>
                        <Content active={Data} ModalEditActive={this.ModalEditActive} />

                    </div>
                </Layout>
            </form>
        )
    }
}

export default withRouter(Stor);

