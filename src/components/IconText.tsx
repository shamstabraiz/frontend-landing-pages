import React from "react"

function IconText({ svg, text }: { svg: React.ReactNode, text: React.ReactNode }) {
    return (
        <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-3" >
            <div
                className="flex justify-center items-center flex-grow-0 flex-shrink-0 h-[50px] relative gap-2.5 p-2.5 rounded-xl bg-[#7916ff]"
            >
                {svg}
            </div>
            <p className="flex-grow-0 flex-shrink-0 text-2xl font-semibold text-left text-white">
                {text}
            </p>
        </div>
    )
}

export default IconText