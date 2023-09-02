import MovieListDAO from 'common/model/movie/dao/movie-list.dao';
import { Movie } from 'common/model/movie/movie';
import { fetchMoviesService, searchMovieService } from 'common/service';
import { useCallback, useEffect, useState } from 'react';
import debounce from 'lodash/debounce';

export const useViewModel = () => {
  const [pagination, setPagination] = useState({ page: 1, totalPage: 0 });
  const [movies, setMovies] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSeachInput = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchInput = e.target.value.trim();
    setIsLoading(true);
    setMovies([]);
    setSearchTerm(searchInput);
    debounchMovieSearch(searchInput);
  };

  const handleMovieSearch = (value: string) => {
    setPagination({ page: 1, totalPage: 0 });

    if (value) {
      fetchSearchedMovie(value);
    } else {
      fetchMovies();
    }
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debounchMovieSearch = useCallback(debounce(handleMovieSearch, 800), []);

  const fetchSearchedMovie = async (value: string) => {
    searchMovieService({ searchTerm: value, page: pagination.page })
      .then((res) => {
        const response = new MovieListDAO({
          page: res.page,
          results: res.results,
          total_page: res.total_pages,
        }).getBodyJson();

        setPagination({ page: response.page, totalPage: response.totalPage });
        setMovies(response.movies);
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(false);
      });
  };

  const fetchMovies = async () => {
    fetchMoviesService(pagination.page)
      .then((res) => {
        const response = new MovieListDAO(res).getBodyJson();

        setPagination({ page: response.page, totalPage: response.totalPage });
        setMovies(response.movies);
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    fetchMovies();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    movies,
    isLoading,
    handleSeachInput,
    searchTerm,
  };
};
