import axios from 'axios'

export default function (token) {
	console.log(token);
	
	if (token) {
		console.log('ton tai');
		
		axios.defaults.headers.common['Authorization'] = 'Bearer ' + token
	} else {
		axios.defaults.headers.common['Authorization'] = null
	}
}