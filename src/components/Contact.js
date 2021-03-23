import React from 'react';
import Navigation from './Navigation';
import Footer from './Footer';
import axios from 'axios';

class Contact extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          name: '',
          email: '',
          message: ''
        }
      }
      onNameChange(e){
          this.setState({name:e.target.value})
      }
      onEmailChange(e){
          this.setState({email:e.target.value})
      }
      onMessageChange(e){
          this.setState({message:e.target.value})
      }
      handleSubmit(e){
          e.preventDefault();
          this.setState({status:"sending"});
          axios({
              method:"POST",
              url:"http://localhost:5000/contact",
              data:this.state,
          }).then((res)=>{
              if(res.data.status==="sent"){
                  alert("Message sent");
                  this.setState({name:"",email:"",message:"",status:"sent"})
              }else if(res.data.status==="failed"){
                  alert("Messages Failed")
              }
          })
      }
  render(){
    return (
        <div>
        <Navigation />
        <div className="h-80 mb-12 bg-gray-50 py-4 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
          <div className="space-y-8">
            <h1 class="mt-2 mr-4 text-center text-xl font-extrabold text-gray-900">Contact Me</h1>
          </div>
          <form className=" space-y-2  w-96 " onSubmit={this.handleSubmit.bind(this)} action="#" method="POST">
             <input type="hidden" name="remember" value="true"/>
             <div className="text-center">
               <label for="email-address" class="sr-only">Names</label>
               <input value={this.state.name} onChange={this.onNameChange.bind(this)} id="email-address" name="name" type="text" autocomplete="email" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Names"/>
             </div>
             <div>
               <label for="email-address" class="sr-only">Email address</label>
               <input value={this.state.email} onChange={this.onEmailChange.bind(this)} id="email-address" name="email" type="email" autocomplete="email" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email address"/>
             </div>
             <div>
               <label for="email-address" class="sr-only">Message</label>
               <textarea value={this.state.message} onChange={this.onMessageChange.bind(this)} id="email-address" name="email" type="email" autocomplete="email" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="write message here.."></textarea>
             </div>
             <div>
                <button type="submit" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                   Send
                </button>
             </div>
          </form>
        </div>
        <div className="mb-6 py-4 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
          <h1 class="mt-6 mr-4 text-center text-3xl font-extrabold text-gray-900">i Look forward for hearing you</h1>
        </div>
        <Footer />
        </div>
    )
  }
}

export default Contact;