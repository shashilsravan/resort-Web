import React from 'react'
import loadingGif from '../images/gif/832.gif'

function Loading() {
    return (
        <div className="loading">
            <h4>Rooms data is loading...</h4>
            <img src={loadingGif} alt="Loading..." />
        </div>
    )
}

export default Loading
