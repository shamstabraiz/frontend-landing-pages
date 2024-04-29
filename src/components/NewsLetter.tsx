import Button from "./Action/Button"

function NewsLetter() {
    return (
        <div className="max-w-[1078px] max-sm:p-3 gap-3 w-[100%] bg-[#4b05ad] rounded-t-7xl min-h-[180px] flex flex-row justify-center items-center max-md:flex-wrap">
            <div className="w-[40%] max-sm:w-[100%]  flex flex-col flex-wrap justify-end">
                <h2 className="w-[max-content] max-sm:w-[100%] ">Join Our Newsletter</h2>
                <h6 className="w-[max-content] max-sm:w-[100%] ">and Never Miss an Update from EZ Designs</h6>
            </div>
            <div className="flex flex-col w-[40%] max-sm:w-[100%] ">
                <input type="email" placeholder="Email" className="bg-transparent text-white placeholder-white px-6 py-3 m-2 border-solid border-[1px] border-white rounded-[40px] focus:border-Primary-P200 focus:outline-none" />
                <Button className="w-[100%] max-w-[100%]">Sign Up</Button>
            </div>
        </div>
    )
}

export default NewsLetter