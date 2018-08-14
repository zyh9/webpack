import React, { Component } from 'react';
import Header from '../../component/Header';
import Footer from '../../component/Footer';
import '../../public/css/common.pcss';
import '../../public/css/shop.pcss';

class Shop extends Component {
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

export default Shop;
