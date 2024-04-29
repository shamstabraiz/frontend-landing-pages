import { useNavigate } from "react-router-dom";

function NavHeader() {
    const navigate = useNavigate();
    const pathname = window.location.pathname;

    return (
        <ul className='flex flex-row gap-4 '>
            <li className={`${pathname === "/" ? "text-Primary-P100" : ""} transition font-medium delay-100 text-title-xsm cursor-pointer text-white hover:text-Primary-P100`}
                onClick={() => {
                    navigate('/')
                }}
            >Home</li>
            <li className={`${pathname === "/pricing" ? "text-Primary-P100" : ""} transition font-medium delay-100 text-title-xsm cursor-pointer text-white hover:text-Primary-P100`}
                onClick={() => {
                    navigate('/pricing')
                }}
            >Pricing</li>
            <li className={`${pathname === "/contact-us" ? "text-Primary-P100" : ""} transition font-medium delay-100 text-title-xsm cursor-pointer text-white hover:text-Primary-P100`}

                onClick={() => {
                    navigate('/contact-us')
                }}
            >Contact Us</li>
        </ul>
    )
}

export default NavHeader