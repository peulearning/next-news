import React from 'react';
import Link from 'next/link';

interface Article {
  title: string;
  urlToImage?: string;
  author?: string;
  publishedAt?: string;
}

interface Props {
  article: Article;
  index: number;
}

const NewsCard: React.FC<Props> = ({ article, index }) => {
  return (
    <div className="card">
      <Link href={`/article/${index}`} legacyBehavior>
        <a>
          <h3>{article.title}</h3>
          {article.urlToImage && <img src={article.urlToImage} alt={article.title} />}
          {article.author && <p>Autor: {article.author}</p>}
          {article.publishedAt && <p>Data: {new Date(article.publishedAt).toLocaleDateString()}</p>}
        </a>
      </Link>
    </div>
  );
};

export default NewsCard;
