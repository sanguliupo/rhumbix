let data = [];

fetch(
	'https://cors-anywhere.herokuapp.com/http://api.giphy.com/v1/gifs/search?q=[KEYWORD_HERE]&api_key= DLCVuTK6KZExOS7JoMq82bi5MaI6EbWO&limit=1'
)
	.then(response => response.json())
	.then(rawdata => (data = rawdata.data));
