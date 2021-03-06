import React from 'react';
import Navigation from './Navigation';
import Footer from './Footer';

const Project=()=>{
    return (
        <div>
          <Navigation />
            <div className="py-12 bg-white mt-5 mb-32">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                 <div className="lg:text-center">
                   <h2 class="text-base text-indigo-600 font-semibold tracking-wide uppercase">Project works</h2>
                   <p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                           A better way to Digitize world
                   </p>
                   <p class="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                          We build all kinds of website and mobile applications and those are 4 selected from many some are still in production other 
                          arleady finished.
                          Some i builded with other Software engineers in team.
                   </p>
                 </div>
                 
                 <div className="mt-10">
                   <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                      <div className="flex">
                         <div className="flex-shrink-0">
                            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                            <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                               <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                            </svg>
                            </div>
                         </div>

                         <div className="ml-4">
                         <dt class="text-lg leading-6 font-medium text-gray-900">
                         Phantom App
                       </dt>
                       <dd class="mt-2 text-base text-gray-500">
                       Track your bus with us wherever you???re in Kigali and explore the city without going on the bus-stop lines.
                       Give us both your destination and location; we???ll help you know when the bus will pick you.
                       <a href="https://eagles-frontend.herokuapp.com/" className="text-blue-700">got to phantom app</a>
                       </dd>
                         </div>
                      </div>
                    
                      <div class="flex">
                      <div class="flex-shrink-0">
                        <div class="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                          <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                          </svg>
                        </div>
                      </div>
                      <div class="ml-4">
                        <dt class="text-lg leading-6 font-medium text-gray-900">
                          Expensify App
                        </dt>
                        <dd class="mt-2 text-base text-gray-500">
                        Expensify is a software company that develops an expense management system for personal and business use. 
                        <a href="https://tuyizere-expensify-app.herokuapp.com/" className="text-blue-700">visit Expensify</a>
                        </dd>
                      </div>
                    </div>


                    <div class="flex">
          <div class="flex-shrink-0">
            <div class="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
              <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
          </div>
          <div class="ml-4">
            <dt class="text-lg leading-6 font-medium text-gray-900">
              Personal web with blog
            </dt>
            <dd class="mt-2 text-base text-gray-500">
            A blog simply is a sort of website that mainly focuses on written content.
            Personal blogs have gained a lot of popularity with time and have become a great source of sharing experiences, 
            feelings, thoughts or even knowledge about anything and everything.
            <a href="https://anastasetuyizere.netlify.app/" className="text-blue-700">visit</a>
            </dd>
          </div>
        </div>

        <div class="flex">
          <div class="flex-shrink-0">
            <div class="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
              <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
              </svg>
            </div>
          </div>
          <div class="ml-4">
            <dt class="text-lg leading-6 font-medium text-gray-900">
              Ordery App(mobile)
            </dt>
            <dd class="mt-2 text-base text-gray-500">
            Connect your customers to Orderly from menu to kitchen in les than 10 min. 
            We???ll also save a copy of the invoice in your account for later viewing by you, your team, or your accountant.
            <a href="https://deploy-preview-8--pensive-dubinsky-9ddae0.netlify.app/" className="text-blue-700">visit Orderly app</a>
            </dd>
          </div>
        </div>

    </div>
    </div>
    </div>
    </div>
    <Footer />
    </div>
    )}


export default Project;