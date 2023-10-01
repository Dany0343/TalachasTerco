import { useState } from 'react';
import Logo from '../assets/LogoHeader.svg';

export const Header = () => {
  return (
    <header className='w-auto bg-white shadow-xl'>
        {/* Mobile layout */}
        <ul className='flex flex-col items-center justify-center gap-y-2 sm:hidden'>
            <li><a href="#" className='font-extralight'>MANIFIESTO</a></li>
            <li><a href="#" className='font-extralight'>PROYECTOS</a></li>
            <li><img src={Logo} alt="Logo de la empresa" /></li>
            <li><a href="#" className='font-extralight'>NOSOTROS</a></li>
            <li><a href="#" className='font-extralight'>COLABORADORES</a></li>
        </ul>

        {/* Tablet and Desktop layout */}
        <ul className='hidden sm:flex flex-row items-center justify-center h-[80px] sm:gap-x-8 md:gap-x-[100px] lg:gap-x-[178px]'>
            <li><a href="#" className='font-extralight'>MANIFIESTO</a></li>
            <li><a href="#" className='font-extralight'>PROYECTOS</a></li>
            <li><img src={Logo} alt="Logo de la empresa" /></li>
            <li><a href="#" className='font-extralight'>NOSOTROS</a></li>
            <li><a href="#" className='font-extralight'>COLABORADORES</a></li>
        </ul>
    </header>
  )
}

export default Header;
