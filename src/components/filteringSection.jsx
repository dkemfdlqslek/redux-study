import React from 'react';
import {FilteringBtn} from 'components/FilteringBtn';
import {todoFilters} from 'actions/types_todo';

export const FilteringSection = () => (
    <section>
        <FilteringBtn filter={todoFilters.SHOW_ALL}>ALL</FilteringBtn>
        <FilteringBtn filter={todoFilters.SHOW_ACTIVE}>ACTIVE</FilteringBtn>
        <FilteringBtn filter={todoFilters.SHOW_FINISHED}>FINISHED</FilteringBtn>
    </section>
)