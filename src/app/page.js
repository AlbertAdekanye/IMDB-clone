import Results from "@/components/Results";

const API_KEY = process.env.API_KEY;

export default async function Home({ searchParams }) {
  try {
    const genre = searchParams.genre || "fetchTrending";
    const endpoint = genre === "fetchTopRated" ? "/movie/top_rated" : "/trending/all/week";
    
    const res = await fetch(
      `https://api.themoviedb.org/3${endpoint}?api_key=${API_KEY}&language=en-US`,
      { cache: "no-store" },
      {next: {revalidate: 10000}}
    );
  

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    const data = await res.json();
    console.log(data.results);

    const results = data.results;

    return (
      <div>
      <Results results={results} />
    </div>
    );
  } catch (error) {
    console.error(error);
    return <div>
      <Results result={result} />
    </div>;
  }
}
