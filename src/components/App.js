import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import './App.css';

class App extends React.Component {

	state = {videos: [], videoSelected: null};

	onFormSubmit = async term => {
		const res = await youtube.get('/search', {
			params: {
				q: term
			}
		});
		this.setState({
			videos: res.data.items,
			videoSelected: res.data.items[0]
		});
	}

	onVideoSelect = video => {
		this.setState({videoSelected: video});
	}

	render() {

		return (
			<div className="container">
				<SearchBar onFormSubmit={this.onFormSubmit} />
				<VideoDetail video={this.state.videoSelected} />
				<VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect} />
			</div>
		);
	}

}

export default App;