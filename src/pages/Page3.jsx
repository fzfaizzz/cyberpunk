import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Page3() {
  const textRef = useRef(null);

  useEffect(() => {
    const text = textRef.current;

    gsap.fromTo(
      text,
      {
        opacity: 0,
        y: 100,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: text,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      }
    );
  }, []);

  return (
    <div className="h-full bg-black w-full -mt-20 ">
      {/* Animated Text Section */}
      <div className="text-white mt-20 sm:mt-20 md:mt-20 px-2">
        <h1
          ref={textRef}
          className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl uppercase font-bold font-['Refinery-25,sans-serif']"
        >
          Welcome to the <br /> dark future
        </h1>
        <p  className="text-center text-xs sm:text-md md:text-lg lg:text-xl mb-5 mt-2 sm:mt-4 md:mt-4 max-w-4xl mx-auto px-4">
          <span className="font-semibold">Cyberpunk:</span> Edgerunners tells a standalone, 10-episode story about a street kid
          trying to survive in a technology and body modification-obsessed city of the future.
        </p>
      </div>

      <div className='relative '>

      {/* Image Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 md:hidden gap-4 mt-10 px-10">
        {/* Left Image */}
        <div className="relative rounded-lg overflow-hidden">
          <img
            src="https://www.cyberpunk.net/build/images/edgerunners/phase2/synopsis_2-a2ef9d2e.png" // Replace with actual image URL
            alt="Cyberpunk Scene 1"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Image */}
        <div className="relative rounded-lg overflow-hidden">
          <img
            src="https://www.cyberpunk.net/build/images/edgerunners/phase2/synopsis_1-5675c7b5.png" // Replace with actual image URL
            alt="Cyberpunk Scene 2"
            className="w-full h-full object-cover"
          />
        </div>

      </div>



      <div className="mt-10  hidden md:inline-block  h-[500px] px-10">
        {/* Left Image */}
        <div className="absolute left-10 top-0 w-[50%] z-10 h-[80%] rounded-lg overflow-hidden">
          <img
            src="https://www.cyberpunk.net/build/images/edgerunners/phase2/synopsis_2-a2ef9d2e.png"
            alt="Cyberpunk Scene 1"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Image */}
        <div className="absolute right-10 top-20 w-[60%]  h-[80%] rounded-lg overflow-hidden">
          <img
            src="https://www.cyberpunk.net/build/images/edgerunners/phase2/synopsis_1-5675c7b5.png"
            alt="Cyberpunk Scene 2"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      </div>
    </div>
  );
}

export default Page3;
