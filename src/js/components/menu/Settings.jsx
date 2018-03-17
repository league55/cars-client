import React, {Component} from 'react';
import {connect} from "react-redux";
import shallowCompare from 'react-addons-shallow-compare';
import {Button, Form, Row} from 'react-bootstrap'
import {handleLoadProps, handlePropertisSubmit, handlePropertyChange} from '../../actions/props-actions'
import '../../../css/Container.css';
import * as Props from "../../constants/Properties";
import SettingsItem from "./SettingsItem";

class Settings extends Component {

    componentDidMount() {
        const {streamProps, loadProps} = this.props;
        if (!streamProps || streamProps.length === 0) {
            loadProps();
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        return shallowCompare(this, nextProps, nextState);
    }

    render() {
        const {handlePropertyChange, streamProps = [], onClick} = this.props;
        return (
            <Form horizontal className={"Container"}>
                <Row>
                    <SettingsItem label="Зон "
                                name={Props.ZonesPerLineAmount}
                                value={Settings.getPropValue(streamProps, Props.ZonesPerLineAmount)}
                                onChange={handlePropertyChange}
                                wrapperClass={"col-md-6 col-xs-6"}/>
                    <SettingsItem label="Полос "
                                name={Props.RoadWaysAmount}
                                onChange={handlePropertyChange}
                                value={Settings.getPropValue(streamProps, Props.RoadWaysAmount)}
                                wrapperClass={"col-md-6 col-xs-6"}/>
                </Row>
                <Row>
                    <SettingsItem label="IP " name={Props.CameraIP}
                                onChange={handlePropertyChange}
                                value={Settings.getPropValue(streamProps, Props.CameraIP)}
                                wrapperClass={"col-md-6 col-xs-6"}/>
                    <SettingsItem label="ΔT " name={Props.TimeBetweenOutput}
                                value={Settings.getPropValue(streamProps, Props.TimeBetweenOutput)}
                                onChange={handlePropertyChange}
                                wrapperClass={"col-md-6 col-xs-6"}/>
                </Row>
                <Row>
                    <SettingsItem label="Высота зоны (м.)" name={Props.ZoneHeight}
                                onChange={handlePropertyChange}
                                lableSm={8}
                                controlSm={4}
                                value={Settings.getPropValue(streamProps, Props.ZoneHeight)}
                                wrapperClass={"col-md-6 col-xs-6"}/>
                    <SettingsItem label="Видео Файл" name={Props.PathToVideoFile}
                                onChange={handlePropertyChange}
                                value={Settings.getPropValue(streamProps, Props.PathToVideoFile)}
                                wrapperClass={"col-md-6 col-xs-6"}/>
                </Row>
                <Row>
                    <Button sm={12}  bsStyle="primary" onClick={onClick}>Применить настройки</Button>
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
        onClick: () => {
            dispatch(handlePropertisSubmit());
        },
        loadProps: () => {
            dispatch(handleLoadProps);
        }
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(Settings);