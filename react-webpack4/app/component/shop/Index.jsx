import React, { Component } from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';
import '../../public/css/common.pcss';
import '../../public/css/shop.pcss';

class Index extends Component {
    render() {
        return (
            <div className="shop">
                <div className="title">
                    这是商城
                </div>
                <Header/>
                <Footer/>
            </div>
        )
    }
}

export default Index;
