// write a function to retrieve a blob of json
// make an ajax request ... use 'fetch' function to make ajax request to receive information

// THE OLD WAY:

// function fetchAblums() {
// 	fetch('https://rallycoding.herokuapp.com/api/music_albums')
// 		.then((res) => res.json())
// 		.then((json) => console.log(json));
// }

const fetchAblums = async () => {
	const res = await fetch('https://rallycoding.herokuapp.com/api/music_albums');
	const json = await res.json();

	console.log(json);
};

fetchAblums();
