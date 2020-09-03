import React from 'react';
import CounterApp from 'components/counter';
import 'styles/_CounterPage.scss';

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
                    <p>redux</p>                   
                </article>
            </section>
        </React.Fragment>
    );
}

export default Counter;