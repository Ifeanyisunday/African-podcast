'use client';
import React from 'react'
import { use } from 'react';
import Navbar from '@/app/components/Navbar'
import Hero1 from '@/app/components/Hero1'
import { useGetEpisodeQuery } from '@/app/apis/api'
import { FaPlay, FaDownload, FaShareAlt } from 'react-icons/fa';
import Listen from '@/app/components/keepListening';
import Connect from '@/app/components/Connect';

interface Props {
    params: { id: string };
  }

  function EpisodePage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = use(params); // Unwrapping the params Promise
    const episodeId = Number(id);

    const { data: episode, isLoading, error } = useGetEpisodeQuery({ episodeId });

    if (isLoading) return <p className="text-center mt-10">Loading...</p>;
    if (error || !episode) return <p className="text-center mt-10 text-red-500">Episode not found</p>;

    console.log(episode)
  
    return (
        <>
            <Navbar/>
            <Hero1/>
            <div className="bg-gradient-to-br from-black via-gray-800 to-gray-600 flex flex-col lg:flex-row items-start gap-8 mb-10 h-120">
                <img src={episode.picture_url}alt={episode.title}
                    className="w-full max-w-sm object-cover shadow ml-30 mt-10"
                />
                <div className='<div className='mt-15>
                    <p className="text-white text-sm mb-6">{new Date(episode.created_at).toLocaleDateString()}</p>
                    <h1 className="text-white font-bold mb-4">{episode.title}</h1>
                    <p className="text-white mb-4">{episode.description}</p>
            
                    <audio controls className=" w-200 mt-15">
                        <source src={episode.content_url} type="audio/mpeg" />
                    </audio>
            
                    <div className="flex space-x-4 mt-8">
                        <button className="p-3 rounded-full shadow hover:scale-110 transition bg-white">
                            <FaPlay className="text-red-600" />
                        </button>
                        <a
                            href={episode.content_url}
                            download
                            className="p-3 rounded-full shadow hover:text-green-600 transition text-gray-600"
                        >
                            <FaDownload title="Download" />
                        </a>
                        <button className="p-3 rounded-full shadow hover:text-blue-600 transition text-gray-600">
                            <FaShareAlt title="Share" />
                        </button>
                    </div>
                </div>
            </div>
            <div className='scale-80 mr-40'>
                <Listen/>
            </div>

            <Connect/>
            
        </>
    );
}

export default EpisodePage