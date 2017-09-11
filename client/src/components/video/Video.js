import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './SearchBar';
import VideoDetail from './VideoDetail';

const API_KEY = 'AIzaSyBLQksz3JRF7dcJPy7RrWmwEFq0Y4ZpMZA';

class Video extends Component {
    constructor (props) {
        super(props);
        this.state = {
            videos: [],
            selectedVideo: null
        };
        this.videoSearch('cats');
    }
    videoSearch(term){
        YTSearch({key: API_KEY, term: term}, (videos) => {
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            });
        });
    }
    render(){
        const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 1800);
        return(
            <div>
                <SearchBar onSearchTermChange={videoSearch} />
                <VideoDetail video={this.state.selectedVideo} />
            </div>
        );
    }
}

export default Video;