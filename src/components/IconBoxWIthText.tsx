import { ReactNode } from "react"

function IconBoxWIthText({ icon, title, text }: { icon: ReactNode, title: string, text: string }) {
    return (
        <div className="flex flex-col justify-center items-center text-center gap-[16px] max-w-[269px]">
            <div className="text-[70px] p-2 bg-Primary-P500 rounded-[100%] w-[120px] h-[120px] flex justify-center items-center"> {icon}</div>
            <h5>{title}</h5>
            <p>{text}</p>
        </div>
    )
}

export default IconBoxWIthText