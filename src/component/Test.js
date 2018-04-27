import React from "react"
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
 
class Test extends React.Component {
 
    render() {
        return (
       <div>
           <h1>test router'children</h1>
           <h4>
               {this.props.children}
           </h4>
       </div>
        );
    }
}

export default Test;