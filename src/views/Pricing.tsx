import CenterContainer from "../Layout/CenterContainer"
import Button from "../components/Action/Button"
import TickIcon from "../components/TickIcon"
function Pricing() {
    return (
        <>
            <main>
                <CenterContainer className="text-left">
                    <h2>Plans & Pricing</h2>
                    <div className="flex flex-row items-center">
                        <p className="max-w-[647px]">
                            You can get started right now at no cost with a free trial. Upgrade to enable more storage, enhanced security, and more.
                        </p>
                        <div>
                            <Button className="mr-[-16px] z-20 relative drop-shadow-2xl ">MONTHLY</Button>
                            <Button type="pricing">YEARLY</Button>
                        </div>
                    </div>
                </CenterContainer>
                <CenterContainer className="text-left">
                    <div className="flex flex-row items-center gap-9 bg-[#00000040] rounded-6xl px-12 py-6">
                        <div>
                            <div className="flex flex-col justify-items-center h-[390px]">
                                <div className="mb-5"><strong className="text-5xl">$19</strong>/month</div>
                                <h2 className="mb-4">Starter</h2>
                                <p className="mb-5">Unleash the power of automation.</p>
                                <div className="flex flex-col justify-start gap-3">
                                    <TickIcon text="Multi-step Zaps" />
                                    <TickIcon text="3 Premium Apps" />
                                    <TickIcon text="2 Users team" />
                                </div>
                            </div>
                            <div className="w-full flex justify-center items-center">
                                <Button>Get Started</Button>
                            </div>
                        </div>
                        <div className="bg-Background rounded-6xl shadow-[rgba(0,_0,_0,_0.3)_0px_10px_30px] p-10 mt-[-75px]">
                            <div className="flex flex-col justify-items-center h-[390px]">
                                <div className="mb-5"><strong className="text-5xl">$19</strong>/month</div>
                                <h2 className="mb-4">Starter</h2>
                                <p className="mb-5">Unleash the power of automation.</p>
                                <div className="flex flex-col justify-start gap-3">
                                    <TickIcon text="Multi-step Zaps" />
                                    <TickIcon text="3 Premium Apps" />
                                    <TickIcon text="2 Users team" />
                                </div>
                            </div>
                            <div className="w-full flex justify-center items-center">
                                <Button>Get Started</Button>
                            </div>
                        </div>
                        <div>
                            <div className="flex flex-col justify-items-center h-[390px]">
                                <div className="mb-5"><strong className="text-5xl">$19</strong>/month</div>
                                <h2 className="mb-4">Starter</h2>
                                <p className="mb-5">Unleash the power of automation.</p>
                                <div className="flex flex-col justify-start gap-3">
                                    <TickIcon text="Multi-step Zaps" />
                                    <TickIcon text="3 Premium Apps" />
                                    <TickIcon text="2 Users team" />
                                </div>
                            </div>
                            <div className="w-full flex justify-center items-center">
                                <Button>Get Started</Button>
                            </div>
                        </div>
                    </div>
                </CenterContainer>

                <CenterContainer >
                    <h2>
                        Compare Plans
                    </h2>
                    <table className="w-full max-w-[1300px]">
                        <tr>
                            <th>Features</th>
                            <th>Starter</th>
                            <th>Professional</th>
                            <th>Company</th>
                        </tr>
                        <tr>
                            <td>Multi-step Zaps</td>
                            <td><svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.4571 16.2929C13.0666 15.9024 12.4334 15.9024 12.0429 16.2929C11.6524 16.6834 11.6524 17.3166 12.0429 17.7071L13.4571 16.2929ZM15.5833 19.8333L14.8762 20.5404C15.2668 20.931 15.8999 20.931 16.2904 20.5404L15.5833 19.8333ZM21.9571 14.8738C22.3476 14.4832 22.3476 13.8501 21.9571 13.4596C21.5666 13.069 20.9334 13.069 20.5429 13.4596L21.9571 14.8738ZM28.75 17C28.75 23.4893 23.4893 28.75 17 28.75V30.75C24.5939 30.75 30.75 24.5939 30.75 17H28.75ZM17 28.75C10.5107 28.75 5.25 23.4893 5.25 17H3.25C3.25 24.5939 9.40608 30.75 17 30.75V28.75ZM5.25 17C5.25 10.5107 10.5107 5.25 17 5.25V3.25C9.40608 3.25 3.25 9.40608 3.25 17H5.25ZM17 5.25C23.4893 5.25 28.75 10.5107 28.75 17H30.75C30.75 9.40608 24.5939 3.25 17 3.25V5.25ZM12.0429 17.7071L14.8762 20.5404L16.2904 19.1262L13.4571 16.2929L12.0429 17.7071ZM16.2904 20.5404L21.9571 14.8738L20.5429 13.4596L14.8762 19.1262L16.2904 20.5404Z" fill="#3EDB8A" />
                            </svg>
                            </td>
                            <td><svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.4571 16.2929C13.0666 15.9024 12.4334 15.9024 12.0429 16.2929C11.6524 16.6834 11.6524 17.3166 12.0429 17.7071L13.4571 16.2929ZM15.5833 19.8333L14.8762 20.5404C15.2668 20.931 15.8999 20.931 16.2904 20.5404L15.5833 19.8333ZM21.9571 14.8738C22.3476 14.4832 22.3476 13.8501 21.9571 13.4596C21.5666 13.069 20.9334 13.069 20.5429 13.4596L21.9571 14.8738ZM28.75 17C28.75 23.4893 23.4893 28.75 17 28.75V30.75C24.5939 30.75 30.75 24.5939 30.75 17H28.75ZM17 28.75C10.5107 28.75 5.25 23.4893 5.25 17H3.25C3.25 24.5939 9.40608 30.75 17 30.75V28.75ZM5.25 17C5.25 10.5107 10.5107 5.25 17 5.25V3.25C9.40608 3.25 3.25 9.40608 3.25 17H5.25ZM17 5.25C23.4893 5.25 28.75 10.5107 28.75 17H30.75C30.75 9.40608 24.5939 3.25 17 3.25V5.25ZM12.0429 17.7071L14.8762 20.5404L16.2904 19.1262L13.4571 16.2929L12.0429 17.7071ZM16.2904 20.5404L21.9571 14.8738L20.5429 13.4596L14.8762 19.1262L16.2904 20.5404Z" fill="#3EDB8A" />
                            </svg>
                            </td>
                            <td><svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.4571 16.2929C13.0666 15.9024 12.4334 15.9024 12.0429 16.2929C11.6524 16.6834 11.6524 17.3166 12.0429 17.7071L13.4571 16.2929ZM15.5833 19.8333L14.8762 20.5404C15.2668 20.931 15.8999 20.931 16.2904 20.5404L15.5833 19.8333ZM21.9571 14.8738C22.3476 14.4832 22.3476 13.8501 21.9571 13.4596C21.5666 13.069 20.9334 13.069 20.5429 13.4596L21.9571 14.8738ZM28.75 17C28.75 23.4893 23.4893 28.75 17 28.75V30.75C24.5939 30.75 30.75 24.5939 30.75 17H28.75ZM17 28.75C10.5107 28.75 5.25 23.4893 5.25 17H3.25C3.25 24.5939 9.40608 30.75 17 30.75V28.75ZM5.25 17C5.25 10.5107 10.5107 5.25 17 5.25V3.25C9.40608 3.25 3.25 9.40608 3.25 17H5.25ZM17 5.25C23.4893 5.25 28.75 10.5107 28.75 17H30.75C30.75 9.40608 24.5939 3.25 17 3.25V5.25ZM12.0429 17.7071L14.8762 20.5404L16.2904 19.1262L13.4571 16.2929L12.0429 17.7071ZM16.2904 20.5404L21.9571 14.8738L20.5429 13.4596L14.8762 19.1262L16.2904 20.5404Z" fill="#3EDB8A" />
                            </svg>
                            </td>
                        </tr>
                        <tr>
                            <td>Multi-step Zaps</td>
                            <td><svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.4571 16.2929C13.0666 15.9024 12.4334 15.9024 12.0429 16.2929C11.6524 16.6834 11.6524 17.3166 12.0429 17.7071L13.4571 16.2929ZM15.5833 19.8333L14.8762 20.5404C15.2668 20.931 15.8999 20.931 16.2904 20.5404L15.5833 19.8333ZM21.9571 14.8738C22.3476 14.4832 22.3476 13.8501 21.9571 13.4596C21.5666 13.069 20.9334 13.069 20.5429 13.4596L21.9571 14.8738ZM28.75 17C28.75 23.4893 23.4893 28.75 17 28.75V30.75C24.5939 30.75 30.75 24.5939 30.75 17H28.75ZM17 28.75C10.5107 28.75 5.25 23.4893 5.25 17H3.25C3.25 24.5939 9.40608 30.75 17 30.75V28.75ZM5.25 17C5.25 10.5107 10.5107 5.25 17 5.25V3.25C9.40608 3.25 3.25 9.40608 3.25 17H5.25ZM17 5.25C23.4893 5.25 28.75 10.5107 28.75 17H30.75C30.75 9.40608 24.5939 3.25 17 3.25V5.25ZM12.0429 17.7071L14.8762 20.5404L16.2904 19.1262L13.4571 16.2929L12.0429 17.7071ZM16.2904 20.5404L21.9571 14.8738L20.5429 13.4596L14.8762 19.1262L16.2904 20.5404Z" fill="#3EDB8A" />
                            </svg>
                            </td>
                            <td><svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.4571 16.2929C13.0666 15.9024 12.4334 15.9024 12.0429 16.2929C11.6524 16.6834 11.6524 17.3166 12.0429 17.7071L13.4571 16.2929ZM15.5833 19.8333L14.8762 20.5404C15.2668 20.931 15.8999 20.931 16.2904 20.5404L15.5833 19.8333ZM21.9571 14.8738C22.3476 14.4832 22.3476 13.8501 21.9571 13.4596C21.5666 13.069 20.9334 13.069 20.5429 13.4596L21.9571 14.8738ZM28.75 17C28.75 23.4893 23.4893 28.75 17 28.75V30.75C24.5939 30.75 30.75 24.5939 30.75 17H28.75ZM17 28.75C10.5107 28.75 5.25 23.4893 5.25 17H3.25C3.25 24.5939 9.40608 30.75 17 30.75V28.75ZM5.25 17C5.25 10.5107 10.5107 5.25 17 5.25V3.25C9.40608 3.25 3.25 9.40608 3.25 17H5.25ZM17 5.25C23.4893 5.25 28.75 10.5107 28.75 17H30.75C30.75 9.40608 24.5939 3.25 17 3.25V5.25ZM12.0429 17.7071L14.8762 20.5404L16.2904 19.1262L13.4571 16.2929L12.0429 17.7071ZM16.2904 20.5404L21.9571 14.8738L20.5429 13.4596L14.8762 19.1262L16.2904 20.5404Z" fill="#3EDB8A" />
                            </svg>
                            </td>
                            <td><svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.4571 16.2929C13.0666 15.9024 12.4334 15.9024 12.0429 16.2929C11.6524 16.6834 11.6524 17.3166 12.0429 17.7071L13.4571 16.2929ZM15.5833 19.8333L14.8762 20.5404C15.2668 20.931 15.8999 20.931 16.2904 20.5404L15.5833 19.8333ZM21.9571 14.8738C22.3476 14.4832 22.3476 13.8501 21.9571 13.4596C21.5666 13.069 20.9334 13.069 20.5429 13.4596L21.9571 14.8738ZM28.75 17C28.75 23.4893 23.4893 28.75 17 28.75V30.75C24.5939 30.75 30.75 24.5939 30.75 17H28.75ZM17 28.75C10.5107 28.75 5.25 23.4893 5.25 17H3.25C3.25 24.5939 9.40608 30.75 17 30.75V28.75ZM5.25 17C5.25 10.5107 10.5107 5.25 17 5.25V3.25C9.40608 3.25 3.25 9.40608 3.25 17H5.25ZM17 5.25C23.4893 5.25 28.75 10.5107 28.75 17H30.75C30.75 9.40608 24.5939 3.25 17 3.25V5.25ZM12.0429 17.7071L14.8762 20.5404L16.2904 19.1262L13.4571 16.2929L12.0429 17.7071ZM16.2904 20.5404L21.9571 14.8738L20.5429 13.4596L14.8762 19.1262L16.2904 20.5404Z" fill="#3EDB8A" />
                            </svg>
                            </td>
                        </tr>
                        <tr>
                            <td>Multi-step Zaps</td>
                            <td><svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.4571 16.2929C13.0666 15.9024 12.4334 15.9024 12.0429 16.2929C11.6524 16.6834 11.6524 17.3166 12.0429 17.7071L13.4571 16.2929ZM15.5833 19.8333L14.8762 20.5404C15.2668 20.931 15.8999 20.931 16.2904 20.5404L15.5833 19.8333ZM21.9571 14.8738C22.3476 14.4832 22.3476 13.8501 21.9571 13.4596C21.5666 13.069 20.9334 13.069 20.5429 13.4596L21.9571 14.8738ZM28.75 17C28.75 23.4893 23.4893 28.75 17 28.75V30.75C24.5939 30.75 30.75 24.5939 30.75 17H28.75ZM17 28.75C10.5107 28.75 5.25 23.4893 5.25 17H3.25C3.25 24.5939 9.40608 30.75 17 30.75V28.75ZM5.25 17C5.25 10.5107 10.5107 5.25 17 5.25V3.25C9.40608 3.25 3.25 9.40608 3.25 17H5.25ZM17 5.25C23.4893 5.25 28.75 10.5107 28.75 17H30.75C30.75 9.40608 24.5939 3.25 17 3.25V5.25ZM12.0429 17.7071L14.8762 20.5404L16.2904 19.1262L13.4571 16.2929L12.0429 17.7071ZM16.2904 20.5404L21.9571 14.8738L20.5429 13.4596L14.8762 19.1262L16.2904 20.5404Z" fill="#3EDB8A" />
                            </svg>
                            </td>
                            <td><svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.4571 16.2929C13.0666 15.9024 12.4334 15.9024 12.0429 16.2929C11.6524 16.6834 11.6524 17.3166 12.0429 17.7071L13.4571 16.2929ZM15.5833 19.8333L14.8762 20.5404C15.2668 20.931 15.8999 20.931 16.2904 20.5404L15.5833 19.8333ZM21.9571 14.8738C22.3476 14.4832 22.3476 13.8501 21.9571 13.4596C21.5666 13.069 20.9334 13.069 20.5429 13.4596L21.9571 14.8738ZM28.75 17C28.75 23.4893 23.4893 28.75 17 28.75V30.75C24.5939 30.75 30.75 24.5939 30.75 17H28.75ZM17 28.75C10.5107 28.75 5.25 23.4893 5.25 17H3.25C3.25 24.5939 9.40608 30.75 17 30.75V28.75ZM5.25 17C5.25 10.5107 10.5107 5.25 17 5.25V3.25C9.40608 3.25 3.25 9.40608 3.25 17H5.25ZM17 5.25C23.4893 5.25 28.75 10.5107 28.75 17H30.75C30.75 9.40608 24.5939 3.25 17 3.25V5.25ZM12.0429 17.7071L14.8762 20.5404L16.2904 19.1262L13.4571 16.2929L12.0429 17.7071ZM16.2904 20.5404L21.9571 14.8738L20.5429 13.4596L14.8762 19.1262L16.2904 20.5404Z" fill="#3EDB8A" />
                            </svg>
                            </td>
                            <td><svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.4571 16.2929C13.0666 15.9024 12.4334 15.9024 12.0429 16.2929C11.6524 16.6834 11.6524 17.3166 12.0429 17.7071L13.4571 16.2929ZM15.5833 19.8333L14.8762 20.5404C15.2668 20.931 15.8999 20.931 16.2904 20.5404L15.5833 19.8333ZM21.9571 14.8738C22.3476 14.4832 22.3476 13.8501 21.9571 13.4596C21.5666 13.069 20.9334 13.069 20.5429 13.4596L21.9571 14.8738ZM28.75 17C28.75 23.4893 23.4893 28.75 17 28.75V30.75C24.5939 30.75 30.75 24.5939 30.75 17H28.75ZM17 28.75C10.5107 28.75 5.25 23.4893 5.25 17H3.25C3.25 24.5939 9.40608 30.75 17 30.75V28.75ZM5.25 17C5.25 10.5107 10.5107 5.25 17 5.25V3.25C9.40608 3.25 3.25 9.40608 3.25 17H5.25ZM17 5.25C23.4893 5.25 28.75 10.5107 28.75 17H30.75C30.75 9.40608 24.5939 3.25 17 3.25V5.25ZM12.0429 17.7071L14.8762 20.5404L16.2904 19.1262L13.4571 16.2929L12.0429 17.7071ZM16.2904 20.5404L21.9571 14.8738L20.5429 13.4596L14.8762 19.1262L16.2904 20.5404Z" fill="#3EDB8A" />
                            </svg>
                            </td>
                        </tr>
                    </table>

                </CenterContainer>

            </main>
           
        </>

    )
}

export default Pricing