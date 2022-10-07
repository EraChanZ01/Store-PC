import Layout from 'Components/Layout/Layout'
import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/Link'
import React from "react";
import Router from 'next/router'
import { stringifyQuery } from 'next/dist/server/server-route-utils';
import Specification from '../Components/ConstructorPc/Specification'
import Icons, { ICO } from '../Components/icons'
import Button from '../Components/ConstructorPc/Button'
import Frame, { Framee } from "../Components/ConstructorPc/Frame";
import saga from 'redux/decorators/saga';
import UserEntity from 'redux/models/users'
import { withRouter } from 'next/router';
import { connect } from 'react-redux';
import wrapper from 'redux/store';
import ModelsEntity from 'redux/models/model'
import Select from "../Components/ConstructorPc/Select"



interface MyProps {
    users: any;
    model: any;
}

interface MyState {
    activeProcessor: string;
    activeMotherboard: string;
    activeRamb: string;
    activeHdd: string;
    activeSsd: string;
    activeBp: string;
    activeKorpus: string;
    countProcessor: string;
    countMotherboard: string;
    countRamb: string;
    countHdd: string;
    countSsd: string;
    countBp: string;
    countKorpus: string;
}
@saga(UserEntity)
class Conf extends React.Component<MyProps, MyState>  {

    constructor(props) {
        super(props);
        this.state = {
            activeProcessor: "",
            activeMotherboard: "",
            activeRamb: "",
            activeHdd: "",
            activeSsd: "",
            activeBp: "",
            activeKorpus: "",
            countProcessor: "",
            countMotherboard: "",
            countRamb: "",
            countHdd: "",
            countSsd: "",
            countBp: "",
            countKorpus: "",

        };

        this.setActiveComponent = this.setActiveComponent.bind(this);
        this.CountModel = this.CountModel.bind(this);
    };

    public static getInitialProps = wrapper.getInitialAppProps(store => ({ query }) => {
        store.dispatch(UserEntity.triggers().fetchAllUsers());
    });

    setActiveComponent(componentName, value, e, active) {
        if (componentName == "activeProcessor") {

            this.setState<typeof value>({ [componentName]: value })
        }
        if (componentName == "activeMotherboard") {
            if (this.state.countProcessor != "") {
                this.setState<typeof value>({ [componentName]: value })
            }
            else return
        }
        else {

            if (this.state.activeMotherboard != "") {
                this.setState<typeof value>({ [componentName]: value })
                this.CountModel(e, active)
            }
        }



    }

    async CountModel(e, active) {
        const target = e.target
        console.log(target.value)
        console.log(active)
        if (active == "intel" || active == "amd") {
            this.setState({ countProcessor: target.value })
        }
        if (active == "asus" || active == "gigabyte" || active == "msi" || active == "asrock") {
            this.setState({ countMotherboard: target.value })
        }
        if (active == "activeRamb") { this.setState({ countRamb: target.value }) }
        if (active == "activeHdd") { this.setState({ countHdd: target.value }) }
        if (active == "activeSsd") { this.setState({ countSsd: target.value }) }
        if (active == "activeBp") { this.setState({ countBp: target.value }) }
        if (active == "activeKorpus") { this.setState({ countKorpus: target.value }) }

    }



    render() {

        const { users } = this.props;
        // users.map(user => {
        //     console.log('!!!!!!!!!!!!!!!!!!!!!!', user.toJS())
        // })
        const processorButtons = [
            <Button type={'activeProcessor'} value={'intel'} selected={this.state.activeProcessor} clickCallBack={this.setActiveComponent} className={'px-4 py-2'} icon={<Icons type={ICO.INTEL} />} />,
            <Button type={'activeProcessor'} value={'amd'} selected={this.state.activeProcessor} clickCallBack={this.setActiveComponent} className={'px-4 py-2'} icon={<Icons type={ICO.AMD} />} />,
        ]

        const motherboardButtons = [
            <Button className={'px-3 py-5'} type={'activeMotherboard'} value={'asus'} selected={this.state.activeMotherboard} clickCallBack={this.setActiveComponent} icon={<Icons type={ICO.ASUS} />} />,
            <Button className={'px-3 py-5'} type={'activeMotherboard'} value={'asrock'} selected={this.state.activeMotherboard} clickCallBack={this.setActiveComponent} icon={<Icons type={ICO.ASROCK} />} />,
            <Button className={'px-3 py-5'} type={'activeMotherboard'} value={'msi'} selected={this.state.activeMotherboard} clickCallBack={this.setActiveComponent} icon={<Icons type={ICO.MSI} />} />,
            <Button className={'px-3 py-5'} type={'activeMotherboard'} value={'gigabyte'} selected={this.state.activeMotherboard} clickCallBack={this.setActiveComponent} icon={<Icons type={ICO.GIGABATE} />} />,
        ]

        const ramdButtons = [
            <Button type={'activeRamb'} value={'2x8gb'} selected={this.state.activeRamb} clickCallBack={this.setActiveComponent} text={'2x8gb'} CountModel={this.CountModel} />,
            <Button type={'activeRamb'} value={'2x16gb'} selected={this.state.activeRamb} clickCallBack={this.setActiveComponent} text={'2x16gb'} CountModel={this.CountModel} />,
            <Button type={'activeRamb'} value={'2x32gb'} selected={this.state.activeRamb} clickCallBack={this.setActiveComponent} text={'2x32gb'} CountModel={this.CountModel} />,
            <Button type={'activeRamb'} value={'4x8gb'} selected={this.state.activeRamb} clickCallBack={this.setActiveComponent} text={'4x8gb'} CountModel={this.CountModel} />,
            <Button type={'activeRamb'} value={'4x16gb'} selected={this.state.activeRamb} clickCallBack={this.setActiveComponent} text={'4x16gb'} CountModel={this.CountModel} />,
            <Button type={'activeRamb'} value={'4x32gb'} selected={this.state.activeRamb} clickCallBack={this.setActiveComponent} text={'4x32gb'} CountModel={this.CountModel} />,
        ]

        const hddButtons = [
            <Button type={'activeHdd'} value={'120gb'} selected={this.state.activeHdd} clickCallBack={this.setActiveComponent} text={'120gb'} CountModel={this.CountModel} />,
            <Button type={'activeHdd'} value={'240gb'} selected={this.state.activeHdd} clickCallBack={this.setActiveComponent} text={'240gb'} CountModel={this.CountModel} />,
            <Button type={'activeHdd'} value={'500gb'} selected={this.state.activeHdd} clickCallBack={this.setActiveComponent} text={'500gb'} CountModel={this.CountModel} />,
            <Button type={'activeHdd'} value={'1TB'} selected={this.state.activeHdd} clickCallBack={this.setActiveComponent} text={'1TB'} CountModel={this.CountModel} />,
        ]

        const sddButtons = [
            <Button type={'activeSsd'} value={'240gb'} selected={this.state.activeSsd} clickCallBack={this.setActiveComponent} text={'240gb'} CountModel={this.CountModel} />,
            <Button type={'activeSsd'} value={'500gb'} selected={this.state.activeSsd} clickCallBack={this.setActiveComponent} text={'500gb'} CountModel={this.CountModel} />,
            <Button type={'activeSsd'} value={'1TB'} selected={this.state.activeSsd} clickCallBack={this.setActiveComponent} text={'1TB'} CountModel={this.CountModel} />,
            <Button type={'activeSsd'} value={'2TB'} selected={this.state.activeSsd} clickCallBack={this.setActiveComponent} text={'2TB'} CountModel={this.CountModel} />,
        ]

        const bp = [
            <Button type={'activeBp'} value={'500w'} selected={this.state.activeBp} clickCallBack={this.setActiveComponent} text={'500w'} CountModel={this.CountModel} />,
            <Button type={'activeBp'} value={'550w'} selected={this.state.activeBp} clickCallBack={this.setActiveComponent} text={'550w'} CountModel={this.CountModel} />,
            <Button type={'activeBp'} value={'650w'} selected={this.state.activeBp} clickCallBack={this.setActiveComponent} text={'650w'} CountModel={this.CountModel} />,
            <Button type={'activeBp'} value={'700w'} selected={this.state.activeBp} clickCallBack={this.setActiveComponent} text={'700w'} CountModel={this.CountModel} />,
            <Button type={'activeBp'} value={'750w'} selected={this.state.activeBp} clickCallBack={this.setActiveComponent} text={'750w'} CountModel={this.CountModel} />,
            <Button type={'activeBp'} value={'850w'} selected={this.state.activeBp} clickCallBack={this.setActiveComponent} text={'850w'} CountModel={this.CountModel} />,
        ]

        const KORPUS = [
            <Button className={'px-3 py-5'} type={'activeKorpus'} value={'korpus1'} selected={this.state.activeKorpus} clickCallBack={this.setActiveComponent} icon={<Icons type={ICO.Korpus1} />} CountModel={this.CountModel} />,
            <Button className={'px-3 py-5'} type={'activeKorpus'} value={'korpus2'} selected={this.state.activeKorpus} clickCallBack={this.setActiveComponent} icon={<Icons type={ICO.Korpus2} />} CountModel={this.CountModel} />,
            <Button className={'px-3 py-5'} type={'activeKorpus'} value={'korpus3'} selected={this.state.activeKorpus} clickCallBack={this.setActiveComponent} icon={<Icons type={ICO.Korpus3} />} CountModel={this.CountModel} />,
            <Button className={'px-3 py-5'} type={'activeKorpus'} value={'korpus4'} selected={this.state.activeKorpus} clickCallBack={this.setActiveComponent} icon={<Icons type={ICO.Korpus4} />} CountModel={this.CountModel} />,
            <Button className={'px-3 py-5'} type={'activeKorpus'} value={'korpus5'} selected={this.state.activeKorpus} clickCallBack={this.setActiveComponent} icon={<Icons type={ICO.Korpus5} />} CountModel={this.CountModel} />,
            <Button className={'px-3 py-5'} type={'activeKorpus'} value={'korpus6'} selected={this.state.activeKorpus} clickCallBack={this.setActiveComponent} icon={<Icons type={ICO.Korpus6} />} CountModel={this.CountModel} />,
        ]

        return (
            <div className=' bg-customize-blacegray2/95 text-white '>
                <Layout>
                    <div className='flex flex-col-reverse mt-20'>
                        <div className=''>
                        </div>
                        <div className=' mr-[530px] ml-[220px]'>
                            <div className='flex justify-between mt-20 hover:ring-white/75'>
                                <Frame width={'w-[450px]'} type={Framee.CPU} active={"CPU"}>
                                    <Specification title={"Проц"} icon={<Icons type={ICO.CPU} />} buttons={processorButtons} grid={"grid-cols-2"} select={<Select models={this.props.model} active={this.state.activeProcessor} CountModel={this.CountModel} />} />
                                </Frame>
                                <Frame width={'w-[650px]'} type={Framee.MOTH} active={this.state.countProcessor}>
                                    <Specification title={"Материнская плата"} icon={<Icons type={ICO.MOTH} />} buttons={motherboardButtons} grid={"grid-cols-2"} select={<Select models={this.props.model} active={this.state.activeMotherboard}
                                        CountModel={this.CountModel} countProcessor={this.state.countProcessor} />} />
                                </Frame>
                            </div>
                            <div className='flex justify-between my-20'>
                                <Frame width={'w-[450px]'} type={Framee.MONandBP} active={this.state.countMotherboard}>
                                    <Specification title={"Модули памяти"} icon={<Icons type={ICO.MON} />} buttons={ramdButtons} grid={"grid-cols-3"} />
                                </Frame>

                                <Frame width={'w-[300px]'} type={Framee.SMALL} active={this.state.countMotherboard}>
                                    <Specification title={"SSD"} icon={<Icons type={ICO.SSD} />} buttons={hddButtons} grid={"grid-cols-2"} />
                                </Frame>

                                <Frame width={'w-[300px]'} type={Framee.SMALL} active={this.state.countMotherboard}>
                                    <Specification title={"HHD"} icon={<Icons type={ICO.HDD} />} buttons={sddButtons} grid={"grid-cols-2"} />
                                </Frame>
                            </div>
                            <div className='flex justify-between mb-20'>
                                <Frame width={'w-[450px]'} type={Framee.MONandBP} active={this.state.countMotherboard}>
                                    <Specification title={"Блок Питания"} icon={<Icons type={ICO.BP} />} buttons={bp} grid={"grid-cols-3"} />
                                </Frame>

                                <Frame width={'w-[300px]'} type={Framee.SMALL} active={this.state.countMotherboard}>
                                    <Specification title={"Видеокарта"} icon={<Icons type={ICO.VIDEO} />} select={<Select models={this.props.model} CountModel={this.CountModel} active={this.state.countMotherboard} title={"Видеокарта"} />} />
                                </Frame>

                                <Frame width={'w-[300px]'} type={Framee.SMALL} active={this.state.countMotherboard}>
                                    <Specification title={"Система охлождения"} icon={<Icons type={ICO.COOLING} />} select={<Select models={this.props.model} CountModel={this.CountModel} active={this.state.countMotherboard} title={"Система охлождения"} />} />
                                </Frame>
                            </div>
                            <Frame type={Framee.KORPUS} active={this.state.countMotherboard}>
                                <Specification title={"Корпус"} icon={<Icons type={ICO.KORPUS} />} buttons={KORPUS} grid={"grid-cols-4"} />
                            </Frame>
                        </div>
                    </div>
                    <div>
                        11
                    </div>
                </Layout>
            </div>
        )
    }
}

const mapStateToProps = (state, props) => {
    const users = state.entities.get('users');
    const model = state.entities.get('models')

    return {
        model,
        users,
    };
}

const home = connect(mapStateToProps, { ...UserEntity.triggers(), ...ModelsEntity.triggers() })(Conf);
export default withRouter(home);