import React, { Component } from 'react';

import { Button, Radio, Icon ,Row,Col} from 'antd';

export default class Grid extends Component {
    state = {
        size: 'large',
    };

 

    render() {
        const size = this.state.size;
        return (
            <div style={{border:"1px solid #ddd"}}>
                <p>left</p>
                <Row type="flex" justify="start">
                    <Col span={4} style={{ padding: "10px", background: "blue" }} >4</Col>
                    <Col span={4} style={{ padding: "10px", background: "blue" }} >4</Col>
                    <Col span={4} style={{ padding: "10px", background: "blue" }} >4</Col>
                </Row>
                <p>right</p>
                <Row type="flex" justify="end">
                    <Col span={4} style={{ padding: "10px", background: "blue" }} >4</Col>
                    <Col span={4} style={{ padding: "10px", background: "blue" }} >4</Col>
                    <Col span={4} style={{ padding: "10px", background: "blue" }} >4</Col>
                </Row>
                <p>center</p>
                <Row type="flex" justify="center">
                   <Col span={4} style={{padding:"10px",background:"blue"}} >4</Col>
                   <Col span={4} style={{padding:"10px",background:"blue"}} >4</Col>
                   <Col span={4} style={{padding:"10px",background:"blue"}} >4</Col>
                </Row>
                <p>between</p>
                <Row type="flex" justify="space-between">
                    <Col span={4} style={{ padding: "10px", background: "blue" }} >4</Col>
                    <Col span={4} style={{ padding: "10px", background: "blue" }} >4</Col>
                    <Col span={4} style={{ padding: "10px", background: "blue" }} >4</Col>
                </Row>
                <p>around</p>
                <Row type="flex" justify="space-around">
                    <Col span={4} style={{ padding: "10px", background: "blue" }} >4</Col>
                    <Col span={4} style={{ padding: "10px", background: "blue" }} >4</Col>
                    <Col span={4} style={{ padding: "10px", background: "blue" }} >4</Col>
                </Row>

                <p>aling top</p>
                <Row type="flex" justify="center" align="top">
                    <Col span={4} style={{ padding: "10px", background: "blue" }} >4</Col>
                    <Col span={4} style={{ padding: "10px", background: "blue" }} >4<br/>400</Col>
                    <Col span={4} style={{ padding: "10px", background: "blue" }} >4</Col>
                </Row>
                <p>aling middle</p>
                <Row type="flex" justify="center" align="middle">
                    <Col span={4} style={{ padding: "10px", background: "blue" }} >4</Col>
                    <Col span={4} style={{ padding: "10px", background: "blue" }} >4<br />400</Col>
                    <Col span={4} style={{ padding: "10px", background: "blue" }} >4</Col>
                </Row>
                <p>aling bottom</p>
                <Row type="flex" justify="center" align="bottom">
                    <Col span={4} style={{ padding: "10px", background: "blue" }} >4</Col>
                    <Col span={4} style={{ padding: "10px", background: "blue" }} >4<br />400</Col>
                    <Col span={4} style={{ padding: "10px", background: "blue" }} >4</Col>
                </Row>

               
            </div>
        );
    }
}

  