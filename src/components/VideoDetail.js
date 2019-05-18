import React from 'react';
import './VideoDetail.css';

const VideoDetail = ({video}) => {
	
	if(!video) {
		return <div></div>
	}

	const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

	return (
		<div className="video__detail--container">
			<iframe width="100%" height="600px" title="video player" src={videoSrc} />
			<h1>{video.snippet.title}</h1>
			<p>{video.snippet.description}</p>
		</div>
	);

}

export default VideoDetail;