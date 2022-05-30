import React from 'react'
import "./VideoCard.css"
import { Avatar } from '@mui/material'

function VideoCard({ image , title , views , channel , timestamp , channelimage}) {
  return (
    <div className="videocard">
        <img className="VideoCard__thumbnail" src={image} alt="" />
        <div className="video__info">
            <Avatar className="video__avatar" alt="" src={channelimage} />
        
        <div className="video__text">
          <h4>{title}</h4>
          <p>{channel}</p>
          <p>
            {views} • {timestamp}
          </p>
        </div>
        </div>
    </div>
  )
}

export default VideoCard