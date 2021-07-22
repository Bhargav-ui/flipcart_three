// import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
import Home2 from './components/Home/HomeTwo';
import Signin from './components/sign-in/sign-in';
import { BrowserRouter, Switch, Route } from 'react-router-dom';


function App () {
  return (
    <>
      <Home />
      <Home2 />
      <Signin />
      {/* <BrowserRouter>
        <Switch>
          <Route exact path='/home' component={Home} />
          <Route exact path='/home2' component={Home2} />
          <Route exact path='/input' component={Signin} />
        </Switch>
      </BrowserRouter> */}

    </>
  );
}

export default App;
