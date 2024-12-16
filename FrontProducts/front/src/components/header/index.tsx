import { useContext } from 'react';
import logo from '../../assets/logo.png';
import { Container } from '../container';
import { FaRegCircleUser } from "react-icons/fa6";
import { MdLogout } from "react-icons/md";

import { Link } from 'react-router-dom';
import { LoginContext } from '@/contexts/loginContext';



export function Header() {

    const { isLogged, setIsLogged } = useContext(LoginContext);



    function handleLogout() {
        setIsLogged(false);
        localStorage.removeItem('egomarket-token');


    };



    return (

        <header className="bg-white w-screen border">
            <Container>
                <nav className='w-full flex items-center justify-between'>
                    <Link to="/">   <img src={logo} alt="Logo da loja" className='w-20' /></Link>

                    {isLogged ? (<div className='flex items-center justify-center gap-1'>
                        <span className='flex items-center justify-center gap-1 mr-3'>
                           <button className='flex items-center justify-center' onClick={handleLogout}> <MdLogout className='text-2xl' /> Logout</button>
                        </span>
                        <Link to="/registrar-produto">
                            Cadastrar Produto
                        </Link>
                    </div>)
                        : (<div className='flex items-center justify-center gap-1'><Link to="/login" className='flex items-center justify-center gap-1'><FaRegCircleUser className='text-2xl' /> Login</Link></div>)}
                </nav>

            </Container>
        </header>
    )
}