import { useState } from 'react';
import logo from '../../assets/logo.png';
import { Container } from '../container';
import { FaRegCircleUser } from "react-icons/fa6";
import { MdLogout } from "react-icons/md";

import { Link } from 'react-router-dom';



export function Header() {


    const [isLogged, setIsLogged] = useState(false);



    return (

        <header className="bg-white w-screen border">
            <Container>
                <nav className='w-full flex items-center justify-between'>
                  <Link to="/">   <img src={logo} alt="Logo da loja" className='w-20' /></Link>

                    {isLogged ? (<div className='flex items-center justify-center gap-1'><MdLogout className='text-2xl' /> Logout</div>) : (<div className='flex items-center justify-center gap-1'><Link to="/login"><FaRegCircleUser className='text-2xl' /> Login</Link></div>)}
                </nav>

            </Container>
        </header>
    )
}