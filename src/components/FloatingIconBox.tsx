import IconText from "./IconText"

function FloatingIconBox() {
    return (
        <div
            className="max-w-[1300px] flex justify-center items-center h-[140px] gap-8 px-20 rounded-[70px] bg-gradient-to-r from-[#05253c] to-[#021929]"
            style={{ boxShadow: "0px 5px 30px 0 rgba(255,255,255,0.05)" }}>
            <IconText
                svg={
                    <svg
                        width="30"
                        height="32"
                        viewBox="0 0 30 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="flex-grow-0 flex-shrink-0"
                        preserveAspectRatio="xMidYMid meet"
                    >
                        <path
                            d="M5.85938 7.0625C5.85938 6.37207 6.38397 5.8125 7.03125 5.8125H22.9688C23.616 5.8125 24.1406 6.37207 24.1406 7.0625C24.1406 7.75293 23.616 8.3125 22.9688 8.3125H7.03125C6.38397 8.3125 5.85938 7.75293 5.85938 7.0625ZM24.1406 12.0625C24.1406 11.3721 23.616 10.8125 22.9688 10.8125H7.03125C6.38397 10.8125 5.85938 11.3721 5.85938 12.0625C5.85938 12.7529 6.38397 13.3125 7.03125 13.3125H22.9688C23.616 13.3125 24.1406 12.7529 24.1406 12.0625ZM7.03125 15.8125C6.38397 15.8125 5.85938 16.3721 5.85938 17.0625C5.85938 17.7529 6.38397 18.3125 7.03125 18.3125H12.4219C13.0692 18.3125 13.5938 17.7529 13.5938 17.0625C13.5938 16.3721 13.0692 15.8125 12.4219 15.8125H7.03125ZM28.9712 25.5994C30.341 27.0605 30.341 29.4395 28.9703 30.9016C28.285 31.6326 27.3846 31.9983 26.4844 31.9983C25.5842 31.9983 24.6838 31.6326 23.9985 30.9016L17.5903 24.0535C17.4474 23.9009 17.3442 23.7117 17.2904 23.5039L15.9801 18.4587C15.8661 18.0193 15.9851 17.5486 16.2911 17.2302C16.5969 16.9121 17.0409 16.7964 17.45 16.929L22.0628 18.4236C22.2475 18.4834 22.4155 18.5908 22.5517 18.7366L28.9712 25.5994ZM19.4666 22.5198L23.7742 27.123L25.4317 25.355L21.1002 20.7244L18.8074 19.9814L19.4666 22.5198ZM27.3129 27.3662L27.0872 27.1248L25.4299 28.8926L25.6565 29.1348C26.1127 29.6213 26.8561 29.6213 27.3129 29.1338C27.77 28.6465 27.77 27.8535 27.3129 27.3662ZM25.3125 0H4.6875C2.10274 0 0 2.24292 0 5V27C0 29.7571 2.10274 32 4.6875 32H19.043C19.6902 32 20.2148 31.4404 20.2148 30.75C20.2148 30.0596 19.6902 29.5 19.043 29.5H4.6875C3.39523 29.5 2.34375 28.3784 2.34375 27V5C2.34375 3.62158 3.39523 2.5 4.6875 2.5H25.3125C26.6048 2.5 27.6563 3.62158 27.6563 5V20.375C27.6563 21.0654 28.1808 21.625 28.8281 21.625C29.4754 21.625 30 21.0654 30 20.375V5C30 2.24292 27.8973 0 25.3125 0Z"
                            fill="white"
                        ></path>
                    </svg>
                }
                text={
                    <span>
                        Content
                        <br />
                        Management
                    </span>
                }
            />
            <IconText
                svg={
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21.6882 0C21.1704 0 20.7507 0.419678 20.7507 0.937501C20.7507 1.45508 21.1704 1.875 21.6882 1.875C26.3403 1.875 30.1252 5.65967 30.1252 10.3118C30.1252 10.8296 30.5449 11.2493 31.0625 11.2493C31.5803 11.2493 32 10.8296 32 10.3118C32 4.62598 27.3743 0 21.6882 0Z" fill="white" />
                        <path d="M21.6882 3.74976C21.1704 3.74976 20.7507 4.16944 20.7507 4.68726C20.7507 5.20484 21.1704 5.62476 21.6882 5.62476C24.2727 5.62476 26.3752 7.7273 26.3752 10.3118C26.3752 10.8296 26.7952 11.2493 27.3127 11.2493C27.8306 11.2493 28.2502 10.8296 28.2502 10.3118C28.2502 6.69361 25.3066 3.74976 21.6882 3.74976Z" fill="white" />
                        <path d="M22.6255 10.3118C22.6255 10.8296 23.0454 11.2493 23.563 11.2493C24.0808 11.2493 24.5005 10.8296 24.5005 10.3118C24.5005 8.76124 23.2388 7.49952 21.6882 7.49952C21.1704 7.49952 20.7507 7.9192 20.7507 8.43702C20.7507 8.9546 21.1704 9.37452 21.6882 9.37452C22.2051 9.37452 22.6255 9.79493 22.6255 10.3118Z" fill="white" />
                        <path d="M24.5288 15.4258L16.5742 7.4712C15.4751 6.37208 13.6963 6.37208 12.5969 7.4712L2.47312 17.5952C-0.82425 20.8926 -0.824494 26.2293 2.47312 29.5269C5.77048 32.8242 11.1072 32.8245 14.4048 29.5269L24.5288 19.4029C25.6252 18.3064 25.6252 16.5222 24.5288 15.4258ZM23.2031 18.0774L13.0791 28.2012C10.5144 30.7659 6.36375 30.7661 3.7988 28.2012C1.23435 25.6367 1.2341 21.4859 3.7988 18.9212L13.9228 8.79713C14.2883 8.43165 14.883 8.43165 15.2485 8.79713L23.2029 16.7515C23.5684 17.117 23.5684 17.7117 23.2031 18.0774Z" fill="white" />
                        <path d="M9.94529 16.7512C9.57932 16.3853 8.98582 16.3853 8.61961 16.7512C8.25364 17.1174 8.25364 17.711 8.61961 18.0772C8.98582 18.4431 9.57932 18.4431 9.94529 18.0772C10.3115 17.711 10.3115 17.1174 9.94529 16.7512Z" fill="white" />
                        <path d="M12.5967 19.4028C12.2307 19.0369 11.6372 19.0369 11.271 19.4028C10.905 19.7691 10.905 20.3626 11.271 20.7288C11.6372 21.0947 12.2307 21.0947 12.5967 20.7288C12.9629 20.3626 12.9629 19.7691 12.5967 19.4028Z" fill="white" />
                        <path d="M15.2483 22.0547C14.8821 21.6885 14.2886 21.6885 13.9226 22.0547C13.5564 22.4207 13.5564 23.0142 13.9226 23.3804C14.2886 23.7464 14.8821 23.7464 15.2483 23.3804C15.6142 23.0142 15.6142 22.4207 15.2483 22.0547Z" fill="white" />
                        <path d="M7.29392 19.4028C6.92771 19.0366 6.3342 19.0366 5.96824 19.4028C5.60203 19.7688 5.60203 20.3626 5.96824 20.7285C6.3342 21.0947 6.92771 21.0947 7.29392 20.7285C7.65989 20.3626 7.65989 19.7688 7.29392 19.4028Z" fill="white" />
                        <path d="M9.94529 22.0545C9.57908 21.6885 8.98557 21.6885 8.61961 22.0545C8.2534 22.4207 8.2534 23.0142 8.61961 23.3804C8.98557 23.7464 9.57908 23.7464 9.94529 23.3804C10.3113 23.0142 10.3113 22.4207 9.94529 22.0545Z" fill="white" />
                        <path d="M12.5969 24.7061C12.2307 24.3399 11.6372 24.3399 11.271 24.7061C10.905 25.072 10.905 25.6656 11.271 26.0318C11.6372 26.3977 12.2307 26.3977 12.5969 26.0318C12.9629 25.6656 12.9629 25.072 12.5969 24.7061Z" fill="white" />
                        <path d="M7.29392 24.7058C6.92771 24.3396 6.3342 24.3396 5.96824 24.7058C5.60203 25.0718 5.60203 25.6656 5.96824 26.0315C6.3342 26.3977 6.92771 26.3977 7.29392 26.0315C7.65989 25.6656 7.65989 25.0718 7.29392 24.7058Z" fill="white" />
                        <path d="M13.8249 14.1355C12.7283 15.2319 12.7283 17.0161 13.8249 18.1126C14.9214 19.209 16.7056 19.209 17.8022 18.1126C18.8987 17.0161 18.8987 15.2319 17.8022 14.1353C16.7056 13.0391 14.9214 13.0388 13.8249 14.1355ZM16.4763 16.7869C16.1108 17.1524 15.5161 17.1524 15.1506 16.7869C14.7842 16.4204 14.7842 15.8277 15.1506 15.4612C15.5161 15.0957 16.1108 15.0957 16.4763 15.4612C16.8428 15.8277 16.8428 16.4204 16.4763 16.7869Z" fill="white" />
                    </svg>

                }
                text={
                    <span>
                        Remote
                        <br />
                        Management
                    </span>
                }
            />
            <IconText
                svg={
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M27.1899 1.87519C25.6389 1.87519 24.3771 3.13694 24.3771 4.68794C24.3771 5.12094 24.4836 5.52625 24.659 5.893L23.3153 7.23669C21.4126 2.97894 17.1453 0 12.1886 0C5.468 0 0 5.468 0 12.1886C0 18.9091 5.468 24.3771 12.1886 24.3771C14.5237 24.3771 16.6999 23.7054 18.5557 22.5619L19.9587 24.2365C21.235 23.0418 23.0404 21.2365 24.2361 19.9594L22.5613 18.5567C23.7052 16.7006 24.3771 14.5241 24.3771 12.1885C24.3771 11.1594 24.2349 10.1651 23.9936 9.20994L25.9849 7.21869C26.3516 7.39412 26.7569 7.50056 27.1899 7.50056C28.7409 7.50056 30.0027 6.23881 30.0027 4.68781C30.0026 3.13687 28.7409 1.87519 27.1899 1.87519ZM12.1886 22.5019C6.50262 22.5019 1.87519 17.8754 1.87519 12.1886C1.87519 6.50175 6.50262 1.87519 12.1886 1.87519C16.6408 1.87519 20.4328 4.71725 21.8736 8.67838L19.0191 11.5329C18.6523 11.3574 18.247 11.251 17.814 11.251C17.381 11.251 16.9757 11.3574 16.6089 11.5329L14.7193 9.64325C14.8948 9.27656 15.0012 8.87119 15.0012 8.43819C15.0012 6.88719 13.7394 5.62544 12.1884 5.62544C10.6374 5.62544 9.37569 6.88719 9.37569 8.43819C9.37569 8.87119 9.48212 9.2765 9.65756 9.64325L7.76794 11.5329C7.40125 11.3574 6.99587 11.251 6.56287 11.251C5.01187 11.251 3.75012 12.5128 3.75012 14.0638C3.75012 15.6147 5.01187 16.8765 6.56287 16.8765C8.11387 16.8765 9.37562 15.6147 9.37562 14.0638C9.37562 13.6308 9.26919 13.2254 9.09375 12.8587L10.9834 10.9691C11.3501 11.1445 11.7554 11.2509 12.1884 11.2509C12.6214 11.2509 13.0268 11.1445 13.3935 10.9691L15.2831 12.8587C15.1077 13.2254 15.0013 13.6308 15.0013 14.0638C15.0013 15.6147 16.263 16.8765 17.814 16.8765C19.365 16.8765 20.6268 15.6147 20.6268 14.0638C20.6268 13.6308 20.5203 13.2254 20.3449 12.8587L22.3981 10.8054C22.4594 11.2591 22.5019 11.7184 22.5019 12.1886C22.5019 17.8754 17.8745 22.5019 12.1886 22.5019Z" fill="white" />
                        <path d="M31.9853 27.91C31.8973 26.9093 31.423 26.0028 30.6539 25.3573L25.6739 21.1636C24.4102 22.5198 22.5182 24.4117 21.1631 25.6741L25.3581 30.6604C25.4918 30.8197 25.6566 30.9854 25.8214 31.1238C26.5246 31.7125 27.3816 32 28.2349 32C29.3098 32 30.3793 31.5431 31.1209 30.6559C31.7674 29.8859 32.0731 28.9108 31.9853 27.91Z" fill="white" />
                    </svg>


                }
                text={
                    <span>
                       Statistics
                    </span>
                }
            />
            <IconText
                svg={
                    <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.57152 11.1291H11.5715C13.4618 11.1291 15.0001 9.59086 15.0001 7.70057V3.42857C15.0001 1.53829 13.4618 0 11.5715 0H3.57152C1.68123 0 0.142944 1.53829 0.142944 3.42857V7.70057C0.142944 9.59086 1.68123 11.1291 3.57152 11.1291ZM2.42866 3.42857C2.42866 2.79886 2.94066 2.28571 3.57152 2.28571H11.5715C12.2024 2.28571 12.7144 2.79886 12.7144 3.42857V7.70057C12.7144 8.33029 12.2024 8.84343 11.5715 8.84343H3.57152C2.94066 8.84343 2.42866 8.33029 2.42866 7.70057V3.42857Z" fill="white" />
                        <path d="M15.0001 28.5714V16.4229C15.0001 14.5326 13.4618 12.9943 11.5715 12.9943H3.57152C1.68123 12.9943 0.142944 14.5326 0.142944 16.4229V28.5714C0.142944 30.4617 1.68123 32 3.57152 32H11.5715C13.4618 32 15.0001 30.4617 15.0001 28.5714ZM2.42866 28.5714V16.4229C2.42866 15.7931 2.94066 15.28 3.57152 15.28H11.5715C12.2024 15.28 12.7144 15.7931 12.7144 16.4229V28.5714C12.7144 29.2011 12.2024 29.7143 11.5715 29.7143H3.57152C2.94066 29.7143 2.42866 29.2011 2.42866 28.5714Z" fill="white" />
                        <path d="M28.7144 20.8709H20.7144C18.8241 20.8709 17.2858 22.4091 17.2858 24.2994V28.5714C17.2858 30.4617 18.8241 32 20.7144 32H28.7144C30.6047 32 32.1429 30.4617 32.1429 28.5714V24.2994C32.1429 22.4091 30.6047 20.8709 28.7144 20.8709ZM29.8572 28.5714C29.8572 29.2011 29.3452 29.7143 28.7144 29.7143H20.7144C20.0835 29.7143 19.5715 29.2011 19.5715 28.5714V24.2994C19.5715 23.6697 20.0835 23.1566 20.7144 23.1566H28.7144C29.3452 23.1566 29.8572 23.6697 29.8572 24.2994V28.5714Z" fill="white" />
                        <path d="M28.7144 0H20.7144C18.8241 0 17.2858 1.53829 17.2858 3.42857V15.5771C17.2858 17.4674 18.8241 19.0057 20.7144 19.0057H28.7144C30.6047 19.0057 32.1429 17.4674 32.1429 15.5771V3.42857C32.1429 1.53829 30.6047 0 28.7144 0ZM29.8572 15.5771C29.8572 16.2069 29.3452 16.72 28.7144 16.72H20.7144C20.0835 16.72 19.5715 16.2069 19.5715 15.5771V3.42857C19.5715 2.79886 20.0835 2.28571 20.7144 2.28571H28.7144C29.3452 2.28571 29.8572 2.79886 29.8572 3.42857V15.5771Z" fill="white" />
                    </svg>

                }
                text={
                    <span>
                        Templates
                    </span>
                }
            />
        </div>)
}

export default FloatingIconBox