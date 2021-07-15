import { Header, Footer } from './components'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import ProductView from './views/productView';


import './App.css';
import HomeView from './views/homeView';

function App() {
  return (
    <Router>
      <Header />
      <main className='container py-6'>
        <Route path='/product/:id' component={ ProductView }/>
        <Route path='/' component={ HomeView } exact/>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
