const Testimonials = () => {
  return (
    <section className="max-w-7xl mx-auto px-6">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
        <div className="w-full lg:w-1/3">
          <h3 className="text-3xl md:text-4xl font-semibold text-[#282938] mb-4">
            What our clients<br className="hidden md:block" />say about us
          </h3>
          <p className="text-[#282938]/70">
            Our clients&apos; success stories speak volumes about our commitment to excellence and client satisfaction.
          </p>
        </div>

        <div className="w-full lg:w-2/3">
          <blockquote className="text-2xl md:text-3xl leading-tight mb-12">
            &quot;The best agency we&apos;ve worked with so far. They understand our product and are able to add new features with a great focus.&quot;
          </blockquote>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-gray-200"></div>
            <div>
              <h4 className="font-medium text-[#282938]">Jenny Wilson</h4>
              <p className="text-[#282938]/70">Vice President</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 