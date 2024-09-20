import { Provider } from 'react-redux';
import './App.css';
import appStore from './utils/appStore';
import MainComponents from './components/MainComponents';

function App() {
  return (
    <div className="App">
      <Provider store={appStore}>
        <MainComponents />
      </Provider>

    </div>
  );
}

export default App;
