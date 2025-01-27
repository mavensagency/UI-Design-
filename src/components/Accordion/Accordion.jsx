import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

const AccordionItem = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="">
      <button
        className="w-full px-6 py-4 text-left flex justify-between items-center bg-color-gray-light
         transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="md:text-xl text-lg font-bold py-4">{title}</span>
        <ChevronDown
          className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${
            isOpen ? 'transform rotate-180' : ''
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-200 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 py-4 text-gray-600">{children}</div>
      </div>
    </div>
  );
};

const CustomAccordion = () => {
  const faqData = [
    {
      question: 'Are there any side effects associated with Carbology?',
      answer:
        'Carbology is formulated with natural, clinically tested ingredients. However, it is always recommended to consult your healthcare provider before starting any new supplement, especially if you have pre-existing conditions or are on medication.',
    },
    {
      question: 'How does Carbology work?',
      answer:
        'Carbology works through a unique blend of natural ingredients that support healthy carbohydrate metabolism and blood sugar levels.',
    },
    {
      question: 'Are the ingredients proven to be reliable?',
      answer:
        'Yes, all ingredients in Carbology have been clinically tested and proven effective through multiple scientific studies.',
    },
    {
      question: 'Do you offer international shipping?',
      answer:
        'Yes, we offer international shipping to most countries. Shipping rates and delivery times vary by location.',
    },
    {
      question: 'What is your return policy?',
      answer:
        'We offer a 30-day money-back guarantee on all unopened products. Please contact our customer service for return instructions.',
    },
  ];

  return (
    <div className="  bg-white rounded-lg shadow-sm">
      <div className="border-none flex flex-col gap-4">
        {faqData.map((item, index) => (
          <AccordionItem key={index} title={item.question}>
            {item.answer}
          </AccordionItem>
        ))}
      </div>
    </div>
  );
};

export default CustomAccordion;