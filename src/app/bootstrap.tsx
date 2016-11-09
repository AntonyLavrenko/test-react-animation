/// <reference path="../../typings/react/react.d.ts" />
/// <reference path="../../typings/react/react-dom.d.ts" />

/// <reference path="elements/element.tsx" />

import * as React from "react";
import * as ReactAddons from "react-with-addons";
import * as ReactDOM from "react-dom";

const { TransitionGroup } = ReactAddons.addons;

import * as buttons from "./buttons/button";
import {Element} from "./elements/element";

interface AppProps {}
interface AppState {
    state: number;
}

const Button = buttons.Buttons.Button;

/*
 * A simple React component
 */
class Application extends React.Component<AppProps, AppState> {

    constructor(props: AppProps, states: AppState){
        super(props, states);

        this.state = {
            index: 0
        }

    }

    onClick(){
        this.setState({index: this.state.index + 1});
    }

    render() {

        return <div>
            <TransitionGroup>
                <Element active={(this.state.index < 1)} transformX={0} transformY={-100}>Hello, </Element>
                <Element active={(this.state.index < 2)} transformX={200} transformY={-200} transformRotate={30} >ES6 and</Element>
                <Element active={(this.state.index < 3)} transformX={-300} transformY={100} transformRotate={-90}>React 0.13!</Element>
            </TransitionGroup>

            <p>
                <Button color="#000" onClick={this.onClick.bind(this)}>Show animation {this.state.index + 1}</Button>
            </p>
        </div>;
    }
}

/*
 * Render the above component into the div#app
 */
React.render(<Application />, document.getElementById('app'));