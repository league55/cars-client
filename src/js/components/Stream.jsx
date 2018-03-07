import React, {Component} from 'react';
import '../../css/App.scss';
import '../../css/Stream.css';
import {Button, Col, FormGroup, Row} from 'react-bootstrap'
import {StreamUtils} from "../util/StreamUtils";

class Stream extends Component {

    constructor() {
        super();
        this.state = {connected: false, src: ""};
        this.socketStream = new StreamUtils();
        this.handleConnectClick = this.handleConnectClick.bind(this);
        this.handleDisconnectClick = this.handleDisconnectClick.bind(this);
    }

    handleConnectClick() {
        this.socketStream.subscribe("ws://localhost:8080/gs-guide-websocket", (client) => {
            const newState = Object.assign(this.state, {connected: true, client});
            this.setState(newState);

            client.subscribe('/topic/greetings', response => {
                this.setState(Object.assign({}, this.state, {src: response.body}));
            });
        });


    }

    handleDisconnectClick() {
        this.socketStream.disconnect();

        const newState = Object.assign(this.state, {connected: false});
        this.setState(newState)
    }

    render() {
        const connectBtnClassName = this.state.connected ? "active btn btn-default" : "btn btn-default";
        const disconnectBtnClassName = !this.state.connected ? "active btn btn-default" : "btn btn-default";
        return (
            <div>
                <Row>
                    <FormGroup>
                        <div className="form-group">
                            <Col md={4} xs={12}>
                                <label>Подключение:</label>
                            </Col>
                            <Col md={4} xs={6}>
                                <Button id="connect" className={connectBtnClassName}
                                        onClick={this.handleConnectClick}
                                        type="submit">Подключиться</Button>
                            </Col>
                            <Col md={4} xs={6}>
                                <Button id="disconnect" className={disconnectBtnClassName}
                                        onClick={this.handleDisconnectClick}
                                        type="submit">Отключиться
                                </Button>
                            </Col>
                        </div>
                    </FormGroup>
                </Row>

                <Row>
                    <Col md={12} xs={12}>
                        <img id="image" className={"Stream--container"} alt={"stream"}
                             src={"data:image/jpeg;base64," + this.state.src || ""}/>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Stream;