import MovieList from "./components/MovieList";

const API_KEY = process.env.TMDB_API_KEY;
const API_URL = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=return`;

async function getMovies() {
  const res = await fetch(API_URL, { next: { revalidate: 3600 } });
  if (!res.ok) throw new Error("Failed to fetch movies");
  const data = await res.json();
  return data.results;
}

export default async function Page() {
  const movies = await getMovies();

  return (
    <main style={{ padding: "20px" }}>
      <h1>🎬 Movie Search</h1>
      <MovieList movies={movies} />
    </main>
  );
}