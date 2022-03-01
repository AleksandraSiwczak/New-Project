export const getTopStories = () => {
	return fetch(`https://hacker-news.firebaseio.com/v0/topstories/.json`).then(
	  (response) => response.json()
	);
  };
  
  export const getItem = (itemId) => {
	return fetch(
	  `https://hacker-news.firebaseio.com/v0/item/${itemId}.json`
	).then((res) => res.json());
  };
  