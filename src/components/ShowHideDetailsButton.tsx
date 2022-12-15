import React, { useState } from "react";

const ShowHide = () => {
    const [clicked, setClicked] = useState(false);
    const [details, setDetails] = useState("Show Details");

    const handleShowHide = () => {
        if (clicked === false) {
            setClicked(true);
            setDetails("Hide details");
            document.getElementById("past-projects")?.classList.remove("hide");
        } else {
            setClicked(false);
            setDetails("Show Details");
            document.getElementById("past-projects")?.classList.add("hide");
        }
        // e.currentTarget.classList.remove("hide");
    };

    return (
        <button
            className="btn btn-primary btn-lg"
            id="toggle-past-projects"
            onClick={handleShowHide}
        >
            {details}
        </button>
    );
};

export default ShowHide;
