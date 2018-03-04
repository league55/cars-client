import React, {Component} from 'react';
import {Grid} from 'react-bootstrap'

import '../../css/App.css';

class Page extends Component {
    render() {
        return (
            <div className="App">
                <div className="Row">
                    <Grid>
                        {this.props.children}
                    </Grid>
                </div>
            </div>
        );
    }
}


export default Page;