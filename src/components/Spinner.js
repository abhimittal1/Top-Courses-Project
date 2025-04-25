import React from "react";

const Spinner = () => {
    return (
        < div className="flex justify-center flex-col items-center space-y-3" >
            <div className="spinner"></div>
            <p className="text-lg text-bgDark font-semibold">loading...</p>
        </div >

    )

    
}
export default Spinner;