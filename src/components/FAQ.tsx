const FAQ = () => {
  const faqs = [
    {
      id: "01",
      question: "How much time does it take?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      id: "02",
      question: "What is your class naming convention?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      id: "03",
      question: "How do you communicate?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      id: "04",
      question: "I have a bigger project. Can you handle it?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      id: "05",
      question: "What is your class naming convention?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
  ];

  return (
    <section className="max-w-7xl mx-auto px-6">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-32">
        <div className="w-full lg:w-1/3">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#282938] mb-4">
            Frequently<br className="hidden md:block" />asked questions
          </h2>
          <a href="#" className="text-[#2405F2] flex items-center gap-2 hover:gap-4 transition-all">
            Contact us for more info <span>→</span>
          </a>
        </div>

        <div className="w-full lg:w-2/3">
          {faqs.map((faq) => (
            <div key={faq.id} className="border-b border-[#ECECF1] py-8 group cursor-pointer">
              <div className="flex justify-between items-center mb-4">
                <div className="flex gap-8 items-center">
                  <span className="text-[#2405F2] text-sm">{faq.id}</span>
                  <h3 className="text-xl font-medium text-[#282938] group-hover:text-[#2405F2] transition-colors">
                    {faq.question}
                  </h3>
                </div>
                <button className="text-2xl text-[#282938] rotate-0 group-hover:rotate-45 transition-transform">+</button>
              </div>
              <div className="pl-16 pr-20 hidden group-hover:block">
                <p className="text-[#282938]/70">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ; 