import React from 'react';
import './VideoItem.css';

const VideoItem = ({video, onVideoSelect}) => {
	return (
		<div className="video__item--container" onClick={() => onVideoSelect(video)}>
			<img 
				src={video.snippet.thumbnails.medium.url}
				alt={video.snippet.title}
			/>
			<h4>{video.snippet.title}</h4>
			<h5>{video.snippet.channelTitle}</h5>
		</div>
	);
}

export default VideoItem;