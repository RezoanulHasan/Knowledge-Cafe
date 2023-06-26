
import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";


//import './App.css'
import "../Bolgcard/Blogcard.css"

const jsonData = [  {    id: 1,    author: "John Doe",    title: "The Power of Positive Thinking",    coverImg: "https://cdn.pixabay.com/photo/2015/09/04/23/28/wordpress-923188__340.jpg",    authorImg: "https://cdn.pixabay.com/photo/2021/08/01/10/41/man-6514121__340.jpg",    readTime: "5 min",    publishDate: "2022-01-01 (15 month ago) ",  }, 

{    id: 2,    author: "Jane Smith",    title: "10 Tips for Better Sleep",    coverImg: "https://cdn.pixabay.com/photo/2014/12/27/15/33/office-581127__340.jpg",    authorImg: "https://cdn.pixabay.com/photo/2018/04/01/22/15/business-3282330__340.jpg",    readTime: "8 min",    publishDate: "2022-02-15  (14 month ago)",  }, 


{    id: 3,    author: "Bob Johnson",    title: "Why Fitness is Important",    coverImg: "https://cdn.pixabay.com/photo/2014/10/17/11/53/blog-492184__340.jpg",    authorImg: "https://cdn.pixabay.com/photo/2021/04/07/09/47/man-6158647__340.jpg",    readTime: "12 min",    publishDate: "2022-03-20 (13 month ago) ",  }, 


{    id: 4,    author: "Sarah Lee",    title: "The Benefits of Meditation",    coverImg: "https://cdn.pixabay.com/photo/2019/09/09/08/23/internet-4463031__340.jpg",    authorImg: "https://cdn.pixabay.com/photo/2022/03/29/10/03/man-7099152__340.jpg",    readTime: "6 min",    publishDate: "2022-04-10  (12 month ago) ",  },];


const BlogCard = () => {

    const [blogs, setBlogs] = useState(jsonData);
    const [bookmarks, setBookmarks] = useState([]);
    const [readTime, setReadTime] = useState(0);
  
    const handleMarkAsRead = (id, time) => {
      setBlogs(
        blogs.map((blog) => {
          if (blog.id === id) {
            blog.readTime = time;
          }
          return blog;
        })
      );
      setReadTime(readTime + parseInt(time));
    };
  
    const handleBookmark = (id, title, author) => {
      if (bookmarks.find((bookmark) => bookmark.id === id)) {
      
        //alert("You have already bookmarked this blog!");
   
        toast.error("You have already bookmarked this blog!");
         

      } else {
        setBookmarks([...bookmarks, { id, title, author}]);
      }
    };
  
    return (
        <div className="App mx-5  ">
          <div className="main-content grid lg:grid-cols-2 grid-cols mt-7   card w-50  bg-base-100 shadow-2xl ">

 {blogs.map((blog) => (
  <div key={blog.id} className="blog-card">
  <img src={blog.coverImg} alt="Blog cover" />
  <div className="blog-details">
    <div className="author">

   
    <div className="flex flex-initial ">
    
    <img className="w-10 h-12 rounded-full mt-1" src={blog.authorImg} alt="Author" /> 

      <span className=" text-accent " >---------------------------------{blog.readTime} read</span>

      <button  className="btn btn-accent  m-3" onClick={() => handleBookmark(blog.id, blog.title, blog.author)}>
      <FontAwesomeIcon icon={faBookmark} /> 
     
      </button>
      </div>

      
      <span className="text-accent  text-2xl" >Name: {blog.author}</span>
      </div>
    <h2 className="text-accent  text-xl" >Title- {blog.title}</h2>
    <div className="meta-data">
      
      <h2 className="text-lime-500">Publish-Date: {blog.publishDate}</h2>
    </div>
    <div className="actions">
      <button className="bt btn-link  mb-12 hover:bg-white"   onClick={() => handleMarkAsRead(blog.id, blog.readTime)}  >
        Mark as read
      </button>            
                   
                  </div>
                </div>
              </div>
            ))}


          </div>
          <div className="Sidebar mt-7   card w-50 bg-base-100 shadow-2xl ">
            <div className="read-time text-lime-500 text-xl P-5">Time spent on read: {readTime} min</div>
            <div className="bookmarks">
              <h2   className="read-time text-accent text-xl mt-4 "  >Bookmarks ({bookmarks.length})</h2>
              {bookmarks.length === 0 ? (
                <p>No bookmarks added yet.</p>
              ) : (
                <ul>
                  {bookmarks.map((bookmark) => (
                  <li className="text-accent   m-6"key={bookmark.id}>
                  <div className="flex flex-initial W-50  ">
                    <span className="bookmark-title">.{bookmark.title}</span>
             
                    <span className="bookmark-author ">- by {bookmark.author}</span>
                  </div>
                </li>
              ))}
              
              
      
                </ul>
    
    
              )}
            </div>
          </div>

          <ToastContainer />

        </div>
      );
    };



export default BlogCard;
