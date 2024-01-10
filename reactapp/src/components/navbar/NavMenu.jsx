import React, { Component } from 'react';
import { Collapse, Navbar, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import './NavMenu.css';

export class NavMenu extends Component {
    static displayName = NavMenu.name;

    constructor(props) {
        super(props);

        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.state = {
            collapsed: true
        };
    }

    toggleNavbar() {
        this.setState({
            collapsed: !this.state.collapsed
        });
    }

    render() {
        return (
            <div className="navbar">
                <Navbar className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3" container light>
                    <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={!this.state.collapsed} navbar>
                        <ul className="navbar-nav flex-grow">
                            <NavItem className="item">
                                <NavLink tag={Link} className="text-dark path" to="/">Home</NavLink>
                            </NavItem>
                            <NavItem className="item">
                                <NavLink tag={Link} className="text-dark path" to="/createBlog">New Post</NavLink>
                            </NavItem>
                        </ul>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}
