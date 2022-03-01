import {
  createContext,
  useContext,
  useRef,
  useState,
  useCallback,
} from "react";
import { getTopStories, getItem } from "../services/stories";
import { pickRandomElements } from "../utils/pickRandomElements";

const Context = createContext();

export const ArticlesProvider = ({ children }) => {
  const [articles, setArticles] = useState([]);
  const alreadyFetched = useRef(false);

  const fetchArticles = useCallback(() => {
    if (alreadyFetched.current === false) {
      alreadyFetched.current = true;
    } else {
      return;
    }

    getTopStories().then((ids) => {
      const randomIds = pickRandomElements(10, ids);

      const articlePromises = randomIds.map((id) => {
        return getItem(id);
      });

      return Promise.all(articlePromises).then((articles) => {
        setArticles(articles.sort((a, b) => b.score - a.score));
      });
    });
  }, []);

  const value = {
    articles,
    fetchArticles,
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export const useProvidedArticles = () => {
  return useContext(Context);
};
