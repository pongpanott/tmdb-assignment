import BaseDAO from 'common/service/dao/base.dao';
import { Movie } from '../movie';

export type MovieResponse = Movie;

class MovieDAO implements BaseDAO<Movie> {
  private movie;

  private convertMovieScore = () => this.movie.score * 10;
  private formatReleaseDate = () =>
    new Date(this.movie.releaseDate).toLocaleDateString('en', {
      year: 'numeric',
      month: 'short',
      day: '2-digit',
    });

  constructor(data: MovieResponse) {
    this.movie = data;
  }

  getBodyJson = () => {
    return {
      id: this.movie.id,
      title: this.movie.title,
      image: this.movie.image,
      score: this.convertMovieScore(),
      releaseDate: this.formatReleaseDate(),
    } as Movie;
  };
}

export default MovieDAO;
