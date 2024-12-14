
function Page4() {
  return (
<div>
<div className=' h-full  text-white mt-10 w-full p-4  sm:p-6 md:p-8 lg:p-10'>
    {/* <h1 className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl uppercase text-white mt-5 sm:mt-8 md:mt-10 font-bold font-['Refinery-25,sans-serif'] px-2">
      Get the Ultimate Cyberpunk <br className="hidden sm:block" /> 2077 Experience
    </h1> */}
    
    <div className=" h-full hidden md:grid w-full grid-cols-1 md:grid-cols-2 mt-5 sm:mt-8 md:mt-10">
      <div  className="relative">
        
         <img  className="w-full h-full object-cover " src="https://cdn.dribbble.com/userupload/13395641/file/original-e3f3aadeee5438aaaf1369f815814271.png?resize=1024x768&vertical=center" alt="" />

      </div>
      <div className="overflow-hidden flex mt-36 justify-center">
       <h1 className="text-center text-md sm:text-xl md:text-2xl lg:text-4xl uppercase text-white mt-5  font-bold font-['Refinery-25,sans-serif'] px-2">
         Get the Ultimate Cyberpunk <br className="hidden sm:block" /> 2077 Experience
       </h1>
      </div>
    </div>
  </div>


  <div className=" h-full md:hidden relative grid w-full grid-cols-1 md:grid-cols-2  sm:mt-8 md:mt-10">

      <div className="overflow-hidden top-1  flex justify-center">
       <h1 className="text-center text-md sm:text-xl md:text-2xl lg:text-4xl uppercase text-white mt-5 sm:mt-8 md:mt-10 font-bold font-['Refinery-25,sans-serif'] px-2">
         Get the Ultimate Cyberpunk <br className="hidden sm:block" /> 2077 Experience
       </h1>
      </div>
      <div  className="relative">
        
        <img  className="w-full h-full object-cover " src="https://cdn.dribbble.com/userupload/13395641/file/original-e3f3aadeee5438aaaf1369f815814271.png?resize=1024x768&vertical=center" alt="" />

     </div>
    </div>  
</div>
  )
}

export default Page4