import React,{Component} from 'react';
import '../../public/css/common.pcss';
import '../../public/css/index.pcss';

class Index extends Component{
    render(){
        return(
            <div className="cont">
                <div className="index">
                    这是首页
                </div>
                <div className="con"></div>
                <div className="nav">
                    <a href="/index.html">首页</a> <a href="/shop.html">商城</a>
                </div> 
            </div>
        )
    }
}

export default Index;
