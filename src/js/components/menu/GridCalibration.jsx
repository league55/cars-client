import React, {Component} from 'react';
import {connect} from "react-redux";
import {FormGroup, Radio, Row} from 'react-bootstrap'
import '../../../css/Container.css';
import {getPropValue} from "../../util/PropertiesUtil";
import {handleCalibrationSliderChange} from "../../actions/calibration-actions";


class GridCalibration extends Component {

    constructor() {
        super();
        this.state = {lineNum: 0};
        this.getRadioBtns = this.getRadioBtns.bind(this);
    }

    getRadioBtns(gridSize, calibrationType) {
        const onClick = (e) => {
            e.preventDefault();
            this.setState({lineNum: e.target.value});
        };
        const buttons = new Array(+gridSize);
        for (let i = 1; i < +gridSize + 1; i++) {
            buttons.push(<Radio name="radioGroup" inline key={calibrationType + i} value={i} checked={i == this.state.lineNum} onClick={onClick}>
                {i}
            </Radio>)
        }
        return buttons;
    }

    render() {
        const radiobuttons = this.getRadioBtns(this.props.gridSize, this.props.calibrationType);
        return (
            <div>
                <Row>
                    <FormGroup>
                        {radiobuttons}
                    </FormGroup>
                </Row>
                <Row>
                    <div className={"col-md-12 col-xs-12 "}>
                        <input
                            type="range"
                            min="-100"
                            max="100"
                            value={this.props.sliderValue || this.props.defaultValue}
                            className="slider"
                            onMouseup={(e) => this.props.onSliderRelease(e, this.state.lineNum)}/>
                    </div>
                </Row>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        gridSize: getPropValue(state.props.streamProps, ownProps.calibrationType),
        sliderValue: state.slider[ownProps.calibrationType]
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onSliderRelease: (e, lineNum) => {
            dispatch(handleCalibrationSliderChange(ownProps.calibrationType, e.target.value, lineNum));
        }
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(GridCalibration);