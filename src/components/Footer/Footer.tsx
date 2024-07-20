import { FaTelegram, FaTiktok, FaTwitter, FaYoutube } from "react-icons/fa"
import Button from "../Action/Button"
import Logo from "../Header/Logo"
import NavLinks from "./NavLinks"
import { useNavigate } from "react-router-dom";

function Footer() {
    const navigate = useNavigate();

    return (
        <div className="flex p-5 bg-[#031624] flex-col justify-between items-center">
            <div className="flex-wrap max-w-[1300px] w-[100%] gap-[46px] flex justify-between items-center flex-row py-[50px]">
                <div className="max-w-[30%] max-md:max-w-[100%] flex gap-4 flex-col"><Logo /><p>Vibe Sign is a highly effective digital signage system designed for optimal performance and user experience.</p></div>
                <div><NavLinks
                    heading="Useful Links"
                    links={[
                        { url: "/", text: "Home" },
                        { url: "/pricing", text: "Pricing" },
                        { url: "/partner", text: "Become Partner" },
                        { url: "/contact-us", text: "Contact Us" },

                    ]}
                /></div>
                <div>
                    <h3 className="text-xl mb-[16px]">
                        Have a great project?
                    </h3>
                    <div className="flex flex-col items-center gap-[12px] cursor-pointer">
                        <Button type="secondary" onClick={() => {
                            navigate('/contact-us')
                        }}>
                            Get in Touch
                        </Button>
                        <div className="flex gap-[22px] text-2xl cursor-pointer">
                            <FaTelegram />
                            <FaTwitter />
                            <FaYoutube />
                            <FaTiktok />
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col w-full gap-6 mb-6 items-center justify-center ">
                <div className="border-[0.5px] border-white opacity-10 w-full max-w-[1300px]">
                </div>
                <div className="max-w-[1300px] w-full flex justify-between items-center ">
                    <p className="text-center text-[#C1C5C4]">© 2022 Vibe Sign.</p>
                    <p className="text-center text-[#C1C5C4]">Terms of Service  |  Privacy Policy  |  Cookies Policy</p>
                </div>
            </div>
        </div>

    )
}

export default Footer