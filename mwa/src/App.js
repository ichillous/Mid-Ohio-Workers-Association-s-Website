import Switch from 'react-bootstrap/esm/Switch';
import { Route } from 'react-router-dom';
import Navv from "./components/Nav/Navv"
import './App.css';
import Home from './screens/Home/Home'


function App() {
  return (
    <div className="App">
     <Switch>
       <Route exact path="/">
        <Home/>
       </Route>
     </Switch>
         <Navv/>
       
    </div>
  );
}

export default App;
