
function NavLinks({ heading, links }: { heading: string, links: { url: string, text: string }[] }) {
    return (
        <>
            <h3 className="text-xl mb-[16px]">{heading}</h3>
            <ul className="flex flex-col gap-[12px]">
                {links.map((link, index) => (
                    <li key={`${index}-${link.url}`}>{link.text}</li>
                ))}
            </ul>
        </>
    )
}

export default NavLinks