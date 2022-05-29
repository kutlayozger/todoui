import { Fragment } from 'react';
import { useSelector } from 'react-redux';

import TodoList from './pages/TodoList';
import Login from './pages/Login';


function App() {
  const isAuth = useSelector(state => state.auth.isAuthenticated);

  return (
    <Fragment>
      {!isAuth && <Login />}
      {isAuth && <TodoList/>}
    </Fragment>
  );
}

export default App;
