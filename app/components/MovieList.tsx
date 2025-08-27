"use client";

import { Row, Col } from "antd";
import MovieCard from "./MovieCard";

interface Movie {
  id: number;
  title: string;
  overview: string;
  release_date: string;
  poster_path: string;
}

export default function MovieList({ movies }: { movies: Movie[] }) {
  return (
    <Row gutter={[16, 16]}>
      {movies.map((movie) => (
        <Col xs={24} sm={12} md={8} lg={6} key={movie.id}>
          <MovieCard
            title={movie.title}
            overview={movie.overview}
            releaseDate={movie.release_date}
            posterPath={movie.poster_path}
          />
        </Col>
      ))}
    </Row>
  );
}