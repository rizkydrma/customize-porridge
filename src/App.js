import { useState, useEffect } from 'react';
import Header from './components/header/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Customize from './components/customize/Customize';
import Checkout from './components/checkout/Checkout';

function App() {
  const [toppings, setToppings] = useState({
    suirayam: false,
    seledri: false,
    kacang: false,
    odading: false,
    telor: false,
    atiampela: false,
    kerupuk: false,
  });

  useEffect(() => {
    const data = localStorage.getItem('toppings');
    if (data) setToppings(JSON.parse(data));
  }, []);

  return (
    <>
      <Header />
      <Router>
        <Switch>
          <Route exact path="/">
            <Customize toppings={toppings} setToppings={setToppings} />
          </Route>
          <Route exact path="/checkout">
            <Checkout toppings={toppings} />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
