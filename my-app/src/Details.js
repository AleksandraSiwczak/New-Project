import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getItem } from "./services/stories";
import DOMPurify from 'dompurify';

export const Details = () => {
  const { articleId } = useParams();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    getItem(articleId).then((article) => {
      const commentIds = article.kids;

      const commentPromises = commentIds?.map((id) => {
        return getItem(id);
      });

      return Promise.all(commentPromises  ?? []).then((comments) => {
        setArticle({
          ...article,
          comments,
        });
      });
    });
  }, [articleId]);

  return (
    <>
      {article && (
        <div>
          <h1>{article.title}</h1>
          <p>Author: {article.by}</p>
          <p>Date: {article.time}</p>
          <p>Score: {article.score}</p>
         <a href={article.url} target="_blank" rel="noopener noreferrer">Open link</a>
          <ul>
            {article.comments.map((comment) => {
             
              return (
                <li
                  key={comment.id}
                  dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(comment?.text)}}
                />
              );
             
            })}
          </ul>
        </div>
      )}
      <div></div>
    </>
  );
};
