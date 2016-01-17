import React, { Component, PropTypes } from 'react';

export default class TodoBox extends Component {
  render() {
    const { data } = this.props;

    return (
      <div className="todoBox">
        <h1>Todos</h1>
        <TodoList data={ data }/>
        <TodoForm />
      </div>
    );
  }
}

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data,
      titleValue: "",
      detailValue: ""
    };

    this.changeTitle  = this.changeTitle.bind(this);
    this.changeDetail = this.changeDetail.bind(this);
    this.addTodo      = this.addTodo.bind(this);
    this.deleteTodo   = this.deleteTodo.bind(this);
  }

  changeTitle(e) {
    this.setState({titleValue: e.target.value});
  }

  changeDetail(e) {
    this.setState({detailValue: e.target.value});
  }

  addTodo() {
    let newData = this.state.data;

    newData.push({
      title: this.state.titleValue,
      detail: this.state.detailValue
    });

    this.setState({data: newData});
    this.setState({titleValue: ""});
    this.setState({detailValue: ""});
  }

  deleteTodo(title) {
    let newData = this.state.data.filter(function (todo) {
        return todo.title !== title;
    });
    // let newData = this.state.data.filter(todo => todo.title !== title);

    this.setState({data: newData});
  }

  render() {
    const { data } = this.props;

    let todo = data.map(function (obj) {
      return <Todo title={obj.title}
                   key={obj.title}
                   onDelete={this.deleteTodo}>
              {obj.detail}
            </Todo>;
    }.bind(this));

    let {
      titleValue,
      detailValue
    } = this.state;

    return (
      <div className="todoList">
        <div>
          Title:<input type="text"
                       value={titleValue}
                       onChange={this.changeTitle} />

          Detail:<input type="text"
                        value={detailValue}
                        onChange={this.changeDetail} />

          <button onClick={this.addTodo}>Add</button>
        </div>
        <table style={{border: "2px solid black"}}>
          <tbody>
            { todo }
          </tbody>
        </table>
      </div>
    );
  }
}

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
      TodoStyle: style.notCheckedTodo
    };

    this.handleChange = this.handleChange.bind(this);
    this._onDelete = this._onDelete.bind(this);
  }

  handleChange(e) {
    this.setState({
      checked: e.target.checked
    });
    e.target.checked?
      this.setState({
        TodoStyle: style.checkedTodo
      }) :
      this.setState({
        TodoStyle: style.notCheckedTodo
      });
  }

  _onDelete() {
    this.props.onDelete(this.props.title);
  }

  render() {
    const {
      title,
      children
    } = this.props;

    const {
      Todo,
      TodoStyle
    } = this.state;

    return (
      <tr style={TodoStyle}>
        <td style={style.tableContent}>
          <button onClick={this._onDelete}>X</button>
        </td>
        <td style={style.tableContent}>
          <input type="checkbox"
                 checked={ this.state.checked }
                 onChange={ this.handleChange } />
        </td>
        <td style={style.tableContent}>{title}</td>
        <td style={style.tableContent}>{children}</td>
      </tr>
    );
  }
}

Todo.propTypes = {
  title: PropTypes.string.isRequired
};

class TodoForm extends Component {
  render() {
    return (
      <div className="todoForm">
        I am a TodoForm.
      </div>
    );
  }
}

let style = {
  checkedTodo: {
    textDecoration: "line-through"
  },
  notCheckedTodo: {
    textDecoration: "none"
  },
  tableContent: {
    border: "1px solid black"
  }
};
