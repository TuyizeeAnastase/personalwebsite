import React from 'react';

const Navigation=()=>{
    return (
        <div>
        <div className="bg-gray-800">
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-20">
               <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-20">
                  <a href="/#" class="bg-gray-900 text-white px-3 py-2 rounded-md text-lg font-bold italic">Home</a>
                  <a href="/#" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-lg font-bold italic">Abouts</a>
                  <a href="/#" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-lg font-bold italic">Projects</a>
                  <a href="/#" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-lg font-bold italic">Contact</a>
                  </div>
               </div>
            </div>
          </div>
        </div>
        <div className="sm:hidden" id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1">
      <a href="/#" className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium">Home</a>
      <a href="/#" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Abouts</a>
      <a href="/#" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Projects</a>
      <a href="/#" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Contact</a>
    </div>
  </div>
        </div>
    )
}

export default Navigation;