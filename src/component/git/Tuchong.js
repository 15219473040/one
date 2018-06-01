
import React, { Component } from 'react';
import axios from "axios"
import { Row, Col, Pagination, Tooltip, Progress, Carousel, Affix } from 'antd';
import IMG from "./IMG..js"
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
    onChange = (page) => {
        console.log(page);
        this.setState({
            current: page,
        });
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
           
            .</div>
    }


}