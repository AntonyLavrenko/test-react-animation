var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/// <reference path="../../typings/react/react.d.ts" />
var React = require("react");
var todoItem_1 = require('./todoItem');
var Main = (function (_super) {
    __extends(Main, _super);
    function Main() {
        _super.call(this);
        this.state = { newItem: { description: '' }, todoList: [] };
        this.changeName = this.changeName.bind(this);
        this.addItem = this.addItem.bind(this);
        this.removeItem = this.removeItem.bind(this);
    }
    Main.prototype.changeName = function (e) {
        this.setState({
            newItem: {
                description: e.target.value
            }
        });
    };
    Main.prototype.addItem = function () {
        var list = this.state.todoList;
        list.push({
            description: this.state.newItem.description,
            key: new Date().getTime()
        });
        this.setState({
            todoList: list,
            newItem: { description: '' }
        });
    };
    Main.prototype.removeItem = function (item) {
        var list = this.state.todoList.filter(function (i) { return i.key !== item.key; });
        this.setState({ todoList: list });
    };
    Main.prototype.render = function () {
        var _this = this;
        var todoItems = this.state.todoList.map(function (item) {
            return <todoItem_1.TodoItem key={item.key} item={item} onRemove={_this.removeItem}></TodoItem>;
        });
        return (<div>
                <div className="ddd sss">
                    <input type="text" placeholder="input new item" value={this.state.newItem.description} onChange={this.changeName}/>
                    <button onClick={this.addItem}>add</button>
                </div>
                <ul>{todoItems}</ul>
            </div>);
    };
    return Main;
})(React.Component);
exports.Main = Main;
//# sourceMappingURL=main.js.map