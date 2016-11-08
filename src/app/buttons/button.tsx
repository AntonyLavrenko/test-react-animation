/// <reference path="../../../typings/react/react-global.d.ts" />
/// <reference path="./../../interfaces.d.ts"/>
import * as React from "react";

//var cx = React.addons.classSet;

interface ButtonProperties {
    className?  : string;
    color?      : string;
    top?        : number;
    left?       : number;
    children    : any;
    onClick     : any;
}
interface ButtonState {

}


/**
 * Button
 */
export class Button extends React.Component<ButtonProperties, ButtonState> {

    constructor(props: ButtonProperties, context: any){ console.log(context);
        super(props, context);

        this.state = {
            classes : [this.props.className],
            active  :  true,
            hover   :  false,
            pressed : false
        };
    }

    onMouseUp(){
        this.setState({pressed: false});
    }

    onMouseDown(){
        this.setState({pressed: true});
    }

    onMouseOver(){
        this.setState({hover: true});
    }

    onMouseOut(){
        this.setState({hover: false});
    }

    render() {

        const {className, color, top, left, children} = this.props;

        let buttonStyle = {
            color: color
        };

        return <button
            className={cx(this.state.classes)}
            onMouseOver={this.onMouseOver.bind(this)}
            onMouseOut={this.onMouseOut.bind(this)}
            onMouseUp={this.onMouseDown.bind(this)}
            onMouseDown={this.onMouseDown.bind(this)}
            style={buttonStyle}>
                {children}
        </button>;
    }
}