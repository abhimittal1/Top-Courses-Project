import React, { useState } from "react";
import Card from "./Card";
const Cards = ({ courses, category }) => {

    // TO keep the track of the like and the unlike courses
    const [likedCourses, setLikeCourses] = useState([]); // initially empty array



    // we have the data in the filter format like lifestyle have 3 business have 5 but we want all in one so making the function for that
    const getCourses = () => {

        if (category === "All") {

            // making the empty array to put the data in by the help of the function
            let allCourses = [];
            Object.values(courses).forEach((courseCategory) => {
                courseCategory.forEach((course) => {
                    allCourses.push(course);
                });
            });
            return allCourses;
        }
        else {
            // only the selected data
            return courses[category];
        }
    }

    return (

        <div className="flex flex-wrap justify-center gap-4 mb-4">
            {(!courses) ? (<div>
                <p>NO data found</p>
            </div>) : (getCourses().map((course) => {
                return <Card key={course.id} course={course} likedCourses={likedCourses} setLikeCourses={setLikeCourses} />
            }))}
        </div>
    );
};
export default Cards;