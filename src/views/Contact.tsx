import { FaEnvelope, FaPhone } from "react-icons/fa"
import CenterContainer from "../Layout/CenterContainer"
import { FaLocationPin } from "react-icons/fa6"
import ContactInput from "../components/ContactInput"
import Button from "../components/Action/Button"
import { useState } from "react"
import { toast } from "react-toastify"
import axios from "axios"

function Contact() {

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: ""
    })

    const onInputChange = (e: any) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }
    const sendMail = async () => {
        if (!formData.email || !formData.firstName || !formData.lastName || !formData.phone || !formData.message) {
            toast.error("Please fill all fields")
            return
        }
        const ContactData = { ...formData }

        setFormData({
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            message: ""
        });

        try {
            console.log(ContactData);
            await axios.post("https://europe-west1-vibesign-e3c2a.cloudfunctions.net/sendEmailContactForm", ContactData)
        } catch (error) {
            toast.error("An error occured")
        }
    }


    return (
        <CenterContainer>
            <div className="flex flex-row items-center gap-9 w-full bg-[#00000040] rounded-6xl p-3 max-w-[1300px] flex-wrap">
                <div className="bg-Background p-12 rounded-6xl w-[55%]  max-sm:w-full">
                    <h4>Contact Information</h4>
                    <p className="pb-16">Say something to start a live chat!</p>
                    <div>
                        <div className="flex flex-row gap-3"><FaPhone /> +1(251)753-2908</div>
                        <div className="flex flex-row gap-3"><FaEnvelope />cwhite@complete3tech.com</div>
                        <div className="flex flex-row gap-3"><FaLocationPin /> block 3, texsas USA</div>
                    </div>
                </div>
                <div className="flex  flex-col w-[40%]  max-sm:w-full">
                    <div className="flex flex-col w-full">
                        <div className=" flex flex-row justify-between flex-wrap">
                            <div className="w-[40%] max-sm:w-full">
                                <ContactInput lable="First Name" value={formData["firstName"]} onChange={onInputChange} name="firstName" />
                            </div>
                            <div className="w-[40%] max-sm:w-full">
                                <ContactInput lable="Last Name" value={formData["lastName"]} onChange={onInputChange} name="lastName" />
                            </div>
                        </div>
                        <div className=" flex flex-row justify-between flex-wrap">
                            <div className="w-[40%] max-sm:w-full">
                                <ContactInput lable="Email" value={formData["email"]} onChange={onInputChange} name="email" />
                            </div>
                            <div className="w-[40%] max-sm:w-full">
                                <ContactInput lable="Phone Number" value={formData["phone"]} onChange={onInputChange} name="phone" />
                            </div>
                        </div>
                        <div className="w-full flex flex-row justify-between flex-wrap">
                            <ContactInput lable="Message" onChange={onInputChange} value={formData["message"]} name="message" />
                        </div>
                    </div>
                    <Button className="w-[98%] max-w-[100%]" onClick={sendMail}>Send Message</Button>
                </div>

            </div>
        </CenterContainer>
    )
}

export default Contact