import { useNavigate } from 'react-router-dom';
import Button from '../Action/Button'
import Logo from './Logo'
import NavHeader from './NavHeader'

function Header() {
    const navigate = useNavigate();

    return (
        <header className='flex justify-between items-center pr-5 pl-5 pt-3 pb-3 max-md:pb-24'>
            <Logo />
            <NavHeader />
            <div className='max-md:hidden'>
                <Button type='secondary' onClick={() => {
                    console.log(" Get Started")
                    navigate('/contact-us')
                }}>Get Started</Button>
                <Button onClick={() => {
                    window.location.href = 'https://app.vibesign.com'
                }}>Login</Button>

            </div>
        </header>
    )
}

export default Header