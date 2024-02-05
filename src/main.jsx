import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './Pages/App/App.jsx'
import './index.css'
import { AnimeProvider } from '../src/Components/Context/index.jsx';
import ReactGA from 'react-ga';

ReactGA.initialize('G-3P9X1BTM58');


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AnimeProvider>
      <App />
    </AnimeProvider>
  </React.StrictMode>,
)
