import React from "react";
import "./styles/App.css";
import {Navigation} from './Navigation';
import {Home} from './Home';

export default class App extends React.Component {
    render() {
        return (<div>
            <Navigation/>
            <Home />
        </div>);
    }
}