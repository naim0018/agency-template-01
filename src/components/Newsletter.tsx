const Newsletter = () => {
  return (
    <div className="bg-[#1C1E53] max-w-7xl mx-auto rounded-2xl overflow-hidden">
      <div className="flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/2 p-8 md:p-12 lg:p-20">
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-6">
            Building stellar websites for early startups
          </h2>
          <p className="text-white/70 mb-10">
            Let us help transform your startup&apos;s online presence with our expert web development services. We specialize in creating modern, high-performance websites that drive growth and engagement.
          </p>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-gray-200"></div>
            <div>
              <h4 className="font-medium text-white">Send inquiry</h4>
              <p className="text-white/70">We&apos;ll get back to you within 24 hours</p>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2 bg-[#1C1E53] p-8 md:p-12 lg:p-20">
          <form className="space-y-8">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full bg-transparent border-b border-white/20 py-3 text-white placeholder:text-white/50 focus:outline-none focus:border-white/40"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full bg-transparent border-b border-white/20 py-3 text-white placeholder:text-white/50 focus:outline-none focus:border-white/40"
            />
            <input
              type="text"
              placeholder="Paste your Figma design URL"
              className="w-full bg-transparent border-b border-white/20 py-3 text-white placeholder:text-white/50 focus:outline-none focus:border-white/40"
            />
            <button className="w-full bg-[#FCD980] text-[#1B1C31] py-4 rounded-full font-medium hover:bg-[#FCD980]/90 transition">
              Send an Inquiry
            </button>
            <a href="#" className="block text-center text-white hover:text-[#FCD980] transition">
              Get in touch with us <span>→</span>
            </a>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Newsletter; 