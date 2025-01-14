const HeroIllustration = () => {
  return (
    <div className="relative w-full md:w-[500px] lg:w-[600px] h-[300px] md:h-[400px]">
      {/* Main window */}
      <div className="absolute right-0 top-0 w-[70%] md:w-[400px] h-[200px] md:h-[250px] bg-[#2E3056]/30 rounded-lg backdrop-blur-sm border border-[#2E3056] animate-[float_4s_ease-in-out_infinite]">
        <div className="h-6 bg-[#2E3056]/50 rounded-t-lg flex items-center px-2 gap-1">
          <div className="w-2.5 h-2.5 rounded-full bg-[#FF6464]"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-[#FFB800]"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-[#00D084]"></div>
        </div>
      </div>

      {/* Editor window */}
      <div className="absolute left-0 top-20 w-[40%] md:w-[200px] h-[120px] md:h-[150px] bg-[#2E3056]/30 rounded-lg backdrop-blur-sm border border-[#2E3056] animate-[float_4s_ease-in-out_infinite_0.5s]">
        <div className="h-6 bg-[#2E3056]/50 rounded-t-lg flex items-center px-2 gap-1">
          <div className="w-2.5 h-2.5 rounded-full bg-[#FF6464]"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-[#FFB800]"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-[#00D084]"></div>
        </div>
        <div className="p-4">
          <div className="w-full h-16 bg-[#2E3056]/30 rounded-md mb-2 animate-pulse"></div>
          <div className="w-3/4 h-4 bg-[#2E3056]/30 rounded-md animate-pulse [animation-delay:0.2s]"></div>
        </div>
      </div>

      {/* Code window */}
      <div className="absolute bottom-0 right-20 w-[45%] md:w-[250px] h-[100px] md:h-[120px] bg-[#2E3056]/30 rounded-lg backdrop-blur-sm border border-[#2E3056] animate-[float_4s_ease-in-out_infinite_1s]">
        <div className="h-6 bg-[#2E3056]/50 rounded-t-lg flex items-center px-2 gap-1">
          <div className="w-2.5 h-2.5 rounded-full bg-[#FF6464]"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-[#FFB800]"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-[#00D084]"></div>
        </div>
        <div className="p-4">
          <div className="flex gap-2">
            <div className="w-20 h-3 bg-[#00D084]/30 rounded-sm animate-pulse"></div>
            <div className="w-12 h-3 bg-[#FFB800]/30 rounded-sm animate-pulse [animation-delay:0.2s]"></div>
          </div>
        </div>
      </div>

      {/* Floating icons */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex gap-4">
        <div className="w-8 md:w-10 h-8 md:h-10 bg-blue-500/20 rounded-lg flex items-center justify-center text-blue-500 animate-bounce">
          ⚡
        </div>
        <div className="w-8 md:w-10 h-8 md:h-10 bg-green-500/20 rounded-lg flex items-center justify-center text-green-500 animate-bounce [animation-delay:0.2s]">
          $
        </div>
        <div className="w-8 md:w-10 h-8 md:h-10 bg-purple-500/20 rounded-lg flex items-center justify-center text-purple-500 animate-bounce [animation-delay:0.4s]">
          {"</>"}
        </div>
      </div>
    </div>
  );
};

export default HeroIllustration;