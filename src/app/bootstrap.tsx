/// <reference path="../../typings/react/react.d.ts" />
/// <reference path="../../typings/react/react-dom.d.ts" />

import * as React from "react";
import ReactDOM from 'react-dom';

import {Button} from "./buttons/button";

interface AppProps {}
interface AppState {}

/*
 * A simple React component
 */
class Application extends React.Component<AppProps, AppState> {

    render() {
        return <div>
            <h1>Hello, ES6 and React 0.13!</h1>
            <p>
                <Button color="#000" onClick="">dsdsdsd</Button>
            </p>
        </div>;
    }
}

/*
 * Render the above component into the div#app
 */
ReactDOM.render(<Application />, document.getElementById('app'));