
import { Switch, Route } from "react-router-dom";
import '../css/appcss.css';
import UsernameInput from '../components/UsernameInput';
import ShowProfile from '../components/ShowProfile';

const App = () => {

  return (

    <main className="min-h-screen place-items-center bg-gray-900 w-screen flex justify-center items-center relative">

      <div className="bg-gray-100 bg-gradient-to-br from-gray-100 to-gray-600 w-32 h-32 absolute z-0 inset-7 rounded-full"></div>

      <Switch>

        {/* routing to UserNameInput */}
        <Route exact path="/">
          <UsernameInput />
        </Route>

        {/* routing to ShowProfile */}
        <Route path="/users/:paramsUsername">
          <ShowProfile />
        </Route>

        <Route component={() => (<div>404 Not found </div>)} />

      </Switch>

    </main>
  )
}

export default App;
