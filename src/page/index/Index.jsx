import React, { Component } from 'react';
import '../../public/css/common.pcss';
import '../../public/css/index.less';
// import apiRequest from '../../public/js/apiRequest';
// import apiRequestAsync from '../../public/js/apiRequestAsync';

// 使用路由
import {HashRouter as Router, Switch, Route, NavLink} from 'react-router-dom';
// Link, Redirect
import Shop from '../shop/Index';
import Demo from '../demo/Index';

// 引入公用方法
// import util from '$util/util';
// console.log(util)
import Suspend from '../../component/Suspend/index'
import reactIcon from '../../public/img/react.svg'

class Index extends Component {
    componentDidMount() {
    }
    onHandleClick(){
        alert('hello')
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
                    <Suspend onHandleClick={this.onHandleClick.bind(this)}>
                        <img src={reactIcon} alt=""/>
                    </Suspend>
                </div> 
            </Router>
        )
    }
}

export default Index;
