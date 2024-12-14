import { useEffect, useRef } from 'react';
import gsap from 'gsap';

function Page2() {
  const imageContainerRef = useRef(null);
  const images = [
    "https://images3.alphacoders.com/133/1337069.jpeg",
    "https://wallpapercave.com/wp/wp6736059.jpg", 
    "https://wallpaper.forfun.com/fetch/70/70724449c316c96e25b5a2f2f7bcbd26.jpeg?w=1000&r=0.5625",
    "https://wallpaper.forfun.com/fetch/b4/b4bcce933eecb2f04fe4e83a5c424c7c.jpeg?w=1000&r=0.5625"
  ];

  useEffect(() => {
    const container = imageContainerRef.current;
    const imgElements = container.querySelectorAll('img');
    
    gsap.set(imgElements, { opacity: 0 });
    gsap.set(imgElements[0], { opacity: 1 });
    
    const timeline = gsap.timeline({ repeat: -1 });
    
    imgElements.forEach((_, index) => {
      if (index < imgElements.length - 1) {
        timeline.to(imgElements[index], { 
          opacity: 0, 
          duration: 1,
          delay: 2
        })
        .to(imgElements[index + 1], { 
          opacity: 1, 
          duration: 1 
        }, '<');
      } else {
        timeline.to(imgElements[index], { 
          opacity: 0, 
          duration: 1,
          delay: 2
        })
        .to(imgElements[0], { 
          opacity: 1, 
          duration: 1 
        }, '<');
      }
    });

    return () => timeline.kill();
  }, []);

  return (
    <div className='h-full w-full p-4 bg-gradient-to-t from-white to-black sm:p-6 md:p-8 lg:p-10'>
      <h1 className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl uppercase text-white mt-5 sm:mt-8 md:mt-10 font-bold font-['Refinery-25,sans-serif'] px-2">
        Get the Ultimate Cyberpunk <br className="hidden sm:block" /> 2077 Experience
      </h1>
      
      <div className="grid h-full w-full grid-cols-2 mt-5 sm:mt-8 md:mt-10">
        <div ref={imageContainerRef} className="relative overflow-hidden">
          {images.map((src, index) => (
            <img 
              key={index}
              src={src}
              alt={`Cyberpunk 2077 Screenshot ${index + 1}`}
              className="w-full h-full object-cover absolute top-0 left-0"
            />
          ))}
        </div>
        <div className="overflow-hidden">
          <video
            src="./cyber.mp4"
            autoPlay
            muted
            loop
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  )
}

export default Page2