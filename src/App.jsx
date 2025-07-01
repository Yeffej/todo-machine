// Components
import { Switch, Route, Router } from 'wouter';
import { TodoProvider } from "./Components/TodoContext";

import AppPage from "./Pages/App";
import SimplePage from './Pages/Simple';
import { AppProvider } from './Components/AppContext';
import TaskEditPage from './Pages/App/TaskEdit';
import Home from './Pages/Home';
import { BASE } from './constants';

const SimplePageWithProvider = () => (
  <TodoProvider>
    <SimplePage />
  </TodoProvider>
);
const AppPageWithProvider = () => (
  <AppProvider>
    <AppPage />
  </AppProvider>
);
const TaskEditPageWithProvider = ({ params }) => (
  <AppProvider>
    <TaskEditPage params={params} />
  </AppProvider>
);

function App() {
  return (
    <Switch>
      <Router base={BASE}>
        <Route path="/" component={Home} />
        <Route path="/app" component={AppPageWithProvider} />
        <Route path="/simple" component={SimplePageWithProvider} />
        <Route path="/task/:id" component={TaskEditPageWithProvider} />
      </Router>
      <Route> <div className="not-found">Page not found.</div> </Route>
    </Switch>
  );
}

export default App;
