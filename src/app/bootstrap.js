/// <reference path="../../typings/react/react.d.ts" />
/// <reference path="../../typings/react/react-dom.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var react_dom_1 = require('react-dom');
/*
 * A simple React component
 */
var Application = (function (_super) {
    __extends(Application, _super);
    function Application() {
        _super.apply(this, arguments);
    }
    Application.prototype.render = function () {
        return <div>
            <h1>Hello, ES6 and React 0.13!</h1>
            <p>

            </p>
        </div>;
    };
    return Application;
})(React.Component);
/*
 * Render the above component into the div#app
 */
react_dom_1["default"].render(<Application />, document.getElementById('app'));
//# sourceMappingURL=bootstrap.js.map