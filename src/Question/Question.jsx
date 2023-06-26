import React from 'react';

const Question = () => {

    return (
        <div className='mx-5'>
           
<h1 className='text-center font-bold text-3xl  mt-10 text-accent mb-6  hover:text-black'>Question-Section  </h1>

<div className='grid grid-col   mt-7 lg:grid-cols-2 gap-5 mb-5'>
     <div className="card  w-50 bg-base-500 shadow-2xl">
  <div className="card-body">
  <h2 className="card-title text-accent text-xl">Props vs state </h2>

    <p>In React, props and state are two important concepts used to manage data and pass information between components</p>
    <p className="text-lime-600"> <span className=' text-accent '>  Props:- </span> Props are short for "properties" and are used to pass data from a parent component to a child component. They are read-only and cannot be modified by the child component. Props are typically used for information that is needed by the child component to render its content. </p>

    <p className="text-lime-600"> <span className='text-accent '>State:-  </span>       State on the other hand, is used to manage data within a component. It represents the internal state of a component, and can be updated by the component itself using the setState() method. State is typically used for information that changes within the component based on user interaction, network requests, or other events. </p>
    <p> So we say that, props are used to pass data from a parent component to a child component, while state is used to manage data within a component itself.</p>
    <div className="card-actions justify-end">
 
    </div>
  </div>
</div>

 <div className="card   w-50 bg-base-500 shadow-2xl">
  <div className="card-body">
    <h2 className="card-title text-accent  text-xl ">How does useState work?</h2>
    <p>useState  powerful feature in React that allows we to add state to our functional components and make our UIs more dynamic and interactive.It is a hook in React that allows us to add state to functional components. When we call useState with an initial value, it returns an array of two items:</p> 
    <p className="text-lime-600" > 1. The current state value
A function to update the state value</p>
     <p className="text-lime-600"> 2. A function to update the state value</p>

<p>We can use the current state value in our component just like any other variable, and we can update the state value by calling the update function with a new value.
React will automatically re-render our component whenever the state value changes, so we can use the updated state value to update our UI.
Under the hood, React uses a concept called "hooks" to manage state in functional components. Hooks allow us to use state, lifecycle methods, and other features that were previously only available in class components.
When we call useState, React creates a new "hook" for that state variable, which stores the current state value and the update function. React also keeps track of which hook belongs to which component, so that it can update the correct component when the state value changes.</p>

    <div className="card-actions justify-end">
 
    </div>
  </div>
</div>

<div className="card  w-50 bg-base-500 shadow-2xl">
  <div className="card-body">
    <h2 className="card-title  text-accent text-xl ">Purpose of useEffect other than fetching data ? </h2>
    

    <p>Although the most common use case for the useEffect hook is to fetch data, it can be used for many other purposes as well. Here are a few examples:</p>
 <p className="text-lime-600"> <span className='text-accent' > 1. Updating the document title : </span> We can use useEffect to update the document title when the component mounts or when the state changes
    </p> 

<p className="text-lime-600"> <span className=' text-accent '>2.Handling events:   </span> We can use useEffect to add event listeners to the document or window. 
    </p>
 
 <p className="text-lime-600"> <span className='text-accent   '>3.Animations:  </span> We can use useEffect to trigger animations when the component mounts or when the state changes. 
    </p> 


<p className="text-lime-600"> <span className='  text-accent '>4. Managing timers: </span> We can use useEffect to start or stop timers.
    </p> 

    <p>In general, useEffect can be used for any kind of side effect that needs to be performed when the component mounts, updates, or unmounts. By using useEffect, we can keep our component's logic in one place and avoid scattering side effects throughout our codebase.</p>

    <div className="card-actions justify-end">
 
    </div>
  </div>
</div>

<div className="card   w-50  bg-base-100 shadow-2xl">
  <div className="card-body">
    <h2 className="card-title text-accent text-xl">How Does React work? </h2>
    <p>

    React is a JavaScript library that is used for building user interfaces. React uses a component-based architecture, which means that UI elements are broken down into reusable components. When a user interacts with a React-based application, the browser sends an event to the application. React then updates the UI by modifying the state of the components. This process is called rendering. React uses a virtual DOM to efficiently update the UI. The virtual DOM is a lightweight copy of the actual DOM that React keeps in memory. When the state of a component changes, React updates the virtual DOM and then calculates the minimal set of changes required to update the actual DOM. This approach is much faster than updating the entire DOM. React also supports server-side rendering, which allows the initial rendering of the application to be done on the server rather than in the browser. This can improve performance and enable better SEO. 

    </p>

   
    <div className="card-actions justify-end">
 
    </div>
  </div>
</div>


</div>

        </div>
    );
};

export default Question;