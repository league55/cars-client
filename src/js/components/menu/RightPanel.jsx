import React, {Component} from 'react';
import '../../../css/App.scss';
import '../../../css/Stream.css';
import {Nav, NavItem} from 'react-bootstrap'
import Logs from "./Logs";
import Settings from "./Settings";
import Calibration from "./Calibration";

export const menuItems = {
    LOGS: "LOGS",
    SETTINGS: "SETTINGS",
    CALIBRATION: "CALIBRATION"
};

class RightPanel extends Component {

    constructor() {
        super();

        this.state = {activeKey: menuItems.LOGS};
        this.getContent = this.getContent.bind(this);
    }

    handleSelect(eventKey) {
        this.setState({activeKey: eventKey});
    }

    getContent() {
        switch (this.state.activeKey) {
            case menuItems.LOGS:
                return <Logs/>;
            case menuItems.SETTINGS:
                return <Settings/>;
            case menuItems.CALIBRATION:
                return <Calibration/>;
            default:
                return <Logs/>;
        }
    }

    render() {
        return (
            <div><Nav bsStyle="tabs" justified activeKey={this.state.activeKey} onSelect={k => this.handleSelect(k)}>
                <NavItem eventKey={menuItems.LOGS}>
                    Логи
                </NavItem>
                <NavItem eventKey={menuItems.SETTINGS} title="Базовая конфигурация">
                    Настройки
                </NavItem>
                <NavItem eventKey={menuItems.CALIBRATION} title="Калибровка камеры">
                    Калибровка
                </NavItem>
            </Nav>
                {this.getContent()}
            </div>
        );
    }
}

export default RightPanel;