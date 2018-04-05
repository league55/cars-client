import React, {Component} from 'react';
import {connect} from "react-redux";
import {Button, ButtonToolbar, Col, FormGroup, Row} from 'react-bootstrap'
import '../../../css/Container.css';
import {getPropValue} from "../../util/PropertiesUtil";
import {calibrationSliderChange, calibrationSliderRelease, lineNumberChange} from "../../actions/calibration-actions";


class GridCalibration extends Component {

    constructor() {
        super();
        this.getRadioBtns = this.getRadioBtns.bind(this);
        this.sliderChanged = this.sliderChanged.bind(this);
        this.sliderReleased = this.sliderReleased.bind(this);
    }

    sliderChanged(e) {
        this.props.onSliderChange(e, this.props.lineNum);
    }

    sliderReleased(e) {
        this.props.onSliderRelease(e, this.props.lineNum);
    }

    getRadioBtns(gridSize, calibrationType) {
        const buttons = [];
        for (let i = 0; i < +gridSize - 1; i++) {
            buttons.push(
                <Button name={i}
                        active={i === this.props.lineNum}
                        key={calibrationType + "key" + i}
                        onClick={() => this.props.onLineNumChange(i)}>{i + 1}</Button>
            )
        }
        return <ButtonToolbar>{buttons}</ButtonToolbar>;
    }

    render() {
        const radiobuttons = this.getRadioBtns(this.props.gridSize, this.props.calibrationType);
        return (
            <div>
                <Row>
                    <Col md={6} mdOffset={4}>
                        <FormGroup>
                            {radiobuttons}
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col md={11} mdOffset={1}>
                        <input
                            type="range"
                            min="-100"
                            max="100"
                            value={this.props.sliderValue ? this.props.sliderValue.value : this.props.defaultValue}
                            className="slider"
                            onChange={this.sliderChanged}
                            onMouseUp={this.sliderReleased}/>
                    </Col>
                </Row>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    const lineNum = state.lineNumber[ownProps.calibrationType];
    return {
        gridSize: getPropValue(state.props.streamProps, ownProps.calibrationType),
        sliderValue: state.slider[ownProps.calibrationType] && state.slider[ownProps.calibrationType][lineNum],
        lineNum
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onSliderRelease: (e, lineNumber) => {
            dispatch(calibrationSliderRelease(ownProps.calibrationType, e.target.value, lineNumber));
        },
        onSliderChange: (e, lineNumber) => {
            dispatch(calibrationSliderChange(ownProps.calibrationType, e.target.value, lineNumber));
        },
        onLineNumChange: (lineNum) => {
            dispatch(lineNumberChange(ownProps.calibrationType, lineNum))
        }
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(GridCalibration);