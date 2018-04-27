import React, { Component } from 'react';
 
import { Link } from 'react-router';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;


class SiderCustom extends Component {
     
    render() {
        return (
           <Sider
        //   collapsible
        //   collapsed={this.state.collapsed}
        //   onCollapse={this.onCollapse}
        >          
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline"  >
      
            <SubMenu
              key="sub1"
              title={<span><Icon type="bars" /><span>General</span></span>}
            >
              <Menu.Item key="3"><Link to={"/app/general/button"}>button</Link></Menu.Item>
              <Menu.Item key="4"><Link to={"/app/general/icon"}>icon</Link></Menu.Item>
      
            </SubMenu>
            <SubMenu
              key="sub2"
              title={<span><Icon type="team" /><span>Team</span></span>}
            >
              <Menu.Item key="6">Team 1</Menu.Item>
              <Menu.Item key="8">Team 2</Menu.Item>
            </SubMenu>
            <Menu.Item key="9">
              <Icon type="file" />
              <span>File</span>
            </Menu.Item>
          </Menu>
        </Sider>
        )
    }
}

export default SiderCustom;