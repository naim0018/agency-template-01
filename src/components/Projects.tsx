import Image from 'next/image';

const Projects = () => {
  return (
    <section className="max-w-7xl mx-auto px-6">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0 mb-8 md:mb-16">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#282938] text-center md:text-left">View our projects</h2>
        <a href="#" className="text-[#282938] flex items-center gap-2 hover:gap-4 transition-all">
          View More <span>→</span>
        </a>
      </div>

      <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
        {/* Featured Project */}
        <div className="relative group overflow-hidden rounded-2xl w-full lg:w-2/3 h-[400px] md:h-[500px] lg:h-[600px]">
          <Image
            src="https://i.imgur.com/zFQ6SnG.jpg"
            alt="Workhub office"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1C1E53] via-[#1C1E53]/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
            <div className="absolute bottom-0 left-0 p-6 md:p-12 w-full md:w-[396px]">
              <h3 className="text-xl md:text-2xl font-semibold text-white mb-4">
                Workhub office Webflow Webflow Design
              </h3>
              <p className="text-white/70 mb-6 md:mb-10 leading-relaxed text-sm md:text-base">
                Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi.
              </p>
              <a href="#" className="text-white flex items-center gap-2 hover:gap-4 transition-all">
                View project <span>→</span>
              </a>
            </div>
          </div>
        </div>

        {/* Right Column Projects */}
        <div className="grid gap-8 w-full lg:w-1/3">
          <div className="relative group overflow-hidden rounded-2xl h-[284px] w-full">
            <Image
              src="https://i.imgur.com/43KBAGD.png"
              alt="Unisaas Website"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#1C1E53] to-[#1C1E53]/40 opacity-0 group-hover:opacity-100 transition-all duration-500">
              <div className="absolute bottom-0 left-0 p-6 md:p-12 w-full">
                <h3 className="text-xl md:text-2xl font-semibold text-white mb-2">
                  Unisaas Website Design
                </h3>
                <a href="#" className="text-white flex items-center gap-2 hover:gap-4 transition-all">
                  View portfolio <span>→</span>
                </a>
              </div>
            </div>
          </div>

          <div className="relative group overflow-hidden rounded-2xl h-[284px] w-full">
            <Image
              src="https://i.imgur.com/QafGkXu.png"
              alt="Church Website"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#1C1E53] to-[#1C1E53]/40 opacity-0 group-hover:opacity-100 transition-all duration-500">
              <div className="absolute bottom-0 left-0 p-6 md:p-12 w-full">
                <h3 className="text-xl md:text-2xl font-semibold text-white mb-2">
                  Church Website Design
                </h3>
                <a href="#" className="text-white flex items-center gap-2 hover:gap-4 transition-all">
                  View portfolio <span>→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;