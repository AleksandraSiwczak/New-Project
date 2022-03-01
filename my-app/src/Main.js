import { Link, NavLink } from "react-router-dom";
import { useProvidedArticles } from "./contexts/ArticlesContext";
import React, { useEffect } from "react";
import "./Main.css";
import {format, fromUnixTime} from 'date-fns';


export const Main = () => {
  const { articles, fetchArticles } = useProvidedArticles();

  useEffect(() => {
    fetchArticles();
  }, [fetchArticles]);


  return (
    <>
      {articles.map((article) => {
       
        return (
          <div className="Articles" key={article.id}>
            <h1>{article.title}</h1>
            <p>Author: {article.by}</p>
            <p>Date: {format(fromUnixTime(article.time),"PPP")}</p>
          
            <p>Data: {article.time}</p>
           
            <p>Score: {article.score}</p>

            <Link to={`/details/${article?.id}`}><button>Show details</button></Link>
         
            <div className="ChartButton"><NavLink to="/chart"></NavLink></div>
          </div>
        );
      })}
    </>
  );
};
