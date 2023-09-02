import BaseDAO from 'common/service/dao/base.dao';
import { Movie } from '../movie';

export type MovieResponse = {
  id: number;
  title: string;
  poster_path: string;
  vote_average: number;
  release_date: string;
};

class MovieDAO implements BaseDAO<Movie> {
  private movie;

  constructor(data: MovieResponse) {
    this.movie = data;
  }

  private convertMovieScore = () => {
    const covertScore = this.movie.vote_average * 10;

    if (covertScore < 100 && covertScore > 0) return `${covertScore.toFixed(1)} / 100`;

    return `${covertScore} / 100`;
  };
  private formatReleaseDate = () =>
    new Date(this.movie.release_date).toLocaleDateString('en', {
      year: 'numeric',
      month: 'short',
      day: '2-digit',
    });

  getBodyJson = () => {
    return {
      id: this.movie.id,
      title: this.movie.title,
      image: `http://image.tmdb.org/t/p/w500${this.movie.poster_path}`,
      score: this.convertMovieScore(),
      releaseDate: this.formatReleaseDate(),
    };
  };
}

export default MovieDAO;
