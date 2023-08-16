function Page(pageProps: { movies: any; characters: any[] }) {
  const { movies, characters } = pageProps;

  return movies.detail ? (
    <h3>{movies.detail}</h3>
  ) : (
    <>
      <h1>{movies.title}</h1>
      <p>Release Date: {movies.release_date}</p>
      <p>Director: {movies.director}</p>
      <p>Producer: {movies.producer}</p>
      <p>
        <b>{movies.opening_crawl}</b>
      </p>
      <hr />
      <h2>Characters</h2>
      {characters.map((character) => {
        return <p key={character.value.created}>{character.value.name}</p>;
      })}
    </>
  );
}

export { Page };
