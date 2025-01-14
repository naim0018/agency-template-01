const Features = () => {
  const features = [
    {
      icon: "👥",
      title: "Uses Client First",
      description: "We prioritize understanding your needs and goals to deliver solutions that truly serve your business objectives and end users."
    },
    {
      icon: "🔄", 
      title: "Two Free Revision Round",
      description: "Get two rounds of revisions at no extra cost to ensure the final product perfectly matches your vision and requirements."
    },
    {
      icon: "📝",
      title: "Template Customization",
      description: "Transform our battle-tested templates into unique designs that reflect your brand identity and specific needs."
    },
    {
      icon: "🎯",
      title: "24/7 Support",
      description: "Our dedicated support team is always available to help you with any questions or issues, ensuring smooth operation around the clock."
    },
    {
      icon: "⚡",
      title: "Quick Delivery",
      description: "We understand time is crucial for business. Our streamlined process ensures rapid delivery without compromising on quality."
    },
    {
      icon: "🤝",
      title: "Hands-on approach",
      description: "We work closely with you throughout the project, maintaining clear communication and collaborative decision-making at every step."
    }
  ];

  return (
    <section className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-20">
        <p className="text-[#282938] mb-4">Features</p>
        <h2 className="text-5xl font-semibold text-[#282938] mb-4">
          Design that solves<br />problems, one product at<br />a time
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
        {features.map((feature, index) => (
          <div 
            key={index} 
            className="group p-6 md:p-12 rounded-lg hover:bg-[#F4F6FC] transition-colors"
          >
            <div className="mb-6">
              <div className="w-[35px] h-[35px] rounded-lg bg-[#2405F2]/10 flex items-center justify-center text-2xl">
                {feature.icon}
              </div>
            </div>
            <h3 className="text-2xl font-medium text-[#282938] mb-3">
              {feature.title}
            </h3>
            <p className="text-[#282938]/70 leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features; 