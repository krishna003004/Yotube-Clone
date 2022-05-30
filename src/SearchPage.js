import React from 'react'
import './SearchPage.css'
import TuneIcon from '@mui/icons-material/Tune';
import ChannelRow from './ChannelRow';
import VideoRow from './VideoRow';

function SearchPage() {
  return (
    <div className="searchPage">
        <div className="searchPage__filter">
            <TuneIcon />
            <h2>Filter</h2>
        </div>
        <hr />

        <ChannelRow
        image="https://avatars.dicebear.com/v2/female/e66cfa1e541bdd6fe6abea43d54501b0.svg"
        Channel="Krishna"
        verified
        subs="100K"
        noOfVideoes={10}
        description="Hey Bro who got you smiling like that. I think thats probably me if I am not wrong right ?..." 
        />
        <hr />

        <VideoRow 
          views="1.2M"
          subs="393K"
          description="Learn this free tutorial in 1 hour | for beginners"
          timestamp="1 minute ago"
          channel="Krishna"
          title=" ♦ Lets build youtube clone"
          image="https://picsum.photos/200"
        />
        <VideoRow 
          views="1.2M"
          subs="393K"
          description="Complete fetish course for free in simple language 1 hour course | for beginners"
          timestamp="10 days ago"
          channel="Krishna"
          title=" ♦ Make some noise for desi boyz"
          image="https://picsum.photos/200"
        />
        <VideoRow 
          views="1.2M"
          subs="393K"
          description="Full fetish free course for uselessness for complete beginners | 2022 "
          timestamp="2 days ago"
          channel="Krishna"
          title=" ♦ Lets build some fetish"
          image="https://picsum.photos/200"
        />
        <VideoRow 
          views="1.2M"
          subs="393K"
          description="What is this fetish behaviour in 1 hour | beginners"
          timestamp="10 seconds ago"
          channel="Krishna"
          title=" ♦ Lets build some litti with chokha"
          image="https://picsum.photos/200"
        />

    </div>
  )
}

export default SearchPage