import React, { Component } from 'react'

import './index.less'

import FormControl from 'bee-form-control';
import Navbar from 'bee-navbar';
import 'bee-navbar/build/Navbar.css';
const NavItem = Navbar.NavItem;
const Header = Navbar.Header;
const Brand = Navbar.Brand;
const Collapse = Navbar.Collapse;
const Toggle = Navbar.Toggle;
const Nav = Navbar.Nav;




export default class Sidebar extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            expanded: false,
            selectedkey: 1
        }
    }

    onToggle = (value) => {
        this.setState({expanded: value});
    }

    handleSelect = (index) => {
        this.setState({selectedkey: index});
    }


  
    render() {
        return (
            <div className="container">
                <Navbar
                    inverse
                    fixedTop={true}
                    expanded={this.state.expanded}
                    onToggle={this.onToggle}>
                    <Header>
                        <Brand>
                        <img
                            src="assets/images/logo1.png"
                            style={{ cursor: "pointer" }}
                            width={200}
                            height={50}
                        />
                        </Brand>
                        <Toggle />
                    </Header>

                    <Collapse>
                        <Nav
                            selectedkey={this.state.selectedkey}
                            onSelect={this.handleSelect}>
                            <NavItem eventKey={1}>选项</NavItem>
                            <NavItem href="#" eventKey={2}>
                                选项
                            </NavItem>
                        </Nav>
                        
                        <Navbar.Form pullRight>
                            <FormControl type="text" placeholder="Search"/>
                        </Navbar.Form>
                    </Collapse>
                </Navbar>
            </div>
        )
    }
}
