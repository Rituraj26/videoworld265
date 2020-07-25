import React from 'react';
import VideoItem from './VideoItem';
import './VideoList.css';

const VideoList = ({ videos, onVideoSelect }) => {
    if (videos.length === 0) {
        return <div></div>;
    }

    return (
        <div className="video__list--container">
            <div className="video__list--heading">
                <h2 className="heading-2">Similar Videos</h2>
            </div>

            <div className="video__list--lists">
                {videos.map((video) => (
                    <VideoItem
                        key={video.etag}
                        onVideoSelect={onVideoSelect}
                        video={video}
                    />
                ))}
            </div>
        </div>
    );
};

export default VideoList;
