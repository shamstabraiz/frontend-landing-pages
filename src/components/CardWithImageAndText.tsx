
function CardWithImageAndText({ index,image, title, description }: {index:string, title: string, description: string, image: string }) {
    return (
        <div className="border-solid border-[1px] border-Primary-P500 rounded-[40px] max-w-[350px]">
            <h4 className="text-Black-B60 font-bold p-3">{index}</h4>
            <img src={image} className="" alt="" />
            <div className="p-4">
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default CardWithImageAndText