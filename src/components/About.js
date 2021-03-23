import React from 'react';
import Navigation from './Navigation';
import Footer from './Footer';


const About=()=>{
    return (
        <div>
        <Navigation />
          <div className="h-80 mb-40 mt-4 bg-gray-50 py-2 px-2 flex sm:px-6 lg:px-8 flex ">
             <img alt="profile" src="../../profile.jpg"/>
             <div className="flex justify-evenly ml-4 ">
           <p className="block mt-4  text-base text-black sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl leading-4 text-sm">
           I love writing on update of new technology for global new digital tech in influencing the smart activities for smart people.
            As software am ready for many challenges to fullfill my dreams in solving world problems and giving solutions to people. 
           I build webite for commercial use or e-commerce or no commercial website , mobile applications development, Digital marketing 
           and new technology updates blogger.
           </p>
           <h2 className="block mt-10 font-mono text-xl italic leading-10 text-left text-gray-700 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl text-black font-bold">Anastase Tuyizere, Email:tuyizereanastasetuyizere1@gmail.com  Musanze,Rwanda</h2>
             </div>
          </div>
        <Footer />
        </div>
    )
}

export default About;