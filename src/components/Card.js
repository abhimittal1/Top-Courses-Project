import React from "react";
import { FcLike,FcLikePlaceholder } from "react-icons/fc";
import { toast } from "react-toastify";

const Card = ({ course, setLikeCourses, likedCourses }) => {
    function clickHandler() {
        if (likedCourses.includes(course.id)) {
            //means liked hai this course --> need to remove it 
            setLikeCourses((prev) => prev.filter((cid) => (cid !== course.id)));
            toast.warning("Like removed");

        }
        else {
            // not liked already --> add this course to the likecourses
            if (likedCourses.length === 0) {
                setLikeCourses([course.id]);
            }
            else {
                // not-empty
                setLikeCourses((prev) => [...prev, course.id]);
            }
            toast.success("like Added");
        }
    }
    return (
        <div className="w-[300px] bg-bgDark rounded-md overflow-hidden bg-opacity-80">
            <div className="relative "  >
                <img src={course.image.url} alt="" />
                <div className="w-[40px] h-[40px] rounded-full bg-white absolute right-2 -bottom-2 flex justify-center ">
                    <button onClick={clickHandler}>
                        {likedCourses.includes(course.id) ?  (<FcLike fontSize="1.75rem" />) : (<FcLikePlaceholder fontSize="1.75rem" />)}
                        
                    </button>
                </div>
            </div>
            <div className="p-2">
                <p className="text-white font-semibold text-lg leading-6"  >{course.title}</p>
                <p className="mt-2 text-white " >
                    {course.description.length > 100 ? (`${course.description.substr(0,100)}...`) : (course.description)  }</p>
            </div>
        </div>
    );
};
export default Card;