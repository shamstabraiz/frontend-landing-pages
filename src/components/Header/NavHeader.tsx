import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from 'react-icons/fa';
import Button from '../Action/Button';

function NavHeader() {
    const navigate = useNavigate();
    const pathname = window.location.pathname;
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navItems = [
        { path: '/', name: 'Home' },
        { path: '/pricing', name: 'Pricing' },
        { path: '/partner', name: 'Become Partner' },
        { path: '/contact-us', name: 'Contact Us' },
    ];

    return (
        <>
                <div className='md:hidden'>
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        {isMenuOpen ? <FaTimes /> : <FaBars />}
                    </button>
                    {isMenuOpen && (
                        <div className='flex flex-col gap-4 absolute right-0 w-full p-8 bg-Black-B900'>
                            {navItems.map((item) => (
                                <>
                                    <div
                                        key={item.path}
                                        className={`${pathname === item.path ? "text-Primary-P100" : "text-white"} transition font-medium delay-100 text-title-xsm cursor-pointer  hover:text-Primary-P100`}
                                        onClick={() => {
                                            navigate(item.path)
                                            setIsMenuOpen(false);
                                        }}
                                    >
                                        {item.name}
                                    </div>
                                </>

                            ))}
                            <Button  onClick={() => {
                                navigate('/contact-us')
                            }}>Get Started</Button>
                            <Button onClick={() => {
                                window.location.href = 'https://app.vibesign.com'
                            }}>Login</Button>
                        </div>
                    )}
                </div>
                <ul className='flex flex-row gap-4 max-md:hidden'>
                    {navItems.map((item) => (
                        <li
                            key={item.path}
                            className={`${pathname === item.path ? "text-Primary-P100" : "text-white"} transition font-medium delay-100 text-title-xsm cursor-pointer  hover:text-Primary-P100`}
                            onClick={() => navigate(item.path)}
                        >
                            {item.name}
                        </li>
                    ))}
                </ul>
        </>
    );
}

export default NavHeader;