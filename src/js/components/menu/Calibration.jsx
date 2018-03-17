import React, {Component} from 'react';
import {connect} from "react-redux";
import {Button, Form, Row} from 'react-bootstrap'
import '../../../css/Container.css';
import {triggerAnchorsState} from "../../actions/global-state-actions";
import {CalibrationApi} from "../../rest/CalibrationApi";


class Calibration extends Component {

    render() {
        return (
            <Form horizontal className={"Container"}>
                <Row>
                    <Button id="add-anchors" onClick={this.props.showAnchors}
                            className={"col-md-3 col-md-offset-1 col-xs-6"}>Добавить якоря</Button>
                    <Button id="save-grid"
                            onClick={() => CalibrationApi.submitAnchorsGrid(this.props.anchorsPosition)}
                            className={"col-md-3 col-md-offset-1 col-xs-6"}>Сохранить зону</Button>
                    <Button id="reset-grid"
                            onClick={() => CalibrationApi.resetAnchorsGrid()}
                            className={"col-md-3 col-md-offset-1 col-xs-6"}>Сбросить зоны</Button>
                </Row>
            </Form>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        help: state.props.id ? `Last used id = ${state.props.id}` : "",
        anchorsPosition: state.anchorsPosition
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        showAnchors: () => {
            dispatch(triggerAnchorsState);
        }
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(Calibration);