import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/auth';
import styles from '../styles.module.scss';

import Logo from '../../assets/logo.png';

function SignUp() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { signUp, loadingAuth } = useContext(AuthContext);

  function handleSubmit(e) {
    e.preventDefault();
    
    if(nome !== '' && email !=='' && password !=='') {
      signUp(email, password, nome)
    }
  }

    return (
      <div className={styles.containerCenter}>
        <div className={styles.loginContainer}>

          <div className={styles.logoArea}>
            <img src={Logo} alt="Sistema logo" />
          </div>

          <form onSubmit={handleSubmit}>
            <h1>Cadastrar uma conta</h1>
            <input type="text" placeholder="Seu nome" value={nome} onChange={(e) => setNome(e.target.value) } required />
            <input type="email" placeholder="email@email.com" value={email} onChange={(e) => setEmail(e.target.value) } required />
            <input type="password" placeholder="*******" value={password} onChange={(e) => setPassword(e.target.value) } required />
            <button type="submit">{loadingAuth ? 'Carregando...' : 'Cadastrar'}</button>
          </form>

        <Link to="/">Já tem uma conta? Entre</Link>
        </div>
      </div>
    );
  }
  
  export default SignUp;
  