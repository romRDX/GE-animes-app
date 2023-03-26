import { useState, useEffect, createContext, useContext } from "react";
import query from "./animesQuery";

interface AnimeData {
  id: number;
  siteUrl: string;
  title: {
    native: string;
  }
}

interface AnimesContextData {
  animes: any;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

type Props = {
  children?: React.ReactNode
};

const AnimesContext = createContext<AnimesContextData>({} as AnimesContextData);

export const AnimesAPIProvider: React.FC<Props> = ({ children }) => {
  const [page, setPage] = useState<number>(1);
  const [animes, setAnimes] = useState<AnimeData[]>([]);

  const apiUri = process.env.NEXT_PUBLIC_TEST_ENV || "";

  useEffect(() => {
    fetch(apiUri, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
      query,
      variables: {
        page,
      }
    })})
    .then(handleResponse)
    .then(handleData)
    .catch(handleError);
  }, [page]);

  function handleResponse(response) {
    return response.json().then(function (json) {
      return response.ok ? json : Promise.reject(json);
    });
  }

  function handleData(data) {
    const formatedData = data.data.Page.media.map((item: AnimeData) => ({
        id: item.id,
        siteUrl: item.siteUrl,
        nativeTitle: item.title.native
    }));

    setAnimes(formatedData);
  }

  function handleError(error) {
    alert('Error, check console');
    console.error(error);
  }

  return (
    <AnimesContext.Provider
      value={{ setPage, animes }}
    >
      {children}
    </AnimesContext.Provider>
  );
};

export function useAnimes(): AnimesContextData {
  const context = useContext(AnimesContext);

  return context;
}

