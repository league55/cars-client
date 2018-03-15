import React, {Component} from 'react';
import {connect} from "react-redux";
import {Col, ControlLabel, Form, FormControl, FormGroup, Row} from 'react-bootstrap'
import {handleLoadProps, handlePropertyChange} from '../../actions/props-actions'
import '../../../css/Container.css';
import * as Props from "../../constants/Properties";

function FieldGroup({id, label, wrapperClass, ...props}) {
    return (
        <FormGroup controlId={id} className={wrapperClass}>
            <Col componentClass={ControlLabel} sm={3}>
                {label}
            </Col>
            <Col sm={9}>
                <FormControl {...props} />
            </Col>
        </FormGroup>
    );
}

class Calibration extends Component {

    componentDidMount() {
        const {streamProps, loadProps} = this.props;
        if (!streamProps || streamProps.length === 0) {
            loadProps();
        }
    }

    render() {
        const {handlePropertyChange, streamProps = []} = this.props;
        return (
            <Form horizontal className={"Container"}>
                <Row>
                    <FieldGroup label="Зон "
                                name={Props.ZonesPerLineAmount}
                                value={Calibration.getPropValue(streamProps, Props.ZonesPerLineAmount)}
                                onChange={handlePropertyChange}
                                wrapperClass={"col-md-6 col-xs-6"}/>
                    <FieldGroup label="Полос "
                                name={Props.RoadWaysAmount}
                                onChange={handlePropertyChange}
                                value={Calibration.getPropValue(streamProps, Props.RoadWaysAmount)}
                                wrapperClass={"col-md-6 col-xs-6"}/>
                </Row>
                <Row>
                    <FieldGroup label="IP " name={Props.CameraIP}
                                onChange={handlePropertyChange}
                                value={Calibration.getPropValue(streamProps, Props.CameraIP)}
                                wrapperClass={"col-md-6 col-xs-6"}/>
                    <FieldGroup label="ΔT " name={Props.TimeBetweenOutput}
                                value={Calibration.getPropValue(streamProps, Props.TimeBetweenOutput)}
                                onChange={handlePropertyChange}
                                wrapperClass={"col-md-6 col-xs-6"}/>
                </Row>
                <Row>
                    <FieldGroup label="Высота зоны" name={Props.ZoneHeight}
                                onChange={handlePropertyChange}
                                value={Calibration.getPropValue(streamProps, Props.ZoneHeight)}
                                wrapperClass={"col-md-6 col-xs-6"}/>
                    <FieldGroup label="Видео Файл" name={Props.PathToVideoFile}
                                onChange={handlePropertyChange}
                                value={Calibration.getPropValue(streamProps, Props.PathToVideoFile)}
                                wrapperClass={"col-md-6 col-xs-6"}/>
                </Row>
            </Form>
        );
    }

    static getPropValue(streamProps, name) {
        const index = streamProps.findIndex(prop => prop.key === name);

        return index > -1 ? streamProps[index].value : "";
    }
}

const mapStateToProps = (state) => {
    return {
        help: state.props.id ? `Last used id = ${state.props.id}` : "",
        streamProps: state.props.streamProps
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onClick: (e) => {
            dispatch(handlePropertyChange(e));
        },
        loadProps: () => {
            dispatch(handleLoadProps);
        }
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(Calibration);