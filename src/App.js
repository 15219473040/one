import React from "react"
 import {Layout} from "antd"
import 'antd/dist/antd.css'
import "./style/index.css"

import HeaderCustom from "./component/HeaderCustom.js"
import SiderCustom from "./component/SiderCustom.js"

const { Header, Footer, Sider, Content } = Layout;

class App extends React.Component{
 state = {
    collapsed: false,
  };
  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({ collapsed });
  }
  render() {
    return (
      <Layout style={{ minHeight: '100vh' }}>
  

          <HeaderCustom />
          <Layout>
              <SiderCustom />
              <Content style={{padding:"1%"}}>
                chilren:...
                  {this.props.children}
              </Content>
          </Layout>
          <Footer>Footer..........</Footer>
      </Layout>
    );
  }
}

export default App;