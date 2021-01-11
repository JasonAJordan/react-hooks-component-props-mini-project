import React from "react";
import Article from "./Article"

function ArticleList({posts}){

    const articles = posts.map((article) => (
        <Article 
        date={article.date} 
        key={article.id} 
        minutes={article.minutes} 
        preview={article.preview} 
        title={article.title}/>
    ));

    return (
        <main>{articles}</main>
    )
}

export default ArticleList;