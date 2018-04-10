import React from 'react';
import '../../public/css/common.pcss';
import '../../public/css/shop.pcss';

class Index extends React.Component {
    render() {
        return (
            <div className="cont">
                <div className="shop">
                    这是商城
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
