import './App.css';
import Test from "./Test"
import Test2 from "./Test2"
import Test3 from "./Test3"

import { BrowserRouter, Switch, Route } from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/home" component={Test} />
        <Route path="/test2" component={Test2} />
        <Route path="/test3" component={Test3} />


      </Switch>
    </BrowserRouter>
  );
}

export default App;
