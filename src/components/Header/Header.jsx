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
            <FiHome color="#FFF" size={24} />
                Chamados
            </Link>
            <Link to="/dashboard">
            <FiUser color="#FFF" size={24} />
                Clientes
            </Link>
            <Link to="/dashboard">
            <FiSettings color="#FFF" size={24} />
                Configurações
            </Link>
        </div>
    )
}