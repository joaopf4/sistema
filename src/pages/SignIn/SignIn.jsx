import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.scss';

import Logo from '../../assets/logo.png';

function SignIn() {
  const [email, setEmail] = useState('');
  const [passoword, setPassoword] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    alert('cliclo')
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
            <input type="password" placeholder="*******" value={passoword} onChange={(e) => setPassoword(e.target.value) } required />
            <button type="submit">Acessar</button>
          </form>

        <Link to="/register">Criar uma conta</Link>
        </div>
      </div>
    );
  }
  
  export default SignIn;
  