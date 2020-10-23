import React, {useEffect} from 'react';
import {BrowserRouter, Route, Switch, useLocation} from 'react-router-dom';
import {Provider} from 'react-redux';
import {Home, Counter, Todo} from 'pages/index';
import {NavButton} from 'components/navBtn';
import 'styles/_App.scss';
import 'normalize.css';

const RestoreScroll = () =>{
  const {pathname} = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  },[pathname]);

  return null;
}

const App = ({store}) => {
  return(
    <Provider store={store}>
      <BrowserRouter>
        <RestoreScroll/>
        <header>
          <nav>
            <ul>
              <li><NavButton link="/" name="HOME" isExactRoute={true}/></li>
              <li><NavButton link="/Counter" name="COUNTER"/></li>
              <li><NavButton link="/Todo" name="TODO"/></li>
            </ul>
          </nav>
        </header>
        <main>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/Counter" component={Counter}/>
            <Route path="/Todo" component={Todo}/>
          </Switch>
        </main>
      </BrowserRouter>
    </Provider>
  );  
}


export default App;
