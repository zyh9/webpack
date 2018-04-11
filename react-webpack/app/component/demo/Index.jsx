import React, { Component } from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';
import '../../public/css/common.pcss';
import '../../public/css/demo.pcss';

class Index extends Component {
    render() {
        return (
            <div className="demo">
                <div className="title">
                    这是演示
                </div>
                <Header></Header>
                <Footer></Footer>
            </div>
        )
    }
}

export default Index;
