import React, { Component } from 'react';
import Header from '../../component/Header';
import Footer from '../../component/Footer';
import '../../public/css/common.pcss';
import '../../public/css/demo.pcss';

class Demo extends Component {
    render() {
        return (
            <div className="demo">
                <div className="title">
                    这是演示
                </div>
                <Header/>
                <Footer/>
            </div>
        )
    }
}

export default Demo;
