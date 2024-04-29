import { useState } from 'react';
import { FaMinus } from 'react-icons/fa';
import { GoPlus } from "react-icons/go";

interface FaqItemProps {
    title: string;
    answer: string;
}

function FaqItem({ title, answer }: FaqItemProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div onClick={() => setIsOpen(!isOpen)} className="cursor-pointer flex flex-col justify-between items-start w-[45%] max-sm:w-[100%] border-solid border-[1px] border-Primary-P500 rounded-xl px-8 py-4">
            <div className="flex justify-between w-full items-center">
                <p className='text-lg'>{title}</p>
                <div>
                    {isOpen ? <FaMinus className="text-lg" /> : <GoPlus className="text-lg" />}
                </div>
            </div>
            <div className={`overflow-hidden transition-all duration-150 ease-in-out ${isOpen ? 'max-h-[100vh]' : 'max-h-0'}`}>
                <span className="mt-4 text-sm">{answer}</span>
            </div>
        </div>
    );
}

export default FaqItem;