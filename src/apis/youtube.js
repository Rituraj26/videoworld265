import axios from 'axios';

const KEY = 'AIzaSyC8AaAU22zPhQoJNrd4_xXlQRjrgYkqoZc';

export default axios.create({
	baseURL: 'https://www.googleapis.com/youtube/v3',
	params: {
		part: 'snippet',
		maxResults: 10,
		key: KEY
	}
});