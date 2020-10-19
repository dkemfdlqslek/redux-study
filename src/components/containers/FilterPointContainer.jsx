import {connect} from 'react-redux';
import {filteringTodo} from 'actions/todo';
import {FilteringBtn} from 'components/filteringBtn';

const mapStateToProps = (state, ownProps) => ({
    active: state.todo.filter === ownProps.filter
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    onClick: () => dispatch(filteringTodo(ownProps.filter))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FilteringBtn);