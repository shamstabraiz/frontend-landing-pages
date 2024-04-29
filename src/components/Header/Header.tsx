import Button from '../Action/Button'
import Logo from './Logo'
import NavHeader from './NavHeader'

function Header() {
    return (
        <header className='flex justify-between items-center pr-5 pl-5 pt-3 pb-3'>
            <Logo />
            <NavHeader />
            <div>
                <Button type='secondary'>contact us</Button>
                <Button>contact us</Button>

            </div>
        </header>
    )
}

export default Header