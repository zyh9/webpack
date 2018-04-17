import React, { Component } from 'react';
import 'babel-polyfill';
import Header from '../common/Header';
import Footer from '../common/Footer';
import '../../public/css/common.pcss';
import '../../public/css/index.pcss';
import apiRequest from '../../public/js/apiRequest';
import apiRequestAsync from '../../public/js/apiRequestAsync';
import util from '../../public/js/util';

class Index extends Component {
    async IndexData() {
        let data1 = await apiRequestAsync.post('getActivity', {
            id: 818,
            templetId: 33
        })
        console.log(data1)
        let data2 = await apiRequestAsync.post('getSkin', {
            id: 78,
            templetId: 33
        })
        console.log(data2)
    }
    componentDidMount() {
        // console.log(apiRequest, apiRequestAsync, util)
        // this.IndexData()
        apiRequest.post('getActivity', {
            id: 818,
            templetId: 33
        }, res => {console.log('成功',res)}, err => console.log('失败',err))
        apiRequest.post('getSkin', {
            id: 78,
            templetId: 33
        }, res => {console.log('成功',res)}, err => console.log('失败',err))
    }
    render() {
        // 测试eslint
        // let a = 0;
        return (
            <div className="index">
                <div className="title">
                    这是首页
                </div>
                <div className="mobile">13837987714:{util.isMobile('13837987714') ? '是' : '不是'}手机号</div>
                <Header />
                <Footer />
            </div>
        )
    }
}

export default Index;
