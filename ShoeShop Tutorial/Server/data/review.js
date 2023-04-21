import ReactStars from "react-rating-stars-component";
import React from "react";

const review = [
    {
        _id: "1",
        name: "Nguyen Mang",
        rating: <ReactStars
        count={5}
        onChange={ratingChanged}
        size={24}
        activeColor="#ffd700"
      />,
        date: "17/10/2022",
        comment: "Dep vkl"
    },
    {
        _id: "2",
        name: "Tran Phuong",
        rating: <ReactStars
        count={5}
        onChange={ratingChanged}
        size={24}
        activeColor="#ffd700"
      />,
        date: "17/04/2023",
        comment: "Rat tot"
    },
    {
        _id: "3",
        name: "Nguyen My",
        rating: <ReactStars
        count={4}
        onChange={ratingChanged}
        size={24}
        activeColor="#ffd700"
      />,
        date: "17/10/2022",
        comment: "Xinh"
    }
]

export default review