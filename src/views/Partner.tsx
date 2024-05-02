import CenterContainer from "../Layout/CenterContainer"
import ContactInput from "../components/ContactInput"
import Button from "../components/Action/Button"
import { useState } from "react"
import { toast } from "react-toastify"
import axios from "axios"

function Partner() {
    const [formData, setFormData] = useState({
        name: "",
        companyName: "",
        numberScreen: "",
        email: "",
        phone: ""
    })
    const onInputChange = (e: any) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }
    const sendMail = async () => {
        if (!formData.email || !formData.name || !formData.companyName || !formData.numberScreen || !formData.phone) {
            toast.error("Please fill all fields")
            return
        }
        const ContactData = { ...formData }

        setFormData({
            name: "",
            companyName: "",
            numberScreen: "",
            email: "",
            phone: ""
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
            <div className="flex flex-row justify-center items-center gap-9 w-full bg-[#00000040] rounded-6xl p-3 max-w-[1300px]">
                <div className="bg-Background p-12 rounded-6xl  w-full  max-w-[800px]">
                    <h4>Become A Partner</h4>
                    <div className="flex flex-col w-full">
                        <div className=" flex flex-row justify-between">
                            <div className="w-[40%]">
                                <ContactInput lable="Name" value={formData["name"]} onChange={onInputChange} name="name" />
                            </div>
                            <div className="w-[40%]">
                                <ContactInput lable="Company Name" value={formData["companyName"]} onChange={onInputChange} name="companyName" />
                            </div>
                        </div>
                        <div className=" flex flex-row justify-between">
                            <div className="w-[40%]">
                                <ContactInput lable="Number Of Screens" type="number" value={formData["numberScreen"]} onChange={onInputChange} name="numberScreen" />
                            </div>
                            <div className="w-[40%]">
                                <ContactInput lable="Email" value={formData["email"]} onChange={onInputChange} name="email" />
                            </div>
                        </div>
                        <div className="w-full flex flex-row justify-between">
                            <ContactInput lable="Phone" value={formData["phone"]} onChange={onInputChange} name="phone" />
                        </div>
                    </div>
                    <Button className="w-[98%] max-w-[100%]" onClick={sendMail}>Send Message</Button>
                </div>
            </div>
        </CenterContainer>
    )
}

export default Partner