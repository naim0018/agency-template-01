const HowWeWork = () => {
  const steps = [
    {
      number: "01",
      title: "Strategy",
      description: "We dive deep into your business goals and target audience to develop a comprehensive strategy that aligns with your vision.",
      color: "bg-[#2405F2]"
    },
    {
      number: "02", 
      title: "Wireframing",
      description: "Creating detailed wireframes and prototypes to visualize the user journey and optimize the information architecture.",
      color: "bg-[#FCD980]"
    },
    {
      number: "03",
      title: "Design",
      description: "Our designers craft beautiful, intuitive interfaces that reflect your brand identity while ensuring an exceptional user experience.",
      color: "bg-[#2405F2]"
    },
    {
      number: "04",
      title: "Development",
      description: "We build robust, scalable applications using modern technologies and best practices to bring your vision to life.",
      color: "bg-[#FCD980]"
    }
  ];

  return (
    <section className="max-w-7xl mx-auto px-6">
      <div className="flex flex-col lg:flex-row justify-between gap-8 lg:gap-20">
        <div className="lg:max-w-md">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#282938] mb-6">How we work</h2>
          <p className="text-[#282938]/70 mb-8 leading-relaxed">
            We help transform your ideas into real world applications that will outperform your toughest competition and help you achieve your strategic goals in short period of time.
          </p>
          <button className="text-[#2405F2] flex items-center gap-2 hover:gap-4 transition-all font-medium">
            Get in touch with us <span>→</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:flex-1">
          {steps.map((step) => (
            <div key={step.number} className="p-6 md:p-8 relative group hover:bg-white transition-colors rounded-lg">
              <div className="bg-blue-700 w-12 h-12 rounded-lg flex items-center justify-center text-sm mb-4 text-[#282938] relative overflow-hidden">
                <span className="relative z-20 text-lg left-1 bottom-1 text-white">{step.number}</span>
                <div className="bg-[#5239FA] w-12 h-12 rounded-lg flex items-center justify-center text-sm mb-4 text-[#282938] overflow-hidden absolute -top-2 left-2 z-10">
                </div>
                <div className="bg-[#FCD980] w-12 h-12 rounded-lg flex items-center justify-center text-sm mb-4 text-[#282938] overflow-hidden absolute top-5 -left-4 z-1"></div>               
              </div>
              <h3 className="text-xl md:text-2xl font-semibold text-[#282938] mb-4">{step.title}</h3>
              <p className="text-[#282938]/70 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;