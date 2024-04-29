import { ReactNode } from "react"

interface CenterContainerProps {
    children: ReactNode,
    className?: string,
}

function CenterContainer({ children, className = '' }: CenterContainerProps) {
    return (
        <section className={`w-[100%] gap-[46px] flex justify-center items-center flex-col py-[50px] ${className}`}>
            {children}
        </section>
    )
}

export default CenterContainer