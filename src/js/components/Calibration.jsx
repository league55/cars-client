import React, {Component} from 'react';
import {connect} from "react-redux";
import {Col, ControlLabel, Form, FormControl, FormGroup, Row} from 'react-bootstrap'
import {proccessCameraId} from '../actions/props-actions'
import '../../css/Container.css';

function FieldGroup({id, label, help, wrapperClass, ...props}) {
    return (
        <FormGroup controlId={id} className={wrapperClass}>
            <Col componentClass={ControlLabel} sm={3}>
                {label}
            </Col>
            <Col sm={9  }>
                <FormControl {...props} />
            </Col>
        </FormGroup>
    );
}

class Calibration extends Component {

    render() {
        // const {onClick, help,} = this.props;
        const handleIdChange = e => this.setState({id: e.target.value});
        return (
            <Form horizontal className={"Container"}>
                <Row>
                    <FieldGroup label="Зон " id="zones" onChange={handleIdChange} wrapperClass={"col-md-6 col-xs-6"}/>
                    <FieldGroup label="Полос " id="rows" onChange={handleIdChange} wrapperClass={"col-md-6 col-xs-6"}/>
                </Row>
                <Row>
                    <FieldGroup label="IP " id="ipAddress" onChange={handleIdChange} wrapperClass={"col-md-6 col-xs-6"}/>
                    <FieldGroup label="ΔT " id="deltaTime" onChange={handleIdChange} wrapperClass={"col-md-6 col-xs-6"}/>
                </Row>
                <Row>
                    <FieldGroup label="Зон " id="zones" onChange={handleIdChange} wrapperClass={"col-md-6 col-xs-6"}/>
                    <FieldGroup label="Полос " id="rows" onChange={handleIdChange} wrapperClass={"col-md-6 col-xs-6"}/>
                </Row>
            </Form>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        help: state.props.id ? `Last used id = ${state.props.id}` : ""
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onClick: (e) => {
            dispatch(proccessCameraId(e));
        }
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(Calibration);