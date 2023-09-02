export const fetchMoviesService = async (page: number) => {
  const url = `https://api.themoviedb.org/3/movie/popular?language=en-US&page=${page}`;
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`,
    },
  };

  return await fetch(url, options).then((res) => res.json());
};

export const searchMovieService = async ({
  searchTerm,
  page,
}: {
  searchTerm: string;
  page: number;
}) => {
  const url = `https://api.themoviedb.org/3/search/movie?query=${searchTerm}&include_adult=true&language=en-US&page=${page}`;
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`,
    },
  };

  return await fetch(url, options).then((res) => res.json());
};
