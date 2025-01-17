import React, { useState, useEffect } from 'react'
// Import Pieces to show each art piece
import Pieces from './Pieces'

const Art = (props) => {

    // State that holds all objects from Server
    const [art, setArt] = useState([])
    // useEffect that access the Server API
    useEffect(() => {
        fetch('http://localhost:8000/pieces')
        .then(res => res.json())
        .then(foundPieces=>{
            // Sets API data to state allArt
            setArt(foundPieces.pieces)
        })
    }, [])

    // Maps art state and passes info from object to Pieces component
    const pieces = art.map(a=>{
        return <Pieces
            key={a._id}
            title = {a.title}
            artist = {a.artist}
            imgUrl = {a.imgUrl}
            description = {a.description}
            price = {a.price}
        />
    })

    return (
        <div>
            {pieces}
        </div>
    )
}

export default Art