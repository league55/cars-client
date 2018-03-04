import * as React from 'react';
import {Link} from 'react-router-dom'
import {Navbar, NavItem, Nav} from 'react-bootstrap';

import '../../css/Header.css';

export default function () {
    return (<div className={"text"}>
        <Navbar>
            <Navbar.Header>
                <Navbar.Brand>
                    <a href="/">Адаптивное Управление</a>
                </Navbar.Brand>
            </Navbar.Header>
            <Nav>
                <NavItem eventKey={1} href="#">
                    <Link to="/">Главная</Link>

                </NavItem>
                <NavItem eventKey={2} href="#">
                    <Link to="/welcome">Сменить камеру</Link>
                </NavItem>
            </Nav>
        </Navbar>
    </div>);
}