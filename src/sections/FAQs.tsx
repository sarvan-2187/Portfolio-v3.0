'use client';
import { FC, useState } from "react";
import { AnimatePresence, motion} from "motion/react"
import { twMerge } from "tailwind-merge";

/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
const faqs = [
  {
    question: "How long does it take to build a website?",
    answer:
      "It depends on the complexity of the website and the scope of the project.",
  },
  {
    question: "What is your development process like?",
    answer:
      "I follow a hands-on approach starting with project planning, building out the core features, and regular check-ins to make sure everything matches your needs.",
  },
  {
    question: "Do you work with international clients?",
    answer:
      "Yes, I work with clients globally and can accommodate different time zones for meetings and communication.",
  },
  {
    question: "What industries do you specialize in?",
    answer:
      "I have experience across various industries including technology, retail, hospitality, and professional services, bringing fresh perspectives to each project.",
  },
];

const FAQs: FC = () => {
  const [selectedIndex, setSelectedIndex] = useState<number|null>(null);

  return <section id="faqs" className="py-24 md:py-32 lg:py-36">
    <div className="container">
      <h2 className="text-4xl md:text-7xl lg:text-8xl sm:text-center">FAQs</h2>
      <div className="mt-10 md:mt-16 lg:mt-20">
        {faqs.map(({question,answer}, faqIndex)=>(
          <div key={question} className="border-t last:border-b border-stone-400 border-dotted py-6 md:py-8 lg:py-10"
          onClick={()=> {
            if(faqIndex === selectedIndex){
                setSelectedIndex(null)
            } else{
              setSelectedIndex(faqIndex)
            }
          }} >
            <div className="flex items-center justify-between gap-4">
              <div className="text-2xl md:text-3xl lg:text-4xl">{question}</div>
              <div className={twMerge("inline-flex items-center justify-center size-11 border border-stone-400 rounded-full shrink-0 transition duration-300", faqIndex === selectedIndex && 'rotate-45')}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
              </div>
            </div>
            <AnimatePresence>
              {faqIndex === selectedIndex && (<motion.div className="overflow-hidden" initial={{height:0}} animate={{height:'auto'}} exit={{height:0}} transition={{ duration:0.5, ease:'easeOut'}}><p className="text-xl mt-4">{answer}</p></motion.div>)}
            </AnimatePresence>   
          </div>
        ))}
      </div>
    </div>
  </section>;
};

export default FAQs;
