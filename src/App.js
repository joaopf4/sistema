import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import './global.scss';

function App() {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
}

export default App;
