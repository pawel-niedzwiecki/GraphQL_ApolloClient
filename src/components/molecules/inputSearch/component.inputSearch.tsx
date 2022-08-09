import React from "react";
import Link from "next/link";
import { useState, useEffect } from "react";
import List from "components/atoms/list/component.list";
import { ComponentInputSearchPropsTypes, SugestSearchType } from "./component.inputSearch.types";
import { Wrapper, Input, Sugests } from "./component.inputSearch.style";
import { ConponentListEnumTypes } from "components/atoms/list/component.list.types";

const ComponentInputSearch = ({ sugests = [], valueDefault, callBack }: ComponentInputSearchPropsTypes): JSX.Element => {
  const [value, setValue] = useState(valueDefault);

  useEffect(() => {
    typeof callBack === "function" && callBack(value || "");
  }, [value, callBack]);

  console.log(sugests);
  console.log(value);
  return (
    <Wrapper>
      <Input
        sugests={!!sugests?.length}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        type="search"
        id="inputSearch"
        name="search"
      />
      {!!sugests?.length && (
        <Sugests>
          <List type={ConponentListEnumTypes.vertical} selector="#">
            {sugests.map(
              (sugest: SugestSearchType, i: number): JSX.Element => (
                <Link href={sugest.url} key={i}>
                  {sugest.name}
                </Link>
              )
            )}
          </List>
        </Sugests>
      )}
    </Wrapper>
  );
};

export default ComponentInputSearch;
