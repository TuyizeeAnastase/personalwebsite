import React from 'react';

const Content=()=>{
 
    return (
        <div className="mb-24">
        <div className="flex justify-evenly ml-8 mt-8 ">
           <img alt="web" src="../../web.jpg" className="w-1/4 h-1/4"/>
           <img alt="web" src="../../app.jpg" className="w-1/4 h-1/4" />
           <img alt="web" src="../../marketing.jpg" className="w-1/4 h-1/4" />
        </div>
        <div className="flex justify-evenly ml-8 mt-8 ">
           <h1 className="ml-32 mt-8 text-base font-serif italic font-medium leading-6 ">Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.
           Elit sunt amet fugiat veniam occaecat fugiat aliqua.</h1>
           <h1 className="ml-32 mt-8 ">Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.
           Elit sunt amet fugiat veniam occaecat fugiat aliqua.</h1>
           <h1 className="ml-32 mt-8 mr-24">Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.
           Elit sunt amet fugiat veniam occaecat fugiat aliqua.</h1>
        </div>
        </div>
    )

}
export default Content;