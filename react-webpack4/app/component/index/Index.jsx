import React, { Component } from 'react';
import 'babel-polyfill';
// import Header from '../common/Header';
// import Footer from '../common/Footer';
import '../../public/css/common.pcss';
import '../../public/css/index.pcss';
import apiRequest from '../../public/js/apiRequest';
import apiRequestAsync from '../../public/js/apiRequestAsync';

// 使用路由
import {HashRouter as Router, Switch, Route, NavLink, Link, Redirect} from 'react-router-dom';
import Shop from '../shop/Index';
import Demo from '../demo/Index';

// 引入公用方法
import util from '$util/util';
console.log(util)

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
        // apiRequest.post('getActivity', {
        //     id: 818,
        //     templetId: 33
        // }, res => {console.log('成功',res)}, err => console.log('失败',err))
        // apiRequest.post('getSkin', {
        //     id: 78,
        //     templetId: 33
        // }, res => {console.log('成功',res)}, err => console.log('失败',err))
    }
    render() {
        // 测试eslint
        // let a = 0;
        return (
            // <div className="index">
            //     <div className="title">
            //         这是首页
            //     </div>
            //     <div className="mobile">13837987714:{util.isMobile('13837987714') ? '是' : '不是'}手机号</div>
            //     <Header />
            //     <Footer />
            // </div>
            <Router>  
                <div>
                    <div className="nav">
                        <NavLink to="/" activeClassName="selected" exact>首页</NavLink>
                        <NavLink to="/shop" activeClassName="selected" exact>商城</NavLink>
                        <NavLink to="/demo" activeClassName="selected" exact>demo</NavLink>
                    </div>
                    <Switch>
                        <Route exact path="/" render={_=> (<h3>这是首页</h3>)}/>
                        <Route path="/shop" component={Shop}/>
                        <Route path="/demo" component={Demo}/>
                        {/* <Route exact path="/demo" render={_=>(<Redirect to="/" />)}></Route> */}
                    </Switch>
                </div> 
            </Router>
        )
    }
}

export default Index;
