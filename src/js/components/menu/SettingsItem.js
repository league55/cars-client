import React, {Component} from 'react';
import {connect} from "react-redux";
import {Col, ControlLabel, FormControl, FormGroup} from 'react-bootstrap'
import {handlePropertyChange} from '../../actions/props-actions'
import '../../../css/Container.css';
import {getPropValue} from "../../util/PropertiesUtil";


class SettingsItem extends Component {
    render() {
        const {id, label, wrapperClass, lableSm = 3, controlSm = 9, ...props} = this.props;
        return (
            <FormGroup controlId={id} className={wrapperClass}>
                <Col componentClass={ControlLabel} sm={lableSm}>
                    {label}
                </Col>
                <Col sm={controlSm}>
                    <FormControl {...props}/>
                </Col>
            </FormGroup>
        );
    }


}

const mapStateToProps = (state, ownProps) => {
    return {
        value: getPropValue(state.props.streamProps, ownProps.name)
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onChange: (e) => {
            dispatch(handlePropertyChange({key: e.target.name, value: e.target.value}));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(SettingsItem);