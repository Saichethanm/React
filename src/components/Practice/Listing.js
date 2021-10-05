import React from "react";

function Listing() {
    let list = ["One", "Two", "Three"]

    return list.map((item,a) => <h1>{a} {item}</h1>)
}

export default Listing