import React from 'react';

const Navbar = () => {
    return (
        <div className='mx-5'>

<div className="navbar bg-lime-200  " >
  <div className="flex-1">
    <a className="text-black font-bold normal-case text-xl"> Knowledge Cafe</a>
  </div>
  <div className="flex-none gap-2">
    
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src="https://cdn.pixabay.com/photo/2015/01/12/10/45/man-597178__340.jpg" />
        </div>

      </label>
      <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
  </div>
</div>


            
        </div>
    );
};

export default Navbar;

