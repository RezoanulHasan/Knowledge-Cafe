import React from 'react';
import BlogCard from './Bolgcard/BlogCard';
import Footer from './Footer/Footer';
import Navbar from './Navbar/Navbar';
import Question from './Question/Question';



const App = () => {
  return (

<div>
<Navbar></Navbar>
<BlogCard></BlogCard>
<Question> </Question>
<Footer></Footer>
</div>
  );
};

export default App;