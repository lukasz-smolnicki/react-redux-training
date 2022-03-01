import React from 'react';
import { connect } from 'react-redux';

const FilterButton = ({ onClick, active, children }) => {
    return (
        <button onClick={onClick} disabled={active}>
            {children}
        </button>
    )
}

const mapStateToProps = (state, ownProps) => ({
    active: state.filter === ownProps.filter
})

const mamDispatchToProps = (dispatch, ownProps) => ({
    onClick: () =>
        dispatch({
            type: 'FILTER_TODO',
            filter: ownProps.filter
        })
})

export default connect(mapStateToProps, mamDispatchToProps)(FilterButton)