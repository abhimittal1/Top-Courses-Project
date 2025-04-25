import { useState, useEffect } from "react";
import { apiUrl, filterData } from "./data";
import React from "react";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Cards from "./components/Cards";
import Spinner from "./components/Spinner";
import { toast } from "react-toastify";

const App = () => {

  const [courses, setCourses] = useState(null);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState(filterData[0].title);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(apiUrl);
        const output = await response.json();

        // saving the data into a variable

        setCourses(output.data);


      } catch (error) {
        toast.error("Something went wrong");
      }
      setLoading(false);
    };
    fetchData();
  }, []);


  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden bg-bgDark2">
      <div>
        <Navbar className="" />
      </div>
      <div>
        <Filter filterdata={filterData} category={category} setCategory={setCategory} />
      </div>
      <div className="w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h-[50vh] ">
        {
          loading ? (<Spinner />) : (<Cards courses={courses} category={category}/>)
        }
      </div>
    </div>
  );
};

export default App;
