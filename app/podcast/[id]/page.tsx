'use client';
import React from 'react'
import { useGetPodcastQuery, useGetPodcastEpisodesQuery } from '@/app/apis/api';
import Navbar from '@/app/components/Navbar';
import Hero1 from '@/app/components/Hero1';
import { FaShareAlt, FaDownload, FaPlay } from "react-icons/fa";
import { useState } from "react";
import Connect from '@/app/components/Connect';
import Link from 'next/link';
import { use } from 'react';

interface Props {
  params: { id: string };
}



function SinglePodcastWithEpisodes({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params); // Unwrapping the params Promise
  const podcastId = Number(id);

  const [page, setPage] = useState(1);
  const perPage = 3;

  const { data: podcast, isLoading, error } = useGetPodcastQuery({ podcastId });
  const {data: episodesData } = useGetPodcastEpisodesQuery({ podcastId, page, per_page: perPage});

  const episodes = episodesData?.data ?? [];
  if (isLoading) return <p className="text-center mt-10">Loading...</p>;
  if (error) return <p className="text-center mt-10 text-red-500">Something went wrong</p>;

  console.log(episodesData)
  const handlePrev = () => {
    if (page > 1) setPage(page - 1);
  };

  const handleNext = () => {
    if (episodes.length === perPage) setPage(page + 1);
  };
  

  return (
    <>
    <Navbar/>
    <Hero1/>
    <div className="bg-gradient-to-br from-black via-gray-800 to-gray-600 flex flex-col lg:flex-row items-start gap-8 mb-10 h-120">
      <img
        src={podcast?.picture_url}
        alt={podcast?.title}
        className="w-full max-w-sm object-cover shadow ml-30 mt-10"
      />

      <div className='mt-15'>
        <h1 className="text-3xl text-white font-bold mb-4">{podcast?.title}</h1>
        <p className="text-white text-lg">{podcast?.description}</p>

        <p className='text-white mt-10'>Available on</p>
        <div className="flex flex-wrap gap-3">
            <img src="/image 1.png" alt="App Logo" className="mt-5"/>
            <img src="/image 2.png" alt="App Logo" className="mt-5"/>
            <img src="/image 3.png" alt="App Logo" className="mt-5"/>
            <img src="/WokpaLogo.png" alt="App Logo" className="mt-5"/>
          </div>
      </div>

    </div>
    <div>
      {/* Episodes */}
      <div className="mt-10">
        <h2 className="text-xl font-semibold mb-4">Episodes</h2>
        <div className="space-y-4">
          {episodes.length > 0 ? (
            episodes.map((episode: any) => (
              <Link href={`/episode/${episode.id}`} key={episode.id}>
                <div key={episode.id} className="p-4 border rounded shadow flex flex-col lg:flex-row items-start gap-8 mb-10 h-120">
                  <img
                    src={episode.picture_url}
                    alt={episode.title}
                    className="w-full max-w-sm object-cover shadow ml-30 mt-10"
                  />
                  <div className='mt-50'>
                    <h3 className="font-semibold">{episode.title}</h3>
                    <p className="text-sm text-gray-500">{new Date(episode.created_at).toLocaleDateString()}</p>
                    <div className='flex items-center space-x-3 mt-30'>
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
            <p className="text-white">No episodes available.</p>
          )}
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

        <hr />

        <Connect />
        
      </div>
    </div>
    </>
  );
}

export default SinglePodcastWithEpisodes