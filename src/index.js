
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { SayacProvider } from './contextSample/SayacContext';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <SayacProvider>
      <App></App>
    </SayacProvider>
  </BrowserRouter>

);



