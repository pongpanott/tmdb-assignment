import MovieListDAO from 'common/model/movie/dao/movie-list.dao';
import { Movie } from 'common/model/movie/movie';
import { fetchMoviesService } from 'common/service';
import { useEffect, useState } from 'react';

export const useViewModel = () => {
  const [pagination, setPagination] = useState({ page: 1, totalPage: 0 });
  const [movies, setMovies] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchMovies = async () => {
    fetchMoviesService(pagination.page)
      .then((res) => {
        const response = new MovieListDAO(res).getBodyJson();

        setPagination({ page: response.page, totalPage: response.totalPage });
        setMovies(response.movies);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log('error', error);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    fetchMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pagination.page]);

  return { movies, isLoading };
};
