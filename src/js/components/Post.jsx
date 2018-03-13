import React, {Component} from 'react';
import {Panel} from 'react-bootstrap';
import '../../css/App.scss';
import '../../css/WelcomeCard.css';

class Post extends Component {

    handleClick(e) {
        e.preventDefault();
    }

    render() {
        return (
            <div className="WelcomeCard">
                <Panel onClick={this.handleClick}>
                    {this.props.heading && <Panel.Heading>
                        <Panel.Title componentClass="h3">{this.props.heading}</Panel.Title>
                    </Panel.Heading>}
                    <Panel.Body>{this.props.children}</Panel.Body>
                </Panel>
            </div>
        );
    }
}

export default Post;