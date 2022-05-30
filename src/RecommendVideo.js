import React from 'react';
import './Recommended.css';
import VideoCard from './VideoCard';
function RecommendVideo() {
  return (
    <div className="recommended">
        <h2>Recommended</h2>
        <div className="recommended__video">
            <VideoCard 
            title="full fetish | 2019/2023"
            views="100K Views"
            timestamp="1 day ago"
            channelImage="https://picsum.photos/200" 
            channel="Krishna"
            image="https://picsum.photos/200"
            />
            <VideoCard
            title="Valorand is noice game"
            views="500k Views"
            timestamp="5 days ago"
            channelImage="https://encrypted-tbn0.gstatic.com/images" 
            channel="Krishna"
            image="https://picsum.photos/id/237/200/300"
            />
            <VideoCard 
            title="Fool Fun"
            views="125k Views"
            timestamp="3 days ago"
            channelImage="https://picsum.photos/200/300?grayscale"
            channel="Krishna"
            image="https://picsum.photos/200/300?grayscale"
            />
            <VideoCard
            title="Be a sattu maker like niro"
            views="1M Views"
            timestamp="5 days ago"
            channelImage=""
            channel="Krishna"
            image="https://picsum.photos/seed/picsum/200/300" 
            />
            <VideoCard
            title="Musk is a Husk"
            views="55.6k Views"
            timestamp="4 days ago"
            channelImage=""
            channel="Krishna"
            image="https://picsum.photos/200/300/?blur=1"
            />
            <VideoCard
             title="Da Fuck"
             views="89.6k Views"
             timestamp="6 days ago"
             channelImage=""
             channel="Krishna"
             image="https://picsum.photos/200/300/?blur=2"
            />
            <VideoCard
             title="How to do this and that with Krishna | 2019-2022"
             views="149.6k Views"
             timestamp="8 days ago"
             channelImage=""
             channel="Krishna"
             image="https://picsum.photos/200/300/?blur=2"
            />
            <VideoCard
             title="God Bless | 2019-2022"
             views="11.6k Views"
             timestamp="1 days ago"
             channelImage=""
             channel="Krishna"
             image="https://picsum.photos/200/300/?blur=2"
            />
            <VideoCard
             title="How to do deal with dickheads | 2019-2022"
             views="79.6k Views"
             timestamp="5 hours ago"
             channelImage=""
             channel="Krishna"
             image="https://picsum.photos/200/300/?blur=2"
            />
            
        </div>
    </div>
  )
}

export default RecommendVideo