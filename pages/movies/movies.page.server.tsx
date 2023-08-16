export { onBeforeRender };

import fetch from "node-fetch";

async function onBeforeRender(pageContext: any) {
  const { movieId } = pageContext.routeParams;
  const response = await fetch(`https://swapi.dev/api/films/${movieId}/`);
  let movies: any = await response.json();
  const charactersPromises = movies.characters.map(
    async (character: string) => {
      const response = await fetch(character);
      return await response.json();
    }
  );

  let characters: any = await Promise.allSettled(charactersPromises);
  const pageProps = { movies, characters };

  return {
    pageContext: {
      pageProps,
    },
  };
}

export const passToClient = ["pageProps"];
