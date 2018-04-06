import React, {Component} from 'react';
import {Button, Form, Row, Well} from 'react-bootstrap'
import '../../../css/Container.css';
import {StatusApi} from "../../rest/LogsApi";
import {CAMERA_STATUS_UPDATED} from "../../actions/actionTypes";
import {connect} from "react-redux";
import "../../../css/Logs.css";

class Logs extends Component {
    constructor() {
        super();
        this.checkStatus = this.checkStatus.bind(this);
    }

    componentDidMount() {
        this.checkStatus();
    }

    checkStatus() {
        StatusApi.getStatus().then(this.props.updateStatus)
    }

    render() {
        const {isCameraActive, log} = this.props;

        const notDefined = <Button bsStyle="default" onClick={() => this.checkStatus()}>...</Button>;
        const notActive = <Button bsStyle="danger" onClick={() => this.checkStatus()}>OFF</Button>;
        const active = <Button bsStyle="success" onClick={() => this.checkStatus()}>ON</Button>;

        let cameraStatus;
        if (isCameraActive === undefined) {
            cameraStatus = notDefined;
        } else if (isCameraActive === "true") {
            cameraStatus = active;
        } else {
            cameraStatus = notActive;
        }

        function getLogsContent(log) {
            return log.map(content => <p key={content.substring(content.length - 10) + window.Date.now()}>{content}</p>);
        }

        const content = getLogsContent(log);

        return (
            <Form horizontal className={"Container Logs"}>
                <Row>
                    {cameraStatus}
                </Row>
                <Row>
                    <Well className={"Well"}>{content}</Well>
                </Row>
            </Form>
        );
    }

    static getPropValue(streamProps, name) {
        const index = streamProps.findIndex(prop => prop.key === name);

        return index > -1 ? streamProps[index].value : "";
    }
}


const mapStateToProps = (state, ownProps) => {
    const isCameraActive = state.camera.isCameraActive;
    const log = state.applicationLogs;
    return {
        isCameraActive,
        log
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        updateStatus: (newStatus) => {
            dispatch({type: CAMERA_STATUS_UPDATED, value: newStatus});
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Logs);