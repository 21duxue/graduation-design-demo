import React, { Component } from 'react'
import Menus from 'bee-menus';
import 'bee-menus/build/Menu.css';

const SubMenu = Menus.SubMenu;
const MenuItemGroup = Menus.ItemGroup;


export default class Sidebar extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            current: 'mail'
        }
    }

    handleClick = (e) => {
        this.setState({
            current: e.key,
        });
    }
    render() {
        return (
            <div>
                <Menus 
                  selectedKeys={[this.state.current]}
                  mode="horizontal"
                  onClick = {this.handleClick}
                >
                    <Menus.Item key="mail" attribute={{'type': 'mail'}}>
                        网站首页
                    </Menus.Item>
                    <Menus.Item key="app" disabled>
                        组织 2
                    </Menus.Item>
                    <SubMenu title={<span>组织 1 - 子</span>}>
                        <MenuItemGroup title="组 1">
                            <Menus.Item key="setting:1">选项 1</Menus.Item>
                            <Menus.Item key="setting:2">选项 2</Menus.Item>
                        </MenuItemGroup>
                        <MenuItemGroup title="组 2">
                            <Menus.Item key="setting:3">选项 3</Menus.Item>
                            <Menus.Item key="setting:4">选项 4</Menus.Item>
                        </MenuItemGroup>
                    </SubMenu>
                </Menus>
            </div>
        )
    }
}
