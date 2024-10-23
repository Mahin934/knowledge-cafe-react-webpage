import PropTypes from 'prop-types';
import { IoBookmarkOutline } from "react-icons/io5";

const Blog = ({blog, handleBookmark,handleMarkedTime}) => {
     const{id,title,cover,author_img,author,reading_time,posted_date, hashtag}=blog;
    return (
        <div className='mb-10'>
            <img className='rounded-lg' src={cover} alt="" />
             <div className='flex justify-between items-center'>
                <div className='py-7'>
                    <div className='flex space-x-6 items-center'><img className='w-14 h-14 lg:w-16 lg:h-16 rounded-full' src={author_img} alt="" />
                    <div>
                        <h3 className='text-xl font-bold'>{author}</h3>
                        <p className='text-xs text-[rgba(17,17,17,0.6)]'>{posted_date}</p>
                    </div>
                    </div>
                </div>
                <div className='flex'>
                     <span className='text-[rgba(17,17,17,0.6)] text-xl'>{reading_time} min read</span>
                     <button onClick={()=>handleBookmark(blog)}><IoBookmarkOutline className='w-7 h-7 ml-5'></IoBookmarkOutline></button>
                </div>
             </div>
            <h3 className='text-3xl'>{title}</h3>
            <p className='text-[rgba(17,17,17,0.6)] text-[14px] py-4'>
                {
                    hashtag.map((hash,idx)=> <span key={idx}><a href="">{hash}</a></span>)
                }
            </p>
            <button onClick={()=>handleMarkedTime(id, reading_time)} className='text-[rgb(96,71,236)] underline'>Mark as read</button>
        </div>
    );
};

Blog.propTypes ={
    blog: PropTypes.object.isRequired,
    handleBookmark: PropTypes.func,
    handleMarkedTime: PropTypes.func
}

export default Blog;