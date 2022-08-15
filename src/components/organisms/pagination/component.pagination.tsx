import usePagination from "hooks/hooks.pagination";
import Button from "components/atoms/button/component.button";
import { Pagination, Item } from "./component.pagination.style";
import { PaginationPropsTypes } from "utils/types/utils.types.pagination.types";

export default function ComponentPagination({ pageActive, pageCount, url, paginationSize }: PaginationPropsTypes): JSX.Element {
  const { pageBack, pageNext, pageDisplay, pageLast } = usePagination({ pageActive, pageCount, url, paginationSize });

  return (
    <Pagination>
      <Item>
        <Button href={pageBack.url} title="Back" disable={!pageBack.active}>
          Back
        </Button>
      </Item>
      {pageDisplay.map(
        (page): JSX.Element => (
          <Item key={page.name}>
            <Button href={page.url} title={`page: ${page.name}`} disable={!page.active}>
              {page.name}
            </Button>
          </Item>
        )
      )}
      {pageLast.power ? (
        <>
          <Item>
            <span>...</span>
          </Item>
          <Item>
            <Button href={pageLast.url} title={`page: ${pageLast.name}`} disable={!pageLast.active}>
              {pageLast.name}
            </Button>
          </Item>
        </>
      ) : null}

      <Item>
        <Button href={pageNext.url} title={`Next: ${pageNext.name}`} disable={!pageNext.active}>
          Next
        </Button>
      </Item>
    </Pagination>
  );
}
