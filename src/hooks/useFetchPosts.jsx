import { useState, useEffect, useMemo } from 'react';
import apiClient from '../utils/client';

function useFetchPosts(query, reposted) {
  const [topPosts, setTopPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!query || !query.keyword) {
      setTopPosts([]);
      setLoading(false);
      setError(null);
      return;
    }

    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        

        // Fetch top posts
        const topPostsResponse = await apiClient.post(`/search-posts`, query);
        if (topPostsResponse.data.success) {
          setTopPosts(topPostsResponse.data.data.items);
        } else {
          throw new Error('Failed to fetch top posts');
        }
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [query]);

  const filteredAndSortedTopPosts = useMemo(() => {
    return (topPosts || [])
      .sort((a, b) => b.socialActivityCountsInsight.totalReactionCount - a.socialActivityCountsInsight.totalReactionCount)
      .slice(0, 3);
  }, [topPosts,reposted]);

  return { topPosts: filteredAndSortedTopPosts, loading, error };
}

export default useFetchPosts;