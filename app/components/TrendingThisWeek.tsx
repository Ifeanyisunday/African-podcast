import React from 'react'
import { useTrendingPodcastsQuery } from '@/app/apis/api';
import Link from 'next/link';

const TrendingWeek = () => {
    const { data, error, isLoading } = useTrendingPodcastsQuery({ page: 1, per_page: 10 });

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error loading podcasts</div>;
  
    return (
        <div className="p-25">
          <h1 className="text-2xl font-bold mb-4">Trending this week</h1>
          <img src="Group 1117.png" alt="App Logo" className="mt-5"/>
          <div className="flex space-x-4 overflow-x-auto pb-4 scrollbar-hide">
            {Array.isArray(data) ? (
              data?.map((podcast, index) => (
              <Link href={`/podcast/${podcast.id}`} key={podcast.id}>
              <div
                key={index}
                className="min-w-[250px] bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 flex-shrink-0"
              >
                <img
                  src={podcast.picture_url}
                  alt={podcast.title}
                  className="w-80 h-100 object-cover mt-10"
                />
                <div className="p-4">
                  <h2 className="text-lg font-semibold mb-2 truncate">{podcast.title}</h2>
                  <p className="text-sm text-gray-500">
                    {new Date(podcast.created_at).toLocaleDateString()}
                  </p>
                </div>
              </div>
              </Link>
            ))
          ) : (
            <p>No podcasts available</p>)
            }
          </div>
        </div>
      );
}

export default TrendingWeek

