import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import './App.css';

class App extends React.Component {
    state = { videos: [], videoSelected: null };

    onFormSubmit = async (term) => {
        try {
            const res = await axios.get(
                'https://www.googleapis.com/youtube/v3/search',
                {
                    params: {
                        q: term,
                        key: 'AIzaSyDZya8QYaq3b-NK7PDCIsVokb7QQi400WI',
                        part: 'snippet',
                        maxResults: 10,
                    },
                }
            );
            this.setState({
                videos: res.data.items,
                videoSelected: res.data.items[0],
            });
        } catch (err) {
            console.log(err);
        }
    };

    onVideoSelect = (video) => {
        this.setState({ videoSelected: video });
    };

    render() {
        return (
            <div className="container">
                <SearchBar onFormSubmit={this.onFormSubmit} />
                <VideoDetail video={this.state.videoSelected} />
                <VideoList
                    videos={this.state.videos}
                    onVideoSelect={this.onVideoSelect}
                />
            </div>
        );
    }
}

export default App;
