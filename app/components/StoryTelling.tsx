import React from 'react'
import { useTrendingEpisodesQuery } from '@/app/apis/api';
import { FaShareAlt, FaDownload} from 'react-icons/fa';
import Link from 'next/link';

const StoryTelling = () => {
  const { data, error, isLoading } = useTrendingEpisodesQuery({ page: 1, per_page: 10 });
  
      if (isLoading) return <div>Loading...</div>;
      if (error) return <div>Error loading podcasts</div>;
      console.log(data)

  return (
    <div className="p-25">
              <div className='bg-purple-100'><h1 className="text-2xl font-bold mb-4">Listen By ABR Categories</h1></div>
              <img src="Group 1476.png" className="mt-5"/>
              <div className="flex space-x-4 overflow-x-auto pb-4 scrollbar-hide">
                {Array.isArray(data) ? (
                  data?.map((podcast, index) => (
                    <Link href={`/podcast/${podcast.id}`} key={podcast.id}>
                    <div
                      key={index}
                      className="min-w-[250px] bg-white shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 flex-shrink-0"
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
                      <div className="flex space-x-4 mt-3 mb-5 ml-4">
                          <p>New episode</p>
                          <button className="text-gray-600 hover:text-blue-500">
                          <FaShareAlt title="Share" />
                          </button>
                          <button className="text-gray-600 hover:text-green-500">
                          <FaDownload title="Download" />
                          </button>
                        </div>
                    </div>
                  </Link>
                ))
              ) : (
                <p>No podcasts available</p>)
              }
              </div>

              <img
                    src="/Group 1330.png"
                    className="h-100 object-cover mt-10 scale-80 ml-5"
                />
            </div>
  )
}

export default StoryTelling