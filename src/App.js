import './styles/main.scss'
import Login from './views/login/index'
import { BrowserRouter,Switch, Route} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact component={Login} path='/' ></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
