import React, { Component } from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';
import '../../public/css/common.pcss';
import '../../public/css/index.pcss';
import apiRequest from '../../public/js/apiRequest';
import apiManager from '../../public/js/apiManager';
import util from '../../public/js/util';

class Index extends Component {
    componentDidMount(){
        console.log(apiManager,util)
        apiRequest.post(apiManager.getTeamList, {
            uupt:'uupt'
        }, res => console.log(res), err => console.log(err))
    }
    render() {
        return (
            <div className="index">
                <div className="title">
                    这是首页
                </div>
                <div className="mobile">13837987714:{util.isMobile('13837987714')?'是':'不是'}手机号</div>
                <Header/>
                <Footer/>
            </div>
        )
    }
}

export default Index;
