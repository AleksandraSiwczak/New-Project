import { NavLink, useParams } from "react-router-dom";
import { useEffect, useState } from 'react';

export const Details = () => {
  const { articleId } = useParams();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    fetch(`https://hacker-news.firebaseio.com/v0/item/${articleId}.json`)
      .then((response) => response.json())
      .then((article) => {
        const commentIds = article.kids;

        const commentPromises = commentIds.map((id) => {
          return fetch(
            `https://hacker-news.firebaseio.com/v0/item/${id}.json`
          ).then((res) => res.json());
        });

        return Promise.all(commentPromises).then((comments) => {
          setArticle({
            ...article,
            comments,
          });
        });
      });
  }, [articleId]);

  return (
    <>
      {" "}

      {article && <div><h1>{article.title}</h1>
      <ul>
        {article.comments.map(comment => {
          return <div dangerouslySetInnerHTML={{ __html: comment?.text }} />
        })}
        </ul>
      </div>}
      <NavLink to="/">
        <button>Back to home</button>
      </NavLink>
    </>
  );
};
