
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { FavoritesProvider } from './contextSample/favoritesContext';
import { SayacProvider } from './contextSample/SayacContext';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <FavoritesProvider>
      <SayacProvider>
        <App></App>
      </SayacProvider>
    </FavoritesProvider>
  </BrowserRouter>

);



