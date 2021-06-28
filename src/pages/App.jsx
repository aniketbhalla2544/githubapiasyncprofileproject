
import { Switch, Route } from "react-router-dom";
import '../css/appcss.css';
import UsernameInput from '../components/UsernameInput';
import ShowProfile from '../components/ShowProfile';

const App = () => {
  return (

    <main className="min-h-screen grid place-items-center bg-blue-400">

      <Switch>

        <Route exact path="/">
          <UsernameInput />
        </Route>

        <Route path="/users/:paramsUsername">
          <ShowProfile />
        </Route>

      </Switch>

    </main>
  )
}

export default App;