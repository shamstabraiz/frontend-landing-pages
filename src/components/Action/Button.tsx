import { ReactNode } from "react"

function Button({ type = "Primary-P100", children, onClick, className, ...props }: { type?: string, children: ReactNode } & React.HtmlHTMLAttributes<HTMLButtonElement>) {
    switch (type) {
        case 'Primary-P100':
            return (
                <button onClick={onClick} {...props} className={' text-white bg-gradient-to-r from-[#0095FF] to-[#17B8B5] px-[22px] py-[9px] m-2 rounded-7xl text-title-xsm hover:opacity-90 transition delay-100 '+className}>
                    {children}
                </button>
            )
        case 'secondary':
            return (
                <button onClick={onClick} className={'text-transparent bg-clip-text  bg-gradient-to-r from-[#0095FF] to-[#17B8B5] px-[22px] py-[9px] m-2 rounded-7xl text-title-xsm hover:opacity-90 transition delay-100 border-Primary-P100 border-solid border-[1px] '+className}>
                    {children}
                </button>
            )
        case 'pricing':
            return (
                <button onClick={onClick} className="text-white bg-[#00000030] px-[22px] py-[9px] rounded-l-[-100px] rounded-r-7xl text-title-xsm hover:opacity-90 transition delay-100">
                    {children}
                </button>
            )
    }
    
}

export default Button