import { FaEnvelope, FaPhone } from "react-icons/fa"
import CenterContainer from "../Layout/CenterContainer"
import { FaLocationPin } from "react-icons/fa6"
import ContactInput from "../components/ContactInput"
import Button from "../components/Action/Button"

function Contact() {
    return (
        <CenterContainer>
            <div className="flex flex-row items-center gap-9 w-full bg-[#00000040] rounded-6xl p-3 max-w-[1300px]">
                <div className="bg-Background p-12 rounded-6xl w-[55%]">
                    <h4>Contact Information</h4>
                    <p className="pb-16">Say something to start a live chat!</p>
                    <div>
                        <div className="flex flex-row gap-3"><FaPhone /> +1012 3456 789</div>
                        <div className="flex flex-row gap-3"><FaEnvelope /> demo@gmail.com</div>
                        <div className="flex flex-row gap-3"><FaLocationPin /> 132 Dartmouth Street Boston, Massachusetts 02156 United States</div>
                    </div>
                </div>
                <div className="flex w-full flex-col">
                    <div className="flex flex-col w-full">
                        <div className=" flex flex-row justify-between">
                            <div className="w-[40%]">
                                <ContactInput lable="First Name" />
                            </div>
                            <div className="w-[40%]">
                                <ContactInput lable="Last Name" />
                            </div>
                        </div>
                        <div className=" flex flex-row justify-between">
                            <div className="w-[40%]">
                                <ContactInput lable="Email" />
                            </div>
                            <div className="w-[40%]">
                                <ContactInput lable="Phone Number" />
                            </div>
                        </div>
                        <div className="w-full flex flex-row justify-between">
                            <ContactInput lable="Message" />
                        </div>
                    </div>
                <Button className="w-[98%] max-w-[100%]">Send Message</Button>
                </div>

            </div>
        </CenterContainer>
    )
}

export default Contact