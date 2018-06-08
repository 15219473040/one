
import React, { Component } from 'react';
import axios from "axios"
import { Row, Col, Pagination, Tooltip, Progress, Carousel, Affix,Layout,Tabs  } from 'antd';

import IMG from "./IMG..js"

const {Header,Content} = Layout;
const TabPane = Tabs.TabPane;


export default  class Tuchong extends Component {
    constructor(props){
        super(props);
        this.state={
            feedList:[],
            page:5,
            current: 3,
        }

    }
   componentWillMount(){
       const GIT_OAUTH="https://api.tuchong.com/feed-app?os_api=22&device_type=MI&device_platform=android&ssmix=a&manifest_version_code=232&dpi=400&abflag=0&uuid=651384659521356&version_code=232&app_name=tuchong&version_name=2.3.2&openudid=65143269dafd1f3a5&resolution=1280*1000&os_version=5.8.1&ac=wifi&aid=0&page=1&type=refresh"
       axios.get("https://cors-anywhere.herokuapp.com/"+GIT_OAUTH

       ).then(res=>{

               this.setState({
                   feedList:res.data.feedList,
                   page: res.data.feedList.length||5,
                   testPage:8,
                   
               })




           })
       .catch(err=>console.log(err))


   }
    componentDidMount(){
        "use strict";

    }
    onChange = (page) => {
        console.log(page);
        this.setState({
            current: page,
        });

        if(page==5){
            axios.get("https://cors-anywhere.herokuapp.com/https://api.douban.com/v2/book/isbn/9787115299710").then(res=>{
                console.log(res)

            })
        }
    }

    render(){

// console.log(this.state.page)
 
        return <div>
            <Tooltip title="3 done / 3 in progress / 4 to do">
                <Progress percent={60} successPercent={30} />
            </Tooltip>
            <Affix offsetTop={100}>

                <Pagination current={this.state.current} onChange={this.onChange} total={this.state.page} pageSize={1}/>
            </Affix>

                    {/* <Row gutter={8}>

                        {this.state.feedList.length?
                            this.state.feedList.map((item,ind)=>{

                                return <Col xs={24}>
                                    <div style={{height:"500px"}}>


                                        <IMG  _url={item.url} _images={item.images}/>
                                    </div>
                                </Col>
                            })
                            :""}

                    </Row> */}
             <Layout>
                <Header style={{color:"#fff"}}>新书速递
                    <span>更多»</span>
                     <div className="card-container">
                     <Tabs type="card">
                         <TabPane tab="Tab Title 1" key="1">
                             <p>Content of Tab Pane 1</p>
                             <p>Content of Tab Pane 1</p>
                             <p>Content of Tab Pane 1</p>
                         </TabPane>
                         <TabPane tab="Tab Title 2" key="2">
                             <p>Content of Tab Pane 2</p>
                             <p>Content of Tab Pane 2</p>
                             <p>Content of Tab Pane 2</p>
                         </TabPane>
                         <TabPane tab="Tab Title 3" key="3">
                             <p>Content of Tab Pane 3</p>
                             <p>Content of Tab Pane 3</p>
                             <p>Content of Tab Pane 3</p>
                         </TabPane>
                     </Tabs>
                     </div>
                </Header>
                 <Content>
                 </Content>
             </Layout>


            .</div>
    }


}
