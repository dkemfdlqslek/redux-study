import React from 'react';
import FilteringBtn from 'components/containers/FilterPointContainer';
import {todoFilters} from 'actions/types_todo';
import styled from 'styled-components'


const FilterSectionStyle = styled.section`
   align-items: center;
   text-align: center;
`

export const FilteringSection = () => (
    <FilterSectionStyle>
        
        <FilteringBtn filter={todoFilters.SHOW_ALL}>ALL</FilteringBtn>
        |
        <FilteringBtn filter={todoFilters.SHOW_ACTIVE}>ACTIVE</FilteringBtn>
        |
        <FilteringBtn filter={todoFilters.SHOW_FINISHED}>FINISHED</FilteringBtn>
        
    </FilterSectionStyle>
)