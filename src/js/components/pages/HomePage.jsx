import React, { Component } from "react";
import {connect} from "react-redux";
import {push} from 'react-router-redux'
import {bindActionCreators} from 'redux'
import {Col} from 'react-bootstrap'

import '../../../css/App.css';
import Post from '../Post';
import Page from "./Page";
import Stream from "../Stream";
import RightPanel from "../menu/RightPanel";

class HomePage extends Component {
    componentWillMount() {
        if (!this.props.id) {
            this.props.getId();
        }
    }

    handleMenuItemChange(menuItem) {

    }

    render() {
        return (
            <Page>
                <Post className="App-intro Row-md-12">
                    <p>{this.props.id ? this.props.id : "no Id"}</p>
                    <Col md={6} xs={12}>
                        <Stream/>
                    </Col>
                    <Col md={6} xs={12}>
                        <RightPanel/>
                    </Col>
                </Post>
            </Page>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        id: state.props.id
    }
};

const mapDispatchToProps = dispatch => bindActionCreators({
    getId: () => push('/welcome')
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);