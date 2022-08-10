import { createContext, useState } from "react";

interface SearchContextTypes {
  querySearch: string;
  setQuerySearch: (state: string) => void;
}

export const SearchContext = createContext<SearchContextTypes>({
  querySearch: "",
  setQuerySearch: (): void => {},
});

export default function ProviderSearch({ children }: { children: JSX.Element | JSX.Element[] }): JSX.Element {
  const [querySearch, setQuerySearch] = useState("");

  return (
    <>
      <SearchContext.Provider
        value={{
          querySearch,
          setQuerySearch,
        }}
      >
        {children}
      </SearchContext.Provider>
    </>
  );
}
