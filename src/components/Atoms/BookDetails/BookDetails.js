import React from "react";
import './style.css';

const BookDetails = () => {
    return (
        <div className="thumbnail">
            <div id="title">Building an Inclusive Organisation</div>
            <div id="authors">Stephen Frost, Raafi-Karim...</div>
            <div className="reads">
                <div>15-minute read</div>
                <div>17.1k reads</div>
            </div>
            <div id="more">...</div>
        </div>
    )
}

export default BookDetails