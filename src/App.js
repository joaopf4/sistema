import { BrowserRouter } from 'react-router-dom';
import AuthProvider from './contexts/auth';
import Routes from './routes';
import './global.scss';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
