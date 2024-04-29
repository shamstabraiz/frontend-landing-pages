import { FaTelegram, FaTiktok, FaTwitter, FaYoutube } from "react-icons/fa"
import Button from "../Action/Button"
import Logo from "../Header/Logo"
import NavLinks from "./NavLinks"

function Footer() {
    return (
        <div className="flex p-5 bg-[#031624] flex-col justify-between items-center">
            <div className="flex-wrap max-w-[1300px] w-[100%] gap-[46px] flex justify-center items-center flex-row py-[50px]">
                <div className="max-w-[30%] max-md:max-w-[100%] flex gap-4 flex-col"><Logo /><p>Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur.</p></div>
                <div><NavLinks
                    heading="Useful Links"
                    links={[
                        { url: "/", text: "Lorem Ipsum" },
                        { url: "/", text: "Lorem Ipsum" },
                        { url: "/", text: "Lorem Ipsum" },
                        { url: "/", text: "Lorem Ipsum" },

                    ]}
                /></div>
                <div><NavLinks
                    heading="Useful Links"
                    links={[
                        { url: "/", text: "Lorem Ipsum" },
                        { url: "/", text: "Lorem Ipsum" },
                        { url: "/", text: "Lorem Ipsum" },
                        { url: "/", text: "Lorem Ipsum" },

                    ]}
                /></div>
                <div><NavLinks
                    heading="Useful Links"
                    links={[
                        { url: "/", text: "Lorem Ipsum" },
                        { url: "/", text: "Lorem Ipsum" },
                        { url: "/", text: "Lorem Ipsum" },
                        { url: "/", text: "Lorem Ipsum" },

                    ]}
                /></div>
                <div>
                    <h3 className="text-xl mb-[16px]">
                        Have a great project?
                    </h3>
                    <div className="flex flex-col items-center gap-[12px]">
                        <Button type="secondary">
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
                    <p className="text-center text-[#C1C5C4]">© 2022 EZ Displays.</p>
                    <p className="text-center text-[#C1C5C4]">Terms of Service  |  Privacy Policy  |  Cookies Policy</p>
                </div>
            </div>
        </div>

    )
}

export default Footer