var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/// <reference path="../../typings/react/react.d.ts" />
var React = require("react");
var TodoItem = (function (_super) {
    __extends(TodoItem, _super);
    function TodoItem() {
        _super.call(this);
        this.removeItem = this.removeItem.bind(this);
    }
    TodoItem.prototype.removeItem = function () {
        this.props.onRemove(this.props.item);
    };
    TodoItem.prototype.render = function () {
        return (<li>
              <span> {this.props.item.description} </span>
              <button onClick={this.removeItem}>delete</button>
            </li>);
    };
    return TodoItem;
})(React.Component);
exports.TodoItem = TodoItem;
//# sourceMappingURL=todoItem.js.map