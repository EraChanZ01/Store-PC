import * as React from 'react';

import Header from './Header';
import Footer from './Footer';
    export interface ILayoutProps {
        children: React.ReactNode;
    }

    export interface ILayoutState {
    }



    export default class Layout extends React.Component<ILayoutProps, ILayoutState> {
        constructor(props: ILayoutProps) {
            super(props);

            this.state = {
            }
        }

        public render() {
            const { children } = this.props;
            return (
                <div className=''>
                    <div className = ''>
                        <Header />
                        <div className="">
                            {children}
                        </div>
                    </div>
                    <Footer />
                </div>
            );
        }
    }