import { Header, Footer } from './components'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import ProductView from './views/productView';


import './App.css';
import HomeView from './views/homeView';
import CartView from './views/cartView';
import Login from './views/login';

function App() {
  return (
    <Router>
      <Header />
      <main className='container py-6'>
        <Route path='/login' component={Login}/>
        <Route path='/product/:id' component={ ProductView }/>
        <Route path='/cart/:id?' component={ CartView }/>
        <Route path='/' component={ HomeView } exact/>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
