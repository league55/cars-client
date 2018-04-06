import React, {Component} from 'react';
import {Circle, Image, Layer, Stage} from "react-konva";

import '../../css/App.scss';
import '../../css/Stream.css';
import {Button, Col, FormGroup, Row} from 'react-bootstrap'
import {StreamUtils} from "../util/StreamUtils";
import {connect} from "react-redux";
import {saveAnchorePosition} from "../actions/global-state-actions";
import * as ActionType from "../actions/actionTypes";

class Stream extends Component {

    constructor(props) {
        super();
        this.state = {connected: false, image: new window.Image(), anchorsPosition: props.anchorsPosition};
        this.socketStream = new StreamUtils();
        this.handleConnectClick = this.handleConnectClick.bind(this);
        this.handleDisconnectClick = this.handleDisconnectClick.bind(this);
        this.dragMove = this.dragMove.bind(this);
    }

    dragMove(e) {
        const newState = Object.assign({}, this.state);
        newState.anchorsPosition[e.target.name()] = e.target.getAbsolutePosition();
        this.setState(newState);
    };

    handleConnectClick() {
        this.socketStream.connect("ws://localhost:8080/gs-guide-websocket", (client) => {
            const newState = Object.assign(this.state, {connected: true, client});
            this.setState(newState);
            const self = this;
            client.subscribe('/stream', response => {
                const image = new window.Image();
                image.src = "data:image/jpeg;base64," + response.body;
                image.width = 500;
                image.height = 400;

                image.onload = () => {
                    self.setState(Object.assign({}, this.state, {image: image}));
                }

            });

            client.subscribe('/log', response => {
                this.props.logsUpdate(JSON.parse(response.body));
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
                        <Stage width={this.state.image.width} height={this.state.image.height}>
                            <Layer>
                                <Image id="image" image={this.state.image} className={"Stream--container"}
                                       alt={"stream"}/>
                                {this.props.showAnchors && <Circle x={this.state.anchorsPosition.topLeftAnchor.x}
                                                                   y={this.state.anchorsPosition.topLeftAnchor.y}
                                                                   stroke={'#666'} fill={'#ddd'} strokeWidth={2}
                                                                   radius={5} name={"topLeftAnchor"} draggable
                                                                   dragOnTop={false} onDragMove={this.dragMove}
                                                                   onDragEnd={this.props.savePosition}/>}
                                {this.props.showAnchors && <Circle x={this.state.anchorsPosition.topRightAnchor.x}
                                                                   y={this.state.anchorsPosition.topRightAnchor.y}
                                                                   stroke={'#666'} fill={'#ddd'} strokeWidth={2}
                                                                   radius={5} name={"topRightAnchor"} draggable
                                                                   dragOnTop={false} onDragMove={this.dragMove}
                                                                   onDragEnd={this.props.savePosition}/>}
                                {this.props.showAnchors && <Circle x={this.state.anchorsPosition.botRightAnchor.x}
                                                                   y={this.state.anchorsPosition.botRightAnchor.y}
                                                                   stroke={'#666'} fill={'#ddd'} strokeWidth={2}
                                                                   radius={5} name={"botRightAnchor"} draggable
                                                                   dragOnTop={false} onDragMove={this.dragMove}
                                                                   onDragEnd={this.props.savePosition}/>}
                                {this.props.showAnchors && <Circle x={this.state.anchorsPosition.botLeftAnchor.x}
                                                                   y={this.state.anchorsPosition.botLeftAnchor.y}
                                                                   stroke={'#666'} fill={'#ddd'} strokeWidth={2}
                                                                   radius={5} name={"botLeftAnchor"} draggable
                                                                   dragOnTop={false} onDragMove={this.dragMove}
                                                                   onDragEnd={this.props.savePosition}/>}

                            </Layer>
                        </Stage>
                    </Col>
                </Row>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        showAnchors: state.showAnchors,
        anchorsPosition: state.anchorsPosition
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        savePosition: (e) => {
            const point = {
                ...e.target.getAbsolutePosition(),
                windowWidth: e.target.parent.parent.attrs.width,
                windowHeight: e.target.parent.parent.attrs.height
            };
            dispatch(saveAnchorePosition(e.target.name(), point));
        },
        logsUpdate: (newLogs) => {
            dispatch({type: ActionType.LOGS_UPDATE, value: newLogs});
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Stream);