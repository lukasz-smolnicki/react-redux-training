import React from 'react';
import { AVAILABLE_FILTERS } from '../actions/todo.actions';
import FilterButton from '../components/FilterButton';

const Footer = () => {
    return (
        <footer>
            <FilterButton filter={AVAILABLE_FILTERS.SHOW_ALL}>All</FilterButton>
            <FilterButton filter={AVAILABLE_FILTERS.SHOW_ACTIVE}>Active</FilterButton>
            <FilterButton filter={AVAILABLE_FILTERS.SHOW_COMPLETE}>Completed</FilterButton>
        </footer>
    )
}

export default Footer