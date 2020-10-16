import {connect} from 'react-redux';
import {visibleTodoList} from 'components/containers/VisibleTodoList';
import {FilteringBtn} from 'components/FilteringBtn';

const mapStateToProps = (state, ownProps) => ({
    active: state.filter === ownProps.filter
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    onClick: () => dispatch(visibleTodoList(ownProps.filter))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FilteringBtn);