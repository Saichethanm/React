import React from "react";

const Hello = () => {
    // return (
    //     <div>
    //         <h1>Hello world</h1>
    //     </div>
    // )

    // return React.createElement("div", null, "Hello this is from without jsx")
    return React.createElement("div", null, React.createElement("h1", null, "Hello this is from without jsx"))
}

export default Hello