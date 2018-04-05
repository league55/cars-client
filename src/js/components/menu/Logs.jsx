import React, {Component} from 'react';
import shallowCompare from 'react-addons-shallow-compare';
import {Form, Label, Row} from 'react-bootstrap'
import '../../../css/Container.css';
import {StatusApi} from "../../rest/LogsApi";

class Logs extends Component {
    constructor() {
        super();

        this.state = {isCameraActive: undefined};
    }

    componentDidMount() {
        const onStatusReceived = (response) => this.setState({isCameraActive: Boolean(response)});

        if (!this.state.isCameraActive) {
            StatusApi.getStatus().then(onStatusReceived);
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        return shallowCompare(this, nextProps, nextState);
    }

    render() {
        const notDefined = <Label bsStyle="default">...</Label>;
        const notActive = <Label bsStyle="danger">OFF</Label>;
        const active = <Label bsStyle="success">ON</Label>;
        let cameraStatus;
        if (this.state.isCameraActive === undefined) {
            cameraStatus = notDefined;
        } else {
            if (this.state.isCameraActive === "true") {
                cameraStatus = active;
            } else {
                cameraStatus = notActive;
            }
        }
        return (
            <Form horizontal className={"Container"}>
                <Row>
                    {cameraStatus}
                </Row>
            </Form>
        );
    }

    static getPropValue(streamProps, name) {
        const index = streamProps.findIndex(prop => prop.key === name);

        return index > -1 ? streamProps[index].value : "";
    }
}

export default Logs;