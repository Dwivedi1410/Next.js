"use client"

import { useState } from "react";

export default function Likes() {
    const [likeCount, setLikeCount] = useState(0);


    // console.log(window) 
    //Now this will give me an errorr because window is not defined in the server side.

    //similary event handlers like onClick onHover give errror beecause they are not defined in the serveer side. theese are provided on the client side => Hence to use thease type of interactivity we have to make this component "client" component

    //Note:- async await is not supported in the client component
    return(
        <div onClick={() => setLikeCount(likeCount + 1)}>{likeCount} Likes</div>
    )
}