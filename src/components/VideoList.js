import React from 'react';
import VideoItem from './VideoItem';
import './VideoList.css';

const VideoList = ({videos, onVideoSelect}) => {
	
	const renderedList = videos.map(video => {
		return (
			<VideoItem 
				key={video.id.videoId}
				onVideoSelect={onVideoSelect}
				video={video}
			/>
		)
	});
	
	if(videos.length === 0) {
		return <div></div>;
	}
	
	return (
		<div className="video__list--container">
			<div className="video__list--heading">
				<h2 className="heading-2">Similar Videos</h2>
			</div>
			<div className="video__list--lists">
				{renderedList}
			</div>
		</div>
	);

}

export default VideoList;