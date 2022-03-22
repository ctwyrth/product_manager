import { Routes, Route } from 'react-router-dom';
import Main from './views/Main';
import Details from './views/Details';
import Update from './views/Update';
import Navigation from './components/Navigation';

const Home = () => {
  return( <div className="container text-center text-warning mt-4"><h1 className="display-6">welcome to the site</h1></div> )
}

const BadLink = () => {
  return( <div className="container text-center text-danger mt-4"><h1 className="display-6">the ROUTE you attempted to travel was blocked by an unknown celestial event</h1></div> )
}

function App() {
  return (
    <div className="container min-vh-100">
      <Routes>
        <Route path='/' element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path='product/new' element={<Main />} />
          <Route path='product/:id' element={<Details />} />
          <Route path='product/edit/:id' element={<Update />} />
          <Route path='*' element={<BadLink />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
