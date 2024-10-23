import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";


const Bookmarks = ({bookmarks,readingTime}) => {
    return (
        <div className="md:w-1/3 mt-8  ">
            <div className="text-[rgb(96,71,236)] bg-[rgba(96,71,236,0.1)] text-xl text-center lg:text-2xl font-bold p-3 lg:p-6 mb-4 rounded-lg">
                <h3>Spent time on read : {readingTime} min</h3>
            </div>
            <div className="lg:p-10 bg-[rgba(17,17,17,0.05)] rounded-lg lg:h-1/2  p-4">
            <h3 className="text-xl lg:text-3xl font-bold mb-4 lg:mb-7">Bookmarked Blogs: {bookmarks.length}</h3>
            {
                    bookmarks.map((bookmark, idx) => <Bookmark key={idx} bookmark={bookmark}></Bookmark>)
            }
            </div>
        </div>
    );
};

Bookmarks.propTypes ={
    bookmarks: PropTypes.array,
    readingTime: PropTypes.number
}

export default Bookmarks;