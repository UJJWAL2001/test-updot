import { HashRouter, Route, Switch } from 'react-router-dom';
import Home from './Components/Home';
import Faq from './Components/Faq';
import Carousel from './Components/Carousel';

const App = () => {
  return (
    <>
      <HashRouter basename="/">
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/faq' component={Faq} />
          <Route path='/carousel' component={Carousel} />
        </Switch>
      </HashRouter>
    </>
  );
}

export default App;
