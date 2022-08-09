import Button from "components/atoms/button/component.button";
import { Pagination, Item } from "./component.pagination.style";

export default function ComponentPagination() {
  return (
    <Pagination>
      <Item>
        <Button href="/" title="Back" disable>
          Back
        </Button>
      </Item>

      <Item>
        <Button href="/" title="Back">
          1
        </Button>
      </Item>

      <Item>
        <Button href="/" title="Back">
          2
        </Button>
      </Item>
      <Item>
        <Button href="/" title="Back">
          3
        </Button>
      </Item>

      <Item>
        <span>...</span>
      </Item>

      <Item>
        <Button href="/" title="Back">
          Next
        </Button>
      </Item>
    </Pagination>
  );
}
