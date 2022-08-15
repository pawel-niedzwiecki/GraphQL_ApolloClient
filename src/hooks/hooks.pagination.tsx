import { useEffect, useState, useCallback } from "react";
import { PaginationPropsTypes } from "utils/types/utils.types.pagination.types";

export default function usePagination({ pageActive, pageCount, url, paginationSize }: PaginationPropsTypes) {
  const [pageBack, setPageBack] = useState({ url: "", name: "", active: false });
  const [pageNext, setPageNext] = useState({ url: "", name: "", active: false });
  const [pageLast, setPageLast] = useState({ url: "", name: "", active: false, power: false });
  const [pageDisplay, setPageDisplay] = useState([{ url: "", name: "", active: false }]);

  const getPageBack = useCallback(() => {
    switch (pageActive) {
      case 2:
        return { url, name: "Back", active: true };
      case 1:
        return { url: `${url + pageCount}`, name: "Back", active: true };
      default:
        return { url: `${url + (pageActive - 1)}`, name: "Back", active: true };
    }
  }, [pageCount, pageActive, url]);

  const getPageNext = useCallback(
    () =>
      pageActive === pageCount ? { url, name: "Next", active: true } : { url: `${url + (pageActive + 1)}`, name: "Back", active: true },
    [pageCount, pageActive, url]
  );

  const getPageLast = useCallback(
    () =>
      pageCount - paginationSize > -1
        ? {
            url: `${url + pageCount}`,
            name: `${pageCount}`,
            active: pageActive === pageCount ? false : true,
            power: true,
          }
        : { url: "", name: "", active: false, power: false },
    [pageActive, pageCount, paginationSize, url]
  );

  const getPageDisplay = useCallback(() => {
    const count = pageCount - (pageActive + paginationSize);

    if (count < 0)
      return new Array(paginationSize - 1).fill(undefined).map((_: undefined, i: number) => {
        const pageNumber: number = pageActive + count + i + 1;

        return {
          name: `${pageNumber}`,
          active: pageNumber === pageActive ? false : true,
          url: pageNumber === 1 ? url : `${url + pageNumber}`,
        };
      });
    else
      return new Array(paginationSize - 1).fill(undefined).map((_: undefined, i: number) => {
        const pageNumber: number = pageActive + i;

        return {
          name: `${pageNumber}`,
          active: pageNumber === pageActive ? false : true,
          url: pageNumber === 1 ? url : `${url + pageNumber}`,
        };
      });
  }, [pageActive, pageCount, paginationSize, url]);

  useEffect(() => {
    setPageBack(getPageBack);
    setPageNext(getPageNext);
    setPageLast(getPageLast);
    setPageDisplay(getPageDisplay);
  }, [getPageBack, getPageNext, getPageLast, getPageDisplay]);

  return { pageBack, setPageBack, pageNext, setPageNext, pageDisplay, setPageDisplay, pageLast, setPageLast };
}
