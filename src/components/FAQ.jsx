import React, { useState } from 'react';

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null); // State to track active dropdown

  const toggleDropdown = (index) => {
    setActiveIndex(activeIndex === index ? null : index); // Toggle active dropdown
  };

  const faqs = [
    {
      question: 'Can education flashcards be used for all age groups?',
      answer: 'Yes, education flashcards can be tailored to different age groups and learning levels. There are flashcards designed for preschoolers, elementary school students, high school students, and even for college-level and adult learners.'
    },
    {
      question: 'How education flashcards works?',
      answer: 'Education falshcards work by presenting a question or prompt on one side and the corresponding answer or information on other. Users can review the cards repeatedly, reinforcing their memory and enhancing learning through repetition.'
    },
    {
      question: 'Can education flashcards be used for test preparation?',
      answer: 'Absolutely. Flashcards are an excellent tool for test preparation, allowing students to review their key concepts, terms, and facts. They provide a quick and focused way to reinforce knowledge before exams.'
    }
  ];

  return (
    <div className="faq-section flex flex-col w-[848px] h-[300px] gap-[32px] pl-[104px] pt-[30px]">
      {faqs.map((faq, index) => (
        <div className="faq-item flex flex-col w-[848px] font-inter font-semibold text-base leading-relaxed justify-between cursor-pointer border rounded-[12px] border-blue-600" key={index} >
          <div className="faq-question flex flex-row justify-between h-[58px] items-center" onClick={() => toggleDropdown(index)}>
            {<div className='pl-[20px] text-textColor'> {faq.question} </div>}
            {activeIndex === index ? <span className='pr-[20px]'><img className='w-[48px] h-[48px] bg-white' src="dropup.png" alt="" /></span> : <span className='pr-[20px]'><img className='w-[24px] h-[24px]' src="dropdown.png" alt="" /></span>} {/* Dropdown icon */}
          </div>
          {activeIndex === index && <div className="faq-answer text-customGray pl-[20px] w-[750px]">{faq.answer}</div>} {/* Show answer if active */}
        </div>
      ))}
    </div>
  );
};

export default FAQSection;

// style={{borderImage: 'linear-gradient(to right, rgba(33, 126, 236, 1), rgba(8, 34, 153, 1))', borderImageSlice: 1}}