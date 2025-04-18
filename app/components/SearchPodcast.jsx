'use client';
import { useState } from "react";
import { useSearchPodcastsQuery } from "@/app/apis/api"; // Adjust the path as needed
import { FaShareAlt, FaDownload, FaPlay } from "react-icons/fa";
import Link from 'next/link';



const SearchPodcasts = () => {
    const [searchTerm, setSearchTerm] = useState('The Joe Rogan Experience');
    const [page, setPage] = useState(1);
    const perPage = 20;
  
    const { data, isLoading, error } = useSearchPodcastsQuery({ query: searchTerm, page, per_page: perPage });
    
  
    if (isLoading) return <p className="text-center mt-10">Loading...</p>;
    if (error) return <p className="text-center mt-10 text-red-500">Something went wrong</p>;

    console.log(data)

    const handlePrev = () => {
      if (page > 1) setPage(page - 1);
    };
  
    const handleNext = () => {
        setPage(page + 1);
    };
  
    return (
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-6 ml-10">ALL PODCASTS</h1>

        <hr className="bg-slate-300 m-5"/>
  
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 p-10">
          {Array.isArray(data) ? (
            data.map((podcast, index) => (
            <Link href={`/podcast/${podcast.id}`} key={podcast.id}>
            <div
              key={index}
              
              className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow relative"
            >
              <img
                src={podcast.picture_url}
                alt={podcast.title}
                className="w-70 h-80 object-cover ml-4"
              />
  
  
              <div className="p-4">
                <h2 className="text-lg font-semibold truncate mb-2">{podcast.title}</h2>
                <p className="text-sm text-gray-500">
                  {new Date(podcast.created_at).toLocaleDateString()}
                </p>
                <div className="flex items-center space-x-3 mt-3">
                  {/* Play Button - centered on image */}
              <button className=" bg-white p-3 rounded-full shadow hover:scale-110 transition">
                <FaPlay className="text-red-600" />
              </button>
                  <button className="text-gray-600 hover:text-blue-500">
                    <FaShareAlt title="Share" />
                  </button>
                  <button className="text-gray-600 hover:text-green-500">
                    <FaDownload title="Download" />
                  </button>
                </div>
              </div>
            </div>
            </Link>
            ))
          ) : (
            <p>No podcasts available</p>)
            }
        </div>
  
        {/* Pagination */}
        <div className="flex justify-center items-center gap-4 mt-8">
          <button
            onClick={handlePrev}
            disabled={page === 1}
            className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400 disabled:opacity-50"
          >
            Prev
          </button>
          <span className="text-lg font-semibold">{page}</span>
          <button
            onClick={handleNext}
            // disabled={data?.length < perPage}
            className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400 disabled:opacity-50"
          >
            Next
          </button>
        </div>
        <hr className="bg-slate-300 m-5"/>
      </div>
    );
};
        

export default SearchPodcasts