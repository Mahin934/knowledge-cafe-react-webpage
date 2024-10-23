import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from "prop-types";

const Blogs = ({handleBookmark,handleMarkedTime}) => {
    const [blogs,setBlogs] = useState([]);
     
    useEffect(()=>{
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])
 
    return (
        <div className="md:w-2/3 mt-8">
            {
                blogs.map(blog => <Blog key={blog.id} blog={blog}
                handleBookmark={handleBookmark}
                handleMarkedTime={handleMarkedTime}
                ></Blog>)
            }
        </div>
    );
};

Blogs.propTypes ={
    handleBookmark: PropTypes.func,
    handleMarkedTime: PropTypes.func

}

export default Blogs;