import React, {Component} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import AddTodo from './components/addTodo/';
import TodoList from './components/todoList';
import UndeleteTodo from './components/undeleteTodo'
import actions from './actions/';

// export class App extends Component {
//   // constructor ({submitTodo, todos, deleteTodo, undeleteTodo}){
//   //   super();
//   // }
//   render() {
    
    
//     return (
//   <div>
//     <h1>Todo list</h1>
//     <AddTodo submitTodo = {this.submitTodo}/>
//     <TodoList todos={this.todos} deleteTodo={this.deleteTodo} />
//     <UndeleteTodo undeleteTodo={this.undeleteTodo}/>
//   </div>
//   )};

// }

export const App = ({submitTodo, todos, deleteTodo, undeleteTodo, lastDeletedTodo}) => {

  if (!lastDeletedTodo){
    return (
      <div>
        <h1>Todo list</h1>
        <AddTodo submitTodo = {submitTodo}/>
        <TodoList todos={todos} deleteTodo={deleteTodo} />
      </div>
  )
  }
  return (
    <div>
      <h1>Todo list</h1>
      <AddTodo submitTodo = {submitTodo}/>
      <TodoList todos={todos} deleteTodo={deleteTodo} />
      <UndeleteTodo undeleteTodo={undeleteTodo}/>
    </div>
)}




App.propTypes = {
  submitTodo: PropTypes.func.isRequired,
  todos: PropTypes.arrayOf(PropTypes.shape(
    {
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
    },
  )).isRequired,
  deleteTodo: PropTypes.func.isRequired,
  undeleteTodo: PropTypes.func.isRequired,
};

const mapStateToProps = state => state.todoListApp;

const mapDispatchToProps = dispatch => ({
  submitTodo: (text) => {
    if (text) {
      dispatch(actions.submitTodo(text));
    }
  },
  
    deleteTodo: (id) => {
      dispatch(actions.deleteTodo(id));
    },
    undeleteTodo: () => {
      dispatch(actions.undeleteTodo());
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
