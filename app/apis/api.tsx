import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

type GetPostsQueryArgs = {
  page?: number;
  per_page?: number;
};

interface TopCategoryQueryArgs {
  category: string;
}

export interface Episode {
  id: number;
  podcastId: number;
  title: string;
  content_url: string;
  season: string | null;
  created_at: string;
  picture_url: string;
  description: string;

  // Add more fields as needed
}

export interface PaginatedEpisodes {
  current_page: number;
  data: Episode[];
  first_page_url: string;
  from: number;
  last_page: number;
  last_page_url: string;
  links: any[]; // you can make this more specific if needed
  next_page_url: string | null;
  path: string;
  per_page: number;
  prev_page_url: string | null;
  to: number;
  total: number;
}

const apUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: `${apUrl}` }),
  endpoints: (builder) => ({
    trendingPodcasts: builder.query<Episode, GetPostsQueryArgs>({
      query: ({ page = 1, per_page = 15 }) =>
        `/top-podcasts?page=${page}&per_page=${per_page}`,
      transformResponse: (response: { data: { data: Episode } }) => response.data.data,
    }),
    trendingEpisodes: builder.query<Episode, GetPostsQueryArgs>({
      query: ({ page, per_page }) =>
        `/popular-and-trending-podcasts?page=${page}&per_page=${per_page}`,
      transformResponse: (response: { data: { data: Episode } }) => response.data.data,
    }),
    topCategories: builder.query<Episode, TopCategoryQueryArgs>({
      query: ({ category }) => `/top-categories?category=${category}`,
      transformResponse: (response: { data: { data: Episode } }) => response.data.data,
    }),
    getALLPodcasts: builder.query<Episode, GetPostsQueryArgs>({
      query: ({ page, per_page }) =>
        `/popular-and-trending-podcasts?page=${page}&per_page=${per_page}`,
      transformResponse: (response: { data: { data: Episode } }) => response.data.data,
    }),
    getPodcast: builder.query<Episode, { podcastId: number }>({
      query: ({ podcastId }) => `/podcasts/${podcastId}`,
      transformResponse: (response: { data: Episode }) => response.data,
    }),
    getPodcastEpisodes: builder.query<PaginatedEpisodes, { podcastId: number; page: number; per_page: number }>({
      query: ({ podcastId,  page, per_page }) => `${apUrl}podcasts/${podcastId}/episodes?page=${page}&per_page=${per_page}`,
      transformResponse: (response: { data: PaginatedEpisodes }) => response.data,
    }),
    getEpisode: builder.query<Episode, { episodeId: number }>({
      query: ({ episodeId }) => `${apUrl}episodes/${episodeId}`,
      transformResponse: (response: { data: Episode }) => response.data,
    }),
    searchPodcasts: builder.query<PaginatedEpisodes, { query: string; page?: number; per_page?: number }>({
      query: ({ query, page = 1, per_page = 15 }) =>
        `/podcast/search?q=${encodeURIComponent(query)}&page=${page}&per_page=${per_page}`,
    }),
  }),
});

export const { useTrendingPodcastsQuery, 
  useTrendingEpisodesQuery, useTopCategoriesQuery, useGetALLPodcastsQuery, 
  useGetPodcastQuery, useGetPodcastEpisodesQuery, useGetEpisodeQuery, 
  useSearchPodcastsQuery } = api;