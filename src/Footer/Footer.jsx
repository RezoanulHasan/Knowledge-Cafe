import React from 'react';

const Footer = () => {
    return (
        <div className='mx-5'>

<footer className="footer p-10  bg-lime-200  text-base-content mt-10">
  <div className='text-black '>
    <span className=" text-xl label ">Services</span> 
    <a className="link link-hover">Branding</a> 
    <a className="link link-hover">Design</a> 
    <a className="link link-hover">Marketing</a> 
    <a className="link link-hover">Advertisement</a>
  </div> 
  <div  className='text-black'>
    <span className="text-xl label ">Company</span> 
    <a className="link link-hover">About us</a> 
    <a className="link link-hover">Contact</a> 
    <a className="link link-hover">Jobs</a> 
    <a className="link link-hover">Press kit</a>
  </div> 
  <div className='text-black' >
    <span className="text-xl label">Legal</span> 
    <a className="link link-hover">Terms of use</a> 
    <a className="link link-hover">Privacy policy</a> 
    <a className="link link-hover">Cookie policy</a>
  </div> 
  <div  className='text-black'>
    <span className=" text-xl label">Newsletter</span> 
    <div className="form-control w-80">
      <label className="label">
        <span className="label-text text-black ">Enter your email address</span>
      </label> 
      <div className="relative">
        <input type="text" placeholder="username@site.com" className="input input-bordered w-full pr-16" /> 
        <button className="btn btn-lime absolute top-0 right-0 rounded-l-none">Subscribe</button>
      </div>
    </div>
  </div>
</footer>
            

        </div>
    );
};

export default Footer;

