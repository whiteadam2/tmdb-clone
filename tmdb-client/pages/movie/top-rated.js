import { MainLayout } from "../../components/MainLayout";
import { Movie } from "../../components/Movie";

function TopRated({ movies }) {
  return (
    <MainLayout
      title="Top Rated Movies"
      sidebar="Sidebar"
      content={movies.map((movie) => (
        <Movie
          key={movie.id}
          posterPath={movie.poster_path}
          title={movie.title}
          date={movie.release_date}
          desc={movie.overview}
        />
      ))}
    />
  );
}

export default TopRated;

export async function getStaticProps(context) {
  const response = await fetch(
    "https://api.themoviedb.org/3/movie/top_rated?api_key=da929b028e582d822da2b29c607baadf&language=en-US&page=1"
  );

  const movies = await response.json();

  return {
    props: { movies: movies.results }, // will be passed to the page component as props
  };
}