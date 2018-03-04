import React, {Component} from 'react';
import {connect} from "react-redux";
import {Button, FormControl, FormGroup, HelpBlock, Row, Col} from 'react-bootstrap'
import {proccessCameraId} from '../actions/props-actions'
import '../../css/App.css';
import Page from "./Page";

class WelcomeForm extends Component {

    render() {
        const {onClick, help,} = this.props;
        const handleIdChange = e => this.setState({id: e.target.value});
        return (
            <Page>
                <FormGroup>
                    <FormGroup>Введите id камеры</FormGroup>
                    <Row>
                        <Col mdOffset={4} md={2} xs={12}>
                            <FormControl onChange={handleIdChange} className={"col-md-6 col-xs-3"}/>
                        </Col>
                        <Col md={2} xs={12}><Button type="submit" onClick={() => onClick(this.state.id)}
                                className={"Row--md-6"}>Submit</Button>
                        </Col>
                        {help && <HelpBlock>{help}</HelpBlock>}
                    </Row>
                </FormGroup>
            </Page>
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
export default connect(mapStateToProps, mapDispatchToProps)(WelcomeForm);