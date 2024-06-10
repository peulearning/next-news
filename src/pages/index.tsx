import { useEffect, useState } from 'react';
import NewsCard from '../components/NewsCard';

const Home = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch('/api/news')
      .then(res => {
        if (!res.ok) {
          throw new Error('Failed to fetch news');
        }
        return res.json();
      })
      .then(data => {
        setArticles(data.articles || []);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching news:', error);
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h2>Notícias</h2>
      <div className="news-grid">
        {articles.map((article, index) => (
          <NewsCard key={index} article={article} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Home;
