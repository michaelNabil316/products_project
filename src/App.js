import './App.css';
import Navbar from './components/navebar/navbar.js';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { counterContext } from './context/counterContext';
import { useState } from 'react';

import Home from './pages/home/home.js';
import Books from './pages/books/books.js';
import Login from './pages/login/login.js';
import Products from './pages/products/products.js';
import ProdDetails from './pages/prodDetails/prodDetails.js';
import ToDo from './pages/toDo/todo.js';
import Error from './pages/error/error.js';
import Counter from './pages/counter/counter.js'
import Favourite from './pages/favorites/favorites.js';


function App() {
  const [noContext, setNoContext] = useState(0);
  return (
    <div className="App">
      <counterContext.Provider value={{ noContext, setNoContext }}>
        <Router>
          <Navbar />
          <div>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/books" exact component={Books} />
              <Route path="/login" exact component={Login} />
              <Route path="/products" exact component={Products} />
              <Route path="/ProdDetails/:id" exact component={ProdDetails} />
              <Route path="/toDo" exact component={ToDo} />
              <Route path="/counter" exact component={Counter} />
              <Route path="/favorites" exact component={Favourite} />
              <Route path="*" component={Error} />
            </Switch>
          </div>
        </Router>
      </counterContext.Provider>
    </div>
  );
}

export default App;
