// import gsap from "gsap";
// import { useEffect } from "react";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/zoom";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Zoom, Navigation, Pagination } from "swiper/modules";

function Page5() {
  // Register ScrollTrigger plugin with GSAP
  // useEffect(() => {
  //   gsap.registerPlugin(ScrollTrigger);

  //   // ScrollTrigger animation for the last div to hide when scrolling
  //   gsap.fromTo(
  //     ".animated-div", // Target the last div
  //     { opacity: 1 }, // Start opacity (fully visible)
  //     {
  //       opacity: 0, // End opacity (hidden)
  //       x: "200%", // Optionally move it to the right (out of view)
  //       duration: 2, // Duration of the animation
  //       ease: "power3.out", // Easing function for smooth movement
  //       scrollTrigger: {
  //         trigger: ".animated-div", // When the element starts to scroll into view
  //         start: "top 25%", // Trigger when the top of the element reaches 80% of the viewport
  //         end: "bottom top", // End when the bottom of the element reaches the top of the viewport
  //         scrub: true, 
  //         onEnter: () => gsap.set(".animated-div", { opacity: 1 }),
  //       },
  //     }
  //   );
  // }, []);

  return (
    <div className="bg-black w-full relative text-white py-10">
      <div className="hidden sm:inline-block">
        {/* Title Section */}
        <div className="text-center mb-10">
          <div className="relative inline-block">
            <p className="text-[#ff6236] tracking-tight font-[BlenderProBook, sans-serif] text-md uppercase">
              NIGHT CITY&apos;S MOST WANTED
            </p>
            <div
              className="absolute bottom-0 left-0 w-full h-[2px] bg-white"
              style={{
                clipPath: "polygon(0 0, 70% 0, 110% 110%, 0% 100%)",
              }}
            ></div>
          </div>

          <h2
            className="text-3xl mt-2 md:text-5xl uppercase tracking-tight font-[Refinery-25, sans-serif] font-extrabold "
            style={{
              textShadow: "4px 4px 4px rgba(128, 128, 128, 0.7)",
            }}
          >
            CHARACTERS
          </h2>
        </div>

        {/* Characters Section */}
        <div className="flex cursor-pointer flex-wrap justify-center items-center gap-8">
          {/* Character Cards */}
          {[
            {
              name: "DAVID",
              image:
                "https://www.cyberpunk.net/build/images/edgerunners/characters/david@2x-e48d9f8a.png",
            },
            {
              name: "LUCY",
              image:
                "https://www.cyberpunk.net/build/images/edgerunners/characters/lucy@2x-f567c8f4.png",
            },
            {
              name: "REBECCA",
              image:
                "https://www.cyberpunk.net/build/images/edgerunners/characters/rebecca@2x-6a96c002.png",
            },
            {
              name: "MAINE",
              image:
                "https://www.cyberpunk.net/build/images/edgerunners/characters/maine@2x-bcad6bcd.png",
            },
            {
              name: "FARADAY",
              image:
                "https://www.cyberpunk.net/build/images/edgerunners/characters/faraday@2x-20b9d84c.png",
            },
            {
              name: "ADAM SMASHER",
              image:
                "https://www.cyberpunk.net/build/images/edgerunners/characters/smasher@2x-15b250cf.png",
            },
          ].map((character, index) => (
            <div key={index} className="flex  flex-col items-center">
              {/* Character Image */}
              <img
                src={character.image}
                alt={character.name}
                className="h-80 w-auto object-contain"
              />
              {/* Character Name */}
              <button className="px-8 py-2 bg-black border hover:bg-[#ff6236] hover:text-white text-[#ff6236] border-[#ff6236] rounded-br-2xl text-center  shadow-[0px_-10px_10px_rgba(0,0,0,0.8)]">
                {character.name}
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="sm:hidden">
        <Swiper
          style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
          }}
          zoom={true}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          modules={[Zoom, Navigation, Pagination]}
          className="mySwiper"
        >
          {[
            {
              image:
                "https://www.cyberpunk.net/build/images/edgerunners/characters/david@2x-e48d9f8a.png",
              name: "DAVID",
            },
            {
              image:
                "https://www.cyberpunk.net/build/images/edgerunners/characters/lucy@2x-f567c8f4.png",
              name: "LUCY",
            },
            {
              image:
                "https://www.cyberpunk.net/build/images/edgerunners/characters/rebecca@2x-6a96c002.png",
              name: "REBECCA",
            },
            {
              image:
                "https://www.cyberpunk.net/build/images/edgerunners/characters/maine@2x-bcad6bcd.png",
              name: "MAINE",
            },
            {
              image:
                "https://www.cyberpunk.net/build/images/edgerunners/characters/faraday@2x-20b9d84c.png",
              name: "FARADAY",
            },
            {
              image:
                "https://www.cyberpunk.net/build/images/edgerunners/characters/smasher@2x-15b250cf.png",
              name: "ADAM SMASHER",
            },
          ].map((character, index) => (
            <SwiperSlide key={index}>
              <div className="swiper-zoom-container flex flex-col">
                <img id="pp" src={character.image} />
                <button className="px-8 py-2 bg-black border hover:bg-[#ff6236] hover:text-white text-[#ff6236] border-[#ff6236] rounded-br-2xl text-center  shadow-[0px_-10px_10px_rgba(0,0,0,0.8)]">
                  {character.name}
                </button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Last Div with ScrollTrigger animation */}
      {/* <div className="absolute  top-8 h-full w-full bg-white animated-div">
        <video loop autoPlay muted controls src="/edit.mp4" className="w-full h-full object-cover rounded-md">

        </video>
      </div> */}
    </div>
  );
}

export default Page5;
