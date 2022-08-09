import React from "react";
import Link from "next/link";
import List from "components/atoms/list/component.list";
import { Wrapper, Input, Sugests } from "./component.inputSearch.style";
import { ConponentListEnumTypes } from "components/atoms/list/component.list.types";

const ComponentInputSearch = (): JSX.Element => {
  return (
    <Wrapper>
      <Input />
      <Sugests>
        <List type={ConponentListEnumTypes.level} selector="#">
          <>
            <Link href="/">sugest 1</Link>
          </>
          <>
            <Link href="/">sugest 2</Link>
          </>
        </List>
      </Sugests>
    </Wrapper>
  );
};

export default ComponentInputSearch;
