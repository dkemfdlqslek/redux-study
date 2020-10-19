import React from 'react';
import {SectionHeader, SectionTitle, BoxWrapper} from 'pages/Home'
import {TodoInputForm} from 'components/todoInputForm';
import VisibleTodoList from 'components/containers/VisibleTodoList';
import {FilteringSection} from 'components/filteringSection';

const Todo = () => {
    return(
        <React.Fragment>
            <SectionHeader>
                <SectionTitle>Hello, TodoApp!</SectionTitle>
            </SectionHeader>
            <BoxWrapper>
                <TodoInputForm />
                <VisibleTodoList />
                <FilteringSection />    
            </BoxWrapper>
        </React.Fragment>
    );
};

export default Todo;

