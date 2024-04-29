import Button from "../components/Action/Button";
import FloatingIconBox from "../components/FloatingIconBox";
import screensImg from "../assets/screens.png";
import IconBoxWIthText from "../components/IconBoxWIthText";
import pcImage from "../assets/cardPcImage.png";
import CardWithImageAndText from "../components/CardWithImageAndText";
import laptopTech from "../assets/laptopTech.png";
import twoLaptops from "../assets/twoLaptops.png";
import techVector from "../assets/techVector.png";
import TextWithImageAndButton from "../components/TextWithImageAndButton";
import vectorPeople from "../assets/vectorPeople.png";
import profile from "../assets/profile.png"
import TestmonialCard from "../components/TestmonialCard";
import FaqItem from "../components/FaqItem";
import NewsLetter from "../components/NewsLetter";
import CenterContainer from "../Layout/CenterContainer";
function Home() {
    return (
        <main>
            <section className="mb-10 pb-10 bg-[linear-gradient(to_bottom,#2c0076,rgba(256,94,42,0)),url('/src/assets/bg.png')] bg-no-repeat bg-cover min-h-[500px] max-h-[700px] flex items-center justify-center">
                <div className="max-w-[800px] flex flex-col align-middle items-center text-center gap-4">
                    <h1 className="text-6xl text-white font-semibold">
                        Transform Your Screens into Powerful Digital Signs
                    </h1>
                    <h6 className="text-xl text-white">
                        Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa
                        mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien.
                    </h6>
                    <Button>Get Started</Button>
                </div>
            </section>

            <section className="mt-[-170px] flex justify-center py-[50px]">
                <FloatingIconBox />
            </section>

            <section className="w-[100%] gap-16 flex justify-center items-center flex-col py-[50px]">
                <div className="max-w-[967px] flex justify-center items-center text-center">
                    <div className="flex flex-col gap-4 justify-center items-center text-center">
                        <h2>More than 1,000+ active screens</h2>
                        <img src={screensImg} alt="" />
                        <h6>Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien.</h6>
                    </div>
                </div>
                <div className="flex flex-row max-w-[967px] flex-wrap gap-[16px]">
                    <IconBoxWIthText
                        icon={<svg width="30" height="32" viewBox="0 0 30 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.85938 7.0625C5.85938 6.37207 6.38397 5.8125 7.03125 5.8125H22.9688C23.616 5.8125 24.1406 6.37207 24.1406 7.0625C24.1406 7.75293 23.616 8.3125 22.9688 8.3125H7.03125C6.38397 8.3125 5.85938 7.75293 5.85938 7.0625ZM24.1406 12.0625C24.1406 11.3721 23.616 10.8125 22.9688 10.8125H7.03125C6.38397 10.8125 5.85938 11.3721 5.85938 12.0625C5.85938 12.7529 6.38397 13.3125 7.03125 13.3125H22.9688C23.616 13.3125 24.1406 12.7529 24.1406 12.0625ZM7.03125 15.8125C6.38397 15.8125 5.85938 16.3721 5.85938 17.0625C5.85938 17.7529 6.38397 18.3125 7.03125 18.3125H12.4219C13.0692 18.3125 13.5938 17.7529 13.5938 17.0625C13.5938 16.3721 13.0692 15.8125 12.4219 15.8125H7.03125ZM28.9712 25.5994C30.341 27.0605 30.341 29.4395 28.9703 30.9016C28.285 31.6326 27.3846 31.9983 26.4844 31.9983C25.5842 31.9983 24.6838 31.6326 23.9985 30.9016L17.5903 24.0535C17.4474 23.9009 17.3442 23.7117 17.2904 23.5039L15.9801 18.4587C15.8661 18.0193 15.9851 17.5486 16.2911 17.2302C16.5969 16.9121 17.0409 16.7964 17.45 16.929L22.0628 18.4236C22.2475 18.4834 22.4155 18.5908 22.5517 18.7366L28.9712 25.5994ZM19.4666 22.5198L23.7742 27.123L25.4317 25.355L21.1002 20.7244L18.8074 19.9814L19.4666 22.5198ZM27.3129 27.3662L27.0872 27.1248L25.4299 28.8926L25.6565 29.1348C26.1127 29.6213 26.8561 29.6213 27.3129 29.1338C27.77 28.6465 27.77 27.8535 27.3129 27.3662ZM25.3125 0H4.6875C2.10274 0 0 2.24292 0 5V27C0 29.7571 2.10274 32 4.6875 32H19.043C19.6902 32 20.2148 31.4404 20.2148 30.75C20.2148 30.0596 19.6902 29.5 19.043 29.5H4.6875C3.39523 29.5 2.34375 28.3784 2.34375 27V5C2.34375 3.62158 3.39523 2.5 4.6875 2.5H25.3125C26.6048 2.5 27.6563 3.62158 27.6563 5V20.375C27.6563 21.0654 28.1808 21.625 28.8281 21.625C29.4754 21.625 30 21.0654 30 20.375V5C30 2.24292 27.8973 0 25.3125 0Z" fill="white"/>
                        </svg>
                        
                        }
                        title="Stand Screens"
                        text="Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi."
                    />
                    <IconBoxWIthText
                        icon={<svg width="37" height="46" viewBox="0 0 37 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M32.8821 0.5H4.1179C2.35509 0.5 0.921875 1.94141 0.921875 3.71429V42.2857C0.921875 44.0586 2.35509 45.5 4.1179 45.5H32.8821C34.6449 45.5 36.0781 44.0586 36.0781 42.2857V3.71429C36.0781 1.94141 34.6449 0.5 32.8821 0.5ZM32.4826 41.8839H4.5174V4.11607H32.4826V41.8839ZM16.5025 36.6607C16.5025 37.1935 16.7129 37.7045 17.0875 38.0812C17.4622 38.458 17.9702 38.6696 18.5 38.6696C19.0298 38.6696 19.5379 38.458 19.9125 38.0812C20.2871 37.7045 20.4975 37.1935 20.4975 36.6607C20.4975 36.1279 20.2871 35.6169 19.9125 35.2402C19.5379 34.8634 19.0298 34.6518 18.5 34.6518C17.9702 34.6518 17.4622 34.8634 17.0875 35.2402C16.7129 35.6169 16.5025 36.1279 16.5025 36.6607Z" fill="white" />
                        </svg>
                        }
                        title="Tablets"
                        text="Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi."
                    />
                    <IconBoxWIthText
                        icon={<svg width="69" height="52" viewBox="0 0 69 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.443726 2.4375V49.5625C0.443726 50.209 0.696012 50.829 1.14508 51.2861C1.59416 51.7432 2.20323 52 2.83831 52H66.1618C66.7969 52 67.406 51.7432 67.855 51.2861C68.3041 50.829 68.5564 50.209 68.5564 49.5625V2.4375C68.5564 1.79103 68.3041 1.17105 67.855 0.713927C67.406 0.256807 66.7969 0 66.1618 0H2.83831C2.20323 0 1.59416 0.256807 1.14508 0.713927C0.696012 1.17105 0.443726 1.79103 0.443726 2.4375ZM60.0423 47.125H8.95781V4.875H60.0423V47.125Z" fill="white" />
                        </svg>
                        }
                        title="Large Screens"
                        text="Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi."
                    />
                </div>
            </section>

            <CenterContainer>
                <div className="text-center">
                    <h3 className="text-center">
                        How EZ Display Works
                    </h3>
                    <h6>Simple and Easy</h6>
                </div>
                <div className="flex flex-wrap flex-row gap-[60px] justify-center">
                    <CardWithImageAndText
                        index="01"
                        title="Connect"
                        description="Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices."
                        image={pcImage}
                    />
                    <CardWithImageAndText
                        index="02"
                        title="Upload"
                        description="Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices."
                        image={laptopTech}
                    />
                    <CardWithImageAndText
                        index="03"
                        title="Manage"
                        description="Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices."
                        image={twoLaptops}
                    />
                </div>
            </CenterContainer>

            <CenterContainer>
                <TextWithImageAndButton
                    img={techVector}
                    title="Your Content of Choice,
                    in High Resolution"
                    description="Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices."
                    button="Get Started"
                />
                <TextWithImageAndButton
                    img={vectorPeople}
                    title="Manage Your Content,from Anywhere"
                    description="Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices."
                    button="Get Started"
                    rightImage={false}
                />
            </CenterContainer>

            <CenterContainer>
                <h3 className="text-center">What They say About EZ Display</h3>
                <div className="flex flex-wrap flex-row gap-[44px]">

                    <TestmonialCard
                        profile={profile}
                        name="Mark Thompson"
                        review="Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices."
                        location="U.S.A. - 2 days ago"
                    />
                    <TestmonialCard
                        profile={profile}
                        name="Mark Thompson"
                        review="Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices."
                        location="U.S.A. - 2 days ago"
                    />
                    <TestmonialCard
                        profile={profile}
                        name="Mark Thompson"
                        review="Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices."
                        location="U.S.A. - 2 days ago"
                    />
                </div>

            </CenterContainer>

            <CenterContainer>
                <h3 className="text-center">Frequently Asked Questions</h3>
                <div className="flex flex-wrap flex-row justify-around w-[100%] max-w-[1300px] gap-y-[32px]">
                    <FaqItem title="Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi?" answer="Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi?" />
                    <FaqItem title="Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi?" answer="Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi?" />
                    <FaqItem title="Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi?" answer="Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi?" />
                    <FaqItem title="Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi?" answer="Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi?" />
                    <FaqItem title="Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi?" answer="Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi?" />
                    <FaqItem title="Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi?" answer="Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi?" />
                </div>
            </CenterContainer>

            <CenterContainer className="pt-[50px] pb-0">
                <NewsLetter />
            </CenterContainer>
        </main >
    );
}

export default Home;
