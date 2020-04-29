import React, { Component } from 'react';
import classNames from 'classnames';
import './index.less'

class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            oL: null,
            oT: null,
        }
        this.click = false; //是否点击
        this.move = false; //是否移动
        this.isEnd = false; //是否移动结束
        this.htmlWidth = document.documentElement.clientWidth;
        this.htmlHeight = document.documentElement.clientHeight;
        this.oW = null;
        this.oH = null;
        this.suspendInfo = {
            width: null,
            height: null,
            left: null,
            top: null,
        }
    }
    componentDidMount() {
        this.refs.suspend.addEventListener("touchmove", e => {
            if (e.cancelable) {
                e.preventDefault()
            }
        }, {
            passive: false
        })
    }
    tStart(e) {
        this.click = true;
        let {
            width,
            height,
            left,
            top
        } = this.refs.suspend.getBoundingClientRect();
        this.suspendInfo = {
            width,
            height,
            left,
            top
        }
        let {
            clientX,
            clientY
        } = e.touches[0]; //按下位置
        //记录按下位置的所在按钮位置
        this.oW = clientX - left;
        this.oH = clientY - top;
        // console.log(this.oW, this.oH)
        //计算按钮定位距离
        let oL = clientX - this.oW;
        let oT = clientY - this.oH;
        // console.log(oL, oT)
        this.move = true;
        this.setState({
            oL,
            oT
        })
    }
    tMove(e) {
        if (this.move) {
            this.click = false;
            this.isEnd = false;
            let {
                clientX,
                clientY
            } = e.touches[0]; //拖动位置
            let oL = clientX - this.oW;
            let oT = clientY - this.oH;
            let {
                width,
                height
            } = this.suspendInfo;
            if (oL < 0) { //防止拖出可视区
                oL = 0;
            } else if (oL > this.htmlWidth - width) {
                oL = this.htmlWidth - width;
            }
            if (oT < 0) { //防止拖出可视区
                oT = 0;
            } else if (oT > this.htmlHeight - height) {
                oT = this.htmlHeight - height;
            }
            // console.log(oL, oT)
            this.setState({
                oL,
                oT
            })
        }
    }
    tEnd() {
        this.isEnd = true;
        this.move = false;
        let {
            width,
            // height
        } = this.suspendInfo;
        let { oL } = this.state;
        if (oL < (this.htmlWidth - width) / 2) {
            oL = 0;
        } else {
            oL = this.htmlWidth - width
        }
        this.setState({
            oL
        })
    }
    render() {
        let { oL, oT } = this.state,
            { children } = this.props;
        return (
            <div className={classNames('suspend-button', { 'suspend-button-animate': this.isEnd })}
                onTouchStart={this.tStart.bind(this)}
                onTouchMove={this.tMove.bind(this)}
                onTouchEnd={this.tEnd.bind(this)}
                onClick={this.props.onHandleClick.bind(this)}
                ref="suspend"
                style={{ left: oL + 'px', top: oT + 'px' }}>
                {children}
            </div>
        );
    }
}

export default index;