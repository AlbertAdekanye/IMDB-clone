
export default function Results({ results }) {
  return (
    <div>
      {
        results.map((movie) => (
          <div key={movie.id}>
            <h2>{result.original_title}</h2>
          </div>
        ))
      }
    </div>
  )
}
