import {connect} from 'react-redux';
import {toggleUpdateTodo, deleteTodo, changingStateTodo, updateTodo} from 'actions/todo';
import {todoFilters} from 'actions/types_todo';
import {TodoList} from 'components/todoList';

//현재 filter값 조회, 값에 따라 list array switching
const visibleTodoList = (todos, filter) => {
    switch(filter){
        case todoFilters.SHOW_ALL :
            return todos;
        case todoFilters.SHOW_ACTIVE :
            return todos.filter(todo => todo.isFinished);
        case todoFilters.SHOW_FINISHED :
            return todos.filter(todo => !todo.isFinished);
        default : 
            throw new Error(`Undefined filter: ${filter}`);
    }
}

const mapStateToProps = state => ({
    todos: visibleTodoList(state.todos, state.filter)
})

const mapDispatchToProps = dispatch => ({
    toggleUpdateTodo: param => dispatch(toggleUpdateTodo(param)),
    deleteTodo: id => dispatch(deleteTodo(id)),
    changingStateTodo: param =>dispatch(changingStateTodo(param)),
    updateTodo: param => dispatch(updateTodo(param))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList);