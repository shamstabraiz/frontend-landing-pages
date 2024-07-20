import { useNavigate } from "react-router-dom";

function NavLinks({ heading, links }: { heading: string, links: { url: string, text: string }[] }) {
    const navigate = useNavigate();

    return (
        <>
            <h3 className="text-xl mb-[16px]">{heading}</h3>
            <ul className="flex flex-col gap-[12px]">
                {links.map((link, index) => (
                    <li key={`${index}-${link.url}`} className="cursor-pointer" onClick={()=>{
                        navigate(link.url)
                        //scroll smothly to top
                        window.scrollTo({top:0,behavior:'smooth'})
                    }}>{link.text}</li>
                ))}
            </ul>
        </>
    )
}

export default NavLinks