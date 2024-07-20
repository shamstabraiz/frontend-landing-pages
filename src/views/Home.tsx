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
import CenterContainer from "../Layout/CenterContainer";
import { useNavigate } from "react-router-dom";
function Home() {
    const navigate = useNavigate();

    return (
        <main>
            <section className="mb-10 pb-10 bg-[linear-gradient(to_bottom,#042A45,rgba(16,71,52,0)),url('/src/assets/bg.png')] bg-no-repeat bg-cover min-h-[500px] max-h-[700px] flex items-center justify-center">
                <div className="max-w-[800px] flex flex-col align-middle items-center text-center gap-4">
                    <h1 className="text-6xl max-md:text-3xl text-white font-semibold">
                        Sign Up for Success: Powerful Signage Software Solutions
                    </h1>
                    <h6 className="text-xl max-md:text-sm text-white">
                        Say goodbye to complexity and hello to effortless engagement with Vibe Sign, the best
                        signage system for businesses of all sizes
                    </h6>
                    <Button onClick={() => {
                        navigate('/contact-us')
                    }}>Get Started</Button>
                </div>
            </section>

            <section className="max-lg:hidden mt-[-170px] flex justify-center py-[50px]">
                <FloatingIconBox />
            </section>

            <section className="w-[100%] gap-16 flex justify-center items-center flex-col py-[50px]">
                <div className="max-w-[967px] flex justify-center items-center text-center">
                    <div className="flex flex-col gap-4 justify-center items-center text-center">
                        <h2>More than 1,000+ active screens</h2>
                        <img src={screensImg} alt="" />
                        <h6>Connect with Your Audience in a Whole New Way: Vibesign</h6>
                    </div>
                </div>
                <div className="flex flex-row max-w-[967px] flex-wrap gap-[16px] justify-center">
                    <IconBoxWIthText
                        icon={<svg width="41" height="70" viewBox="0 0 41 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M40.502 0.5H0.813147C0.509037 0.5 0.113525 0.608745 0.113525 0.906827V54.7797C0.113525 55.0778 0.509037 55.4846 0.813147 55.4846H14.4389V65.1877H11.1986C10.8939 65.1877 10.5819 65.3053 10.5819 65.6034V68.7951C10.5819 69.0932 10.8939 69.5 11.1986 69.5H30.116C30.4207 69.5 30.4173 69.0932 30.4173 68.7951V65.6034C30.4173 65.3053 30.4207 65.1877 30.116 65.1877H26.5604V55.4846H40.5015C40.8056 55.4846 40.8863 55.0778 40.8863 54.7797V0.906827C40.8868 0.608745 40.8061 0.5 40.502 0.5ZM5.07238 50.0943V5.35157H35.9274V50.0943H5.07238Z" fill="white" />
                        </svg>
                        }
                        title="Stand Screens"
                        text="Vibe Sign is compatible with a wide range of stand screens, allowing you to display content on screens of all sizes and types."
                    />
                    <IconBoxWIthText
                        icon={<svg width="37" height="46" viewBox="0 0 37 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M32.8821 0.5H4.1179C2.35509 0.5 0.921875 1.94141 0.921875 3.71429V42.2857C0.921875 44.0586 2.35509 45.5 4.1179 45.5H32.8821C34.6449 45.5 36.0781 44.0586 36.0781 42.2857V3.71429C36.0781 1.94141 34.6449 0.5 32.8821 0.5ZM32.4826 41.8839H4.5174V4.11607H32.4826V41.8839ZM16.5025 36.6607C16.5025 37.1935 16.7129 37.7045 17.0875 38.0812C17.4622 38.458 17.9702 38.6696 18.5 38.6696C19.0298 38.6696 19.5379 38.458 19.9125 38.0812C20.2871 37.7045 20.4975 37.1935 20.4975 36.6607C20.4975 36.1279 20.2871 35.6169 19.9125 35.2402C19.5379 34.8634 19.0298 34.6518 18.5 34.6518C17.9702 34.6518 17.4622 34.8634 17.0875 35.2402C16.7129 35.6169 16.5025 36.1279 16.5025 36.6607Z" fill="white" />
                        </svg>
                        }
                        title="Tablets"
                        text="Vibe Sign is compatible with tablets, allowing you to display content on a variety of devices, including Android tablets."
                    />
                    <IconBoxWIthText
                        icon={<svg width="69" height="52" viewBox="0 0 69 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.443726 2.4375V49.5625C0.443726 50.209 0.696012 50.829 1.14508 51.2861C1.59416 51.7432 2.20323 52 2.83831 52H66.1618C66.7969 52 67.406 51.7432 67.855 51.2861C68.3041 50.829 68.5564 50.209 68.5564 49.5625V2.4375C68.5564 1.79103 68.3041 1.17105 67.855 0.713927C67.406 0.256807 66.7969 0 66.1618 0H2.83831C2.20323 0 1.59416 0.256807 1.14508 0.713927C0.696012 1.17105 0.443726 1.79103 0.443726 2.4375ZM60.0423 47.125H8.95781V4.875H60.0423V47.125Z" fill="white" />
                        </svg>
                        }
                        title="Large Screens"
                        text="Vibe Sign is designed to work with large screens, making it ideal for businesses that want to display content on a big scale."
                    />
                </div>
            </section>

            <CenterContainer>
                <div className="text-center">
                    <h3 className="text-center">
                        How Vibe Sign Works
                    </h3>
                    <h6>Simple and Easy</h6>
                </div>
                <div className="flex flex-wrap flex-row gap-[60px] justify-center">
                    <CardWithImageAndText
                        index="01"
                        title="Connect"
                        description="Install the apk on android tv or device and pair the screen the with the unique pairing code
                        With the cms "
                        image={pcImage}
                    />
                    <CardWithImageAndText
                        index="02"
                        title="Upload"
                        description="Upload content with simple drag drop to the cms"
                        image={laptopTech}
                    />
                    <CardWithImageAndText
                        index="03"
                        title="Manage"
                        description="Manage content on screen in the simplest way"
                        image={twoLaptops}
                    />
                </div>
            </CenterContainer>

            <CenterContainer>
                <TextWithImageAndButton
                    img={techVector}
                    title="Your Content of Choice,
                    in High Resolution"
                    description="Showcase your brand's story in stunning clarity with Vibe Sign's high-resolution displays,
                    capturing attention and leaving a lasting impression"
                    button="Get Started"
                />
                <TextWithImageAndButton
                    img={vectorPeople}
                    title="Manage Your Content,from Anywhere"
                    description="Take control of your digital signage from anywhere, at any time, with Vibe Sign's cloudbased content management system"
                    button="Get Started"
                    rightImage={false}
                />
            </CenterContainer>

            <CenterContainer>
                <h3 className="text-center">What They say About Vibe Sign</h3>
                <div className="flex flex-wrap flex-row gap-[44px] justify-center">

                    <TestmonialCard
                        profile={profile}
                        name="Mark Thompson"
                        review="I have used Vibe Sign for my business and it has been a game-changer. The software is easy to use and the customer support is top-notch. I highly recommend Vibe Sign to anyone looking for a digital signage solution."
                        location="U.S.A. - 2 days ago"
                    />
                    <TestmonialCard
                        profile="https://img.freepik.com/free-photo/curly-man-with-broad-smile-shows-perfect-teeth-being-amused-by-interesting-talk-has-bushy-curly-dark-hair-stands-indoor-against-white-blank-wall_273609-17092.jpg?size=626&ext=jpg&ga=GA1.1.1224184972.1715040000&semt=ais"
                        name="John Doe"
                        review="Vibe Sign has helped me take my business to the next level. The software is easy to use and the customer support is excellent. I highly recommend Vibe Sign to anyone looking for a digital signage solution."
                        location="U.S.A. - 10 days ago"
                    />
                    <TestmonialCard
                        profile='https://d34u8crftukxnk.cloudfront.net/slackpress/prod/sites/6/E12KS1G65-W0168RE00G7-133faf432639-512.jpeg'
                        name="Bryan Smith"
                        review="Its the best software I have ever used. The software is easy to use and the customer support is excellent. I highly recommend Vibe Sign to anyone looking for a digital signage solution."
                        location="U.S.A. - 30 days ago"
                    />
                </div>

            </CenterContainer>

            <CenterContainer>
                <h3 className="text-center">Frequently Asked Questions</h3>
                <div className="flex flex-wrap flex-row justify-around w-[100%] max-w-[1300px] gap-y-[32px]">
                    <FaqItem title="What is a digital signage system?" answer="A digital signage system is a tool used to display dynamic content on digital screens. It can be used for advertising, broadcasting information, or enhancing customer experience." />
                    <FaqItem title="How does a digital signage system work?" answer="A digital signage system works by using a software to manage and display content on a digital screen. This can be done remotely, allowing for real-time updates and scheduling of content." />
                    <FaqItem title="What are the benefits of using a digital signage system?" answer="Digital signage systems offer many benefits such as increased engagement, improved communication, cost-effectiveness, and the ability to display real-time updates." />
                    <FaqItem title="Can I customize the content on my digital signage system?" answer="Yes, digital signage systems typically allow for complete customization of the content displayed. This includes text, images, videos, and more." />
                    <FaqItem title="Is a digital signage system difficult to use?" answer="Not at all. Most digital signage systems are designed to be user-friendly, with intuitive interfaces and easy-to-use content management systems." />
                    <FaqItem title="What types of businesses can benefit from a digital signage system?" answer="Any business that wants to enhance communication, advertise products or services, or improve customer experience can benefit from a digital signage system. This includes retail stores, restaurants, corporate offices, and more." />
                </div>
            </CenterContainer>
        </main >
    );
}

export default Home;
