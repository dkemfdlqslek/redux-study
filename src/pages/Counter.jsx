import React from 'react';
import CounterApp from 'components/counter';
import styled from 'styled-components';
import {SectionHeader, SectionTitle, BoxWrapper} from 'pages/Home';
import 'styles/_CounterPage.scss';
import {
    redux_pattern_sm,
    redux_pattern_md,
    redux_pattern_lg
} from 'assets/images';

const ReduxPatternImg = styled.img`
    position: relative;
    top: 0;

    transition-property: top, box-shadow;
    transition-duration: 0.3s;
    transition-timing-function: ease-out;

    box-shadow: 0px 0px 0px 0px #ffffff;
    &:hover, &:focus{
        transition-property: top, box-shadow;
        transition-duration: 0.3s;
        transition-timing-function: ease-out;

        top:-0.5rem;
        box-shadow: 0px 8px 7px 0px #aaaaaa;

    }
`



const Counter = () => {

    const imageSrcSet = `${redux_pattern_sm} 300w,
                        ${redux_pattern_md} 500w,
                        ${redux_pattern_lg} 761w`;

    const explain_1 = `you can click the plus(+) or minus(-) button to raise or down number between buttons.\nalso, you can adjust raise or down amount to modify the number in input text-box.\nand to click reset button, your counter will reset to zero.`;
    const explain_2 = `In redux-system, you cannot modify state directly.\nInstead, there are indirect request to change state called "action".\naction means literally "interaction" between user and application.-click the button, go to another page, typing input text-box, something else.`;
    const explain_3 = `when "the action" occurs, application calls "dispatch function".\nthis function sends action object to "reducer".\nreducer is the collection of logics that resolve action.\nreducer receive the previous state and action object.\nand reducer distinguish sort of action and make new state from previous state.`;
    const explain_4 = `and then, store-involving every state and reducer is alert to component "state is changed".\nthis step called "subscribe".\nfinally, components are rendered according to changes of state.\nthis is all about the flow of redux-system.`;

    return(
        <React.Fragment>
            <SectionHeader>
                <SectionTitle>This is Simple Counter App</SectionTitle>
            </SectionHeader>
            <BoxWrapper>
                <article className="explainBox">
                    <p>now, Let's look out simple EXAMPLE using redux.</p>
                    <CounterApp/>
                    <p>As you see, the app above this paragraph is 'counter app'.</p>
                    <p>
                        {explain_1}
                    </p>
                    <ReduxPatternImg  srcSet={imageSrcSet}
                        sizes='(max-width: 767px) 65vw,
                                (max-width: 1023px) 500px,
                                761px'
                        src={redux_pattern_lg}
                        alt="redux pattern" />
                    <p>
                        {explain_2}
                    </p>
                    <p>
                        {explain_3}
                    </p>
                    <p>
                        {explain_4}
                    </p>
                </article>
            </BoxWrapper>           
        </React.Fragment>
    );
}

export default Counter;