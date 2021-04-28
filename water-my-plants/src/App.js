import './App.css';
import { Route, Switch } from 'react-router-dom';
import Styled from './styles/index';
import Home from './Components/home';
import PlantGallery from './Components/plantGallery';
import PlantForm from './Components/plantForm'

function App() {

  return (
    <Styled>
      <div className="App">
        
        <div className="routes">
          <Switch> 
            <Route exact path='/'>
              <Home/>
            </Route>  
            <Route path='/plants'>
              <PlantGallery />
            </Route>
            <Route path='/plantForm'>
              <PlantForm/>
            </Route> 
          </Switch>
        </div>
      </div>
    </Styled>
  );
}

export default App;