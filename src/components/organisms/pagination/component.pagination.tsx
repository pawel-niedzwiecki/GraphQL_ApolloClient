import Button from "components/atoms/button/component.button";
import { Pagination, Item } from "./component.pagination.style";
import { PaginationPropsTypes } from "./component.pagination.types";

export default function ComponentPagination({ pageActive, pageCount, url, paginationSize }: PaginationPropsTypes): JSX.Element {
  return (
    <Pagination>
      <Item>
        <Button href={pageActive === 1 ? url : `${url}${pageActive - 1}`} title="Back" disable={pageActive === 1}>
          Back
        </Button>
      </Item>
      {new Array(paginationSize - 1).fill(undefined).map(
        (_: undefined, i: number): JSX.Element => (
          <>
            <Item>
              <Button
                href={pageActive + i === 1 ? url : `${url}${pageActive + i}`}
                title={`page: ${pageActive + i}`}
                disable={pageActive === pageActive + i}
              >
                {`${pageActive + i}`}
              </Button>
            </Item>
          </>
        )
      )}

      <Item>
        <span>...</span>
      </Item>
      {pageCount - (paginationSize - 1) > 0 && (
        <Item>
          <Button href={`${pageCount}`} title={`page: ${pageCount}`}>
            {`${pageCount}`}
          </Button>
        </Item>
      )}

      <Item>
        <Button href={`${url}${pageActive + 1}`} title="Next" disable={pageCount <= pageActive}>
          Next
        </Button>
      </Item>
    </Pagination>
  );
}
