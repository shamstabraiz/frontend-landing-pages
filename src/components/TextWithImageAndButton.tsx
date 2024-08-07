import { useNavigate } from "react-router-dom";
import Button from "./Action/Button"

function TextWithImageAndButton({ img, title, description, button, customAction ,rightImage = true, ...props }: { img: string, title: string, description: string, button: string, rightImage?: boolean, customAction?:boolean } & React.HtmlHTMLAttributes<HTMLButtonElement>) {
    const navigate = useNavigate();

    return (
        <div className={`flex max-sm:flex-col-reverse max-sm:text-center justify-center items-center max-w-[1100px] gap-[60px] ${rightImage ? 'flex-row' : 'flex-row-reverse'}`}>
            <div className="max-sm:w-[100%] w-[50%]">
                <h2 className="m-2">{title}</h2>
                <p className="m-2">{description}</p>
                {!customAction &&
                    <Button onClick={() => {
                        navigate('/contact-us')
                    }}>{button}</Button>
                }
                {customAction &&
                    <Button {...props}>{button}</Button>
                }
            </div>
            <img src={img} className="max-sm:w-[100%] w-[50%] max-w-[525px]" />
        </div>
    )
}

export default TextWithImageAndButton