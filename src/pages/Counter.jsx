import React from 'react';
import CounterApp from 'components/counter';
import 'styles/_CounterPage.scss';
import {
    redux_pattern_sm,
    redux_pattern_md,
    redux_pattern_lg
} from 'assets/images';

const ReduxPatternImg = () => {
   const imageSrcSet = `${redux_pattern_sm} 300w,
                        ${redux_pattern_md} 500w,
                        ${redux_pattern_lg} 761w`;
    return(
        <img 
        srcSet={imageSrcSet}
        sizes='(max-width: 767px) 300px,
                (max-width: 1023px) 500px,
                761px'
        src={redux_pattern_lg}
        alt="redux pattern"/>
    )
}

const Counter = () => {

    


    return(
        <React.Fragment>
            <section className="section-header">
                <h2 className="greetings">This is Simple Counter App</h2>
            </section>
            <section className="boxWrapper">
                <article className="explainBox">
                    <p>now, Let's look out simple EXAMPLE using redux</p>
                    <CounterApp/>
                    <p>As you see, the app above this paragraph is 'counter app'.</p>
                    <p>
                        you can click the plus(+) or minus(-) button to raise or down number between buttons. 
                        also, you can adjust raise or down amount to modify the number in input text-box.
                        and to click reset button, your counter will reset to zero.
                    </p>
                    <p>
                        In redux-system, every request changing state is called "action".
                        "action" means literally "interaction" between user and application.
                        -click the button, go to another page, typing input text-box, something else.
                    </p>
                    <ReduxPatternImg />              
                </article>
            </section>
            
        </React.Fragment>
    );
}

export default Counter;