import {Fragment, useEffect} from 'react'
import { Provider } from 'react-redux';
import Quiz from './components/quiz/Quiz';
import 'bootstrap/dist/css/bootstrap.min.css'
//Redux
import store from './store'
import { getAllQuizes } from './actions/quiz';
function App() {
 
  return (
    <Provider store={store}>
      <Fragment>
      <Quiz/>
      </Fragment>
      </Provider>
  );
}

export default App;
