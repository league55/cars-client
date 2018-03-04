import * as React from 'react';
import {Provider} from 'react-redux';
import {Route} from 'react-router-dom'
import {ConnectedRouter} from 'react-router-redux'
import WelcomeForm from "./WelcomeForm";
import HomePage from "./HomePage";
import store, {history} from '../store/store-index'
import Header from "./Header";

export default class App extends React.Component {
    render() {
        return <Provider store={store}>
            <ConnectedRouter history={history}>
                <div>
                    <Header/>

                    <main>
                        <Route exact path="/" component={HomePage}/>
                        <Route exact path="/welcome" component={WelcomeForm}/>
                    </main>
                    {this.props.children}
                </div>
            </ConnectedRouter>
        </Provider>
    }
}