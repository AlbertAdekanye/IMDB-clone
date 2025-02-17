import Results from "@/components/Results";

const API_KEY = process.env.API_KEY;

export default async function Home({ searchParams }) {
  try {
    const genre = searchParams.genre || "fetchTrending";
    const endpoint = genre === "fetchTopRated" ? "/movie/top_rated" : "/trending/all/week";
    
    const res = await fetch(
      `https://api.themoviedb.org/3${endpoint}?api_key=${API_KEY}&language=en-US`,
      { cache: "no-store" }
    );

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    const data = await res.json();
    console.log(data.results);

    return (
      <div>
        <h1>Movie List</h1>
        {data.results.map((movie) => (
          <div key={movie.id}>{movie.title || movie.name}</div>
        ))}
      </div>
    );
  } catch (error) {
    console.error(error);
    return <div>
      <Results results={results} />
    </div>;
  }
}
