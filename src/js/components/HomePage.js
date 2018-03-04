import React, {Component} from 'react';
import {connect} from "react-redux";
import {push} from 'react-router-redux'
import {bindActionCreators} from 'redux'

import '../../css/App.css';
import Post from './Post';
import Page from "./Page";

class HomePage extends Component {
    componentWillMount() {
        if (!this.props.id) {
            this.props.getId();
        }
    }

    render() {
        return (
            <Page>
                <Post className="App-intro Row-md-12">
                    <p>{this.props.id ? this.props.id : "no Id"}</p>
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