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
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  const isLastPage = pagination.page === pagination.totalPage;

  const handleLoadMoreMovie = async () => {
    if (pagination.page < pagination.totalPage) {
      setIsLoadingMore(true);
      setPagination((prev) => ({ ...prev, page: prev.page + 1 }));

      if (searchTerm) {
        fetchSearchedMovie(searchTerm, pagination.page + 1).then(() => setIsLoadingMore(false));
      } else {
        fetchMovies(pagination.page + 1).then(() => setIsLoadingMore(false));
      }
    }
  };

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
      fetchSearchedMovie(value, pagination.page);
    } else {
      fetchMovies(pagination.page);
    }
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debounchMovieSearch = useCallback(debounce(handleMovieSearch, 800), []);

  const fetchSearchedMovie = async (value: string, page: number) => {
    return searchMovieService({ searchTerm: value, page })
      .then((res) => {
        const response = new MovieListDAO(res).getBodyJson();

        setPagination({ page: response.page, totalPage: response.totalPage });
        setMovies([...movies, ...response.movies]);
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(false);
      });
  };

  const fetchMovies = async (page: number) => {
    return fetchMoviesService(page)
      .then((res) => {
        const response = new MovieListDAO(res).getBodyJson();

        setPagination({ page: response.page, totalPage: response.totalPage });
        setMovies([...movies, ...response.movies]);
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    fetchMovies(pagination.page);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    movies,
    isLoading,
    handleSeachInput,
    searchTerm,
    handleLoadMoreMovie,
    isLoadingMore,
    isLastPage,
  };
};
