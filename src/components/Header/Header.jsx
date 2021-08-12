import { useContext } from 'react';
import './header.scss';
import { AuthContext } from '../../contexts/auth';
import avatar from '../../assets/avatar.png';
import { Link } from 'react-router-dom';
import { FiHome, FiUser, FiSettings } from "react-icons/fi";

export default function Header() {
    const { user } = useContext(AuthContext);
    return(
        <div className="sidebar">
            <div>
                <img alt="Foto avatar" src={user.avatarUrl === null ? avatar : user.avatarUrl} />
            </div>
            <Link to="/dashboard">
            <FiHome className="icons" color="#FFF" />
                Chamados
            </Link>
            <Link to="/customers">
            <FiUser className="icons" color="#FFF" />
                Clientes
            </Link>
            <Link to="/profile">
            <FiSettings className="icons" color="#FFF" />
                Configurações
            </Link>
        </div>
    )
}