import './App.css';
import { Routes ,Route } from 'react-router-dom';
import Landing from './components/Landing/Landing';
import Explore from './components/Explore/Explore';
import Breeds from './components/Breeds/Breeds';
import BreedDetail from './components/BreedDetail/BreedDetail';
import CreateDog from './components/CreateDog/CreateDog';
import About from './components/About/About';
import Page404 from './components/Page404/Page404';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Landing/>}/>
        <Route exact path='/explore' element={<Explore/>}/>
        <Route exact path='/breeds' element={<Breeds/>}/>
        <Route
          path="/breeds/:id" element={<BreedDetail/>} />
        <Route
          path="/breeds/create" element={<CreateDog/>}/>
        <Route
          path="/about" element={<About/>}/>
        <Route path="*" element={<Page404/>}/>
      </Routes>
    </div>
  );
}

export default App;
