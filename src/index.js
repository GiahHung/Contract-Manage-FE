import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store, {persistor} from './store/store'; 
import App from './containers/App';
import 'react-toastify/dist/ReactToastify.css';
import './styles/Styles.scss'
import "./index.css";


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <Provider store={store}>
      {/* <React.StrictMode> */}
      <App persistor={persistor} />
      {/* </React.StrictMode> */}
    </Provider>
);
