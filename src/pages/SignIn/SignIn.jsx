import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles.module.scss';
import { AuthContext } from '../../contexts/auth';
import Logo from '../../assets/logo.png';

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { signIn, loadingAuth } = useContext(AuthContext);

  function handleSubmit(e) {
    e.preventDefault();
    if( email !== '' && password !== '')
      signIn(email, password)
  }

    return (
      <div className={styles.containerCenter}>
        <div className={styles.loginContainer}>

          <div className={styles.logoArea}>
            <img src={Logo} alt="Sistema logo" />
          </div>

          <form onSubmit={handleSubmit}>
            <h1>Entrar</h1>
            <input type="email" placeholder="email@email.com" value={email} onChange={(e) => setEmail(e.target.value) } required />
            <input type="password" placeholder="*******" value={password} onChange={(e) => setPassword(e.target.value) } required />
            <button type="submit">{loadingAuth ? 'Carregando...' : 'Acessar'}</button>
          </form>

        <Link to="/register">Criar uma conta</Link>
        </div>
      </div>
    );
  }
  
  export default SignIn;
  