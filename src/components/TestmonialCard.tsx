
import mettings from "../assets/mettings.png"
function TestmonialCard({profile, name, review, location}:{profile:string, name:string,review:string, location:string}) {
    return (
        <div className=" flex flex-col gap-[54px] border-solid border-[1px] border-Primary-P500 rounded-[40px] px-10 py-7 bg-[rgba(0,0,0,0.3)] max-w-[380px]">
            <div className="flex flex-col gap-[12px] ">
                <img src={profile} height={60} width={60} className="object-cover h-[60px] w-[60px] rounded-[100%]" alt="" />
                <h4>{name}</h4>
                <img src={mettings} height={30} width={109} alt="" />
                <p className="font-light">{review}</p>
            </div>
            <span className="text-xs">{location}</span>
        </div>
    )
}

export default TestmonialCard