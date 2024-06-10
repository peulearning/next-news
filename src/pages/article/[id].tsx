/* eslint-disable @next/next/no-img-element */
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const Article = () => {
  const router = useRouter();
  const { id } = router.query;
  const [article, setArticle] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (id && typeof id === 'string') {
      fetch(`/api/news`)
        .then(res => {
          if (!res.ok) {
            throw new Error('Failed to fetch article');
          }
          return res.json();
        })
        .then(data => {
          const index = parseInt(id, 10);
          if (data.articles && data.articles[index]) {
            setArticle(data.articles[index]);
          } else {
            setError('Article not found');
          }
          setLoading(false);
        })
        .catch(error => {
          console.error('Error fetching article:', error);
          setError(error.message);
          setLoading(false);
        });
    }
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div className="error">Error: {error}</div>;
  }

  if (!article) {
    return <div className="not-found">Article not found</div>;
  }

  return (
    <div className="article-card">
      <div className="article-container">
        <h1 className="article-title">{article.title}</h1>
        {article.urlToImage && <img className="article-image" src={article.urlToImage} alt={article.title} />}
        <p className="article-content">{article.content}</p>
        {article.author && <p className="article-author">Autor: {article.author}</p>}
        {article.publishedAt && <p className="article-date">Data: {new Date(article.publishedAt).toLocaleDateString()}</p>}
      </div>
    </div>
  );
};

export default Article;
