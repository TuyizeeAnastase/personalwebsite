import React from 'react';

const Footer=()=>{
    return (
        <div className="bg-gray-800 ">
           <div className="flex justify-evenly ml-8 mt-8 ">
               <div className="mt-4 mb-8">
                 <h1 className="text-white italic">Get in touch</h1>
                 <p className="text-white">I love working with people. connect with so we can get started</p>
                 <h2 className="text-white">+250787499115/+250725282101</h2>
              </div>
              <div className="bg-white w-40 h-8 mb-2 mt-4 text-center content-between">
                    <a href="/#" class="fa fa-facebook text-blue-600 mr-2 "></a>
                    <a href="/#" class="fa fa-twitter text-blue-400 mr-2"></a>
                    <a href="/#" class="fa fa-linkedin text-blue-900 mr-2"></a>
                    <a href="/#" class="fa fa-github mr-2"></a>
             </div>
           </div>
        </div>
    )
}

export default Footer;