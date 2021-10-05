import React from "react";
import Image from '../Atoms/Image/Image'
import BookDetails from "../Atoms/BookDetails/BookDetails";
import './style.css'

const BookCard = () => {
    return (
        <div className="card">
        <Image/>
        <BookDetails/>
        </div>
    )
}

export default BookCard