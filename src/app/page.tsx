import Navbar from "@/components/Navbar";
import HeroIllustration from "@/components/HeroIllustration";
import HowWeWork from "@/components/HowWeWork";
import Projects from "@/components/Projects";
import Features from "@/components/Features";
import FAQ from "@/components/FAQ";
import Blog from "@/components/Blog";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testimonials";
import Newsletter from "@/components/Newsletter";

export default function Home() {
  return (
    <div className="">
      <main className="bg-[#1B1C31] min-h-[80vh]">
        <Navbar />
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-6 pt-36">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            {/* Left Content */}
            <div className="max-w-xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                Building stellar websites for early startups
              </h1>
              <p className="text-gray-400 text-base md:text-lg mb-8 leading-relaxed">
                Nullam vitae purus at tortor mattis dapibus. Morbi purus est,
                ultricies nec dolor sit amet, scelerisque cursus purus.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="w-full sm:w-auto px-8 py-4 bg-[#FCD980] text-[#1B1C31] rounded-full">
                  View our work
                </button>
                <button className="w-full sm:w-auto px-8 py-4 text-white hover:text-[#FCD980]">
                  View Pricing <span>→</span>
                </button>
              </div>
            </div>

            {/* Right Content */}
            <HeroIllustration />
          </div>
        </section>
      </main>

      {/* How We Work Section */}

      <div className="bg-[#F4F6FC] py-24">
        <HowWeWork />
      </div>
      {/* Projects Section */}
      <div className=" py-24">
        <Projects />
      </div>
      <div className="bg-white py-24">
        <Features />
      </div>

      <div className="bg-[#F4F6FC] py-24 ">
        <Testimonials />
      </div>
      <div className=" py-24">
        <FAQ />
      </div>
      <div className="py-24">
          <Newsletter />
      </div>
      <div className="bg-[#F4F6FC] py-24">
        <Blog />
      </div>

      <Footer />
    </div>
  );
}
