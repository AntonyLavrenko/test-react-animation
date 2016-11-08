/// <reference path="../../typings/react/react.d.ts" />
/// <reference path="../../typings/react/react-dom.d.ts" />

import * as React from "react";
import ReactDOM from 'react-dom';

import * as buttons from "./buttons/button";

interface AppProps {}
interface AppState {
    top: number;
}

const Button = buttons.Buttons.Button;

/*
 * A simple React component
 */
class Application extends React.Component<AppProps, AppState> {

    constructor(props: AppProps, states: AppState){
        super(props, states);

        this.state = {
            top: 0
        }

    }

    onClick(){console.log(1);
        this.setState({top: this.state.top + 10});
    }

    render() {

        const style = {
            "margin-top": this.state.top
        };

        return <div>
            <h1 style={style}>Hello, ES6 and React 0.13!</h1>
            <p>
                <Button color="#000" onClick={this.onClick.bind(this)}>dsdsdsd</Button>
            </p>
        </div>;
    }
}

/*
 * Render the above component into the div#app
 */
ReactDOM.render(<Application />, document.getElementById('app'));