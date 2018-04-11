import React,{Component} from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';
import '../../public/css/common.pcss';
import '../../public/css/index.pcss';

class Index extends Component{
    render(){
        return(
            <div className="index">
                <div className="title">
                    这是首页
                </div>
                <Header></Header>
                <Footer></Footer>
            </div>
        )
    }
}

export default Index;
