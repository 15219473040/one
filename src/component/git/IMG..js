
import React, { Component } from 'react';

export default  class IMG extends Component {
    constructor(props){
        super(props);
        this.state={

            url:this.props._url,
            user_id:"ui",
            img_id:"mi"

        }


    }
    componentDidMount(){
         var user_id=''
         var img_id='';
        if(this.props._images[0]){
            (this.props._images[0].user_id)?user_id=this.props._images[0].user_id:user_id="nouser";
            this.props._images[0].img_id?img_id=this.props._images[0].img_id:img_id="noimg";
        }


        this.setState({
            user_id,
            img_id

        })

    }

    render(){
        console.log(this.props._images)

            var _src='https://photo.tuchong.com/'+this.state.user_id+'/f/'+this.state.img_id+".jpg"

        return <div >
            {
                this.state.user_id == "" || this.state.img_id == "" ? "" : <img src={_src} title={_src}  style={{width:"100%",height:"100%"}} />
            }

            {/* { this.state.url+this.state.user_id+'/f/'+this.state.img_id+".jpg"} */}

            .</div>
    }


}