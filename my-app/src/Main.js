import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const pickRandomElements = (howMany, elements) => {
  const ids = [...elements];
  return Array.from({ length: howMany }, () => ids.splice(Math.floor((Math.random() * ids.length)), 1)[0])
}

export const Main = ({ item }) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch("https://hacker-news.firebaseio.com/v0/topstories/.json")
      .then((response) => response.json())
      .then((ids) => {
        const randomIds = pickRandomElements(10, ids);

        const articlePromises = randomIds.map((id) => {
          return fetch(
            `https://hacker-news.firebaseio.com/v0/item/${id}.json`
          ).then((res) => res.json());
        });

        return Promise.all(articlePromises).then((articles) => {
          setArticles(articles);
        });
      });
  }, []);

  console.log(articles);

  return (
    <>
      {articles?.map((article) => {
        return (
          <div key={article.id}>
            <h1><Link to={`/details/${article?.id}`}>{article?.title}</Link></h1>
            <div dangerouslySetInnerHTML={{ __html: article?.text }} />
          </div>
        );
      })}
    </>
  );
};
