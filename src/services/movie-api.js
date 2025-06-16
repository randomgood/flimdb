//const API_KEY = "499ac38b0b24c90f337fce5f84dfc2fc"
//const BASE_URL = "https://api.themoviedb.org/3"

const BASE_URL = "https://imdb236.p.rapidapi.com/api/imdb"
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'ec1e2accc6mshae34662d854aaf6p105a7fjsne807b602ed47',
		'x-rapidapi-host': 'imdb236.p.rapidapi.com'
	}
};

export const getPopularMovies = async() => {
    const response = await fetch(`${BASE_URL}/most-popular-movies`, options);
    const data = await response.json();
    return data;
}

export const searchMovies = async(query) => {
    const response = await fetch(`${BASE_URL}/search?&type=movie&originalTitleAutocomplete=${query}`, options);
    const data = await response.json();
    return data.results;
}