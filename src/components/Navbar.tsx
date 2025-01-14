const Navbar = () => {
  return (
    <nav className="w-full border-[#2E3056] fixed top-0 left-0 right-0 bg-[#1B1C31] z-50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="text-white text-2xl font-semibold">
            {"SpakTech"}
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#" className="text-white hover:text-[#FCD980] transition">Home</a>
            <a href="#" className="text-white hover:text-[#FCD980] transition">About us</a>
            <a href="#" className="text-white hover:text-[#FCD980] transition">Features</a>
            <a href="#" className="text-white hover:text-[#FCD980] transition">Pricing</a>
            <a href="#" className="text-white hover:text-[#FCD980] transition">FAQ</a>
            <a href="#" className="text-white hover:text-[#FCD980] transition">Blog</a>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu Panel */}
        <div className="hidden md:hidden">
          <div className="py-4 flex flex-col gap-4">
            <a href="#" className="text-white hover:text-[#FCD980] transition">Home</a>
            <a href="#" className="text-white hover:text-[#FCD980] transition">About us</a>
            <a href="#" className="text-white hover:text-[#FCD980] transition">Features</a>
            <a href="#" className="text-white hover:text-[#FCD980] transition">Pricing</a>
            <a href="#" className="text-white hover:text-[#FCD980] transition">FAQ</a>
            <a href="#" className="text-white hover:text-[#FCD980] transition">Blog</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 