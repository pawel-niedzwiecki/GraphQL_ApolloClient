import React from "react";
import Link from "next/link";
import { useState, useEffect } from "react";
import List from "components/atoms/list/component.list";
import { ComponentInputSearchPropsTypes, SugestSearchType } from "./component.inputSearch.types";
import { Wrapper, Input, Sugests } from "./component.inputSearch.style";
import { ConponentListEnumTypes } from "components/atoms/list/component.list.types";
import { InputType } from "zlib";

const ComponentInputSearch = ({ sugests = [], valueDefault, callBack }: ComponentInputSearchPropsTypes): JSX.Element => {
  const [value, setValue] = useState(valueDefault);
  const [active, setActive] = useState(false);

  useEffect(() => {
    typeof callBack === "function" && callBack(value || "");
  }, [value, callBack]);

  return (
    <Wrapper>
      <Input
        sugests={!!sugests?.length && active}
        value={value}
        onFocus={() =>
          setTimeout(() => {
            setActive(true);
          }, 150)
        }
        onBlur={() =>
          setTimeout(() => {
            setActive(false);
          }, 150)
        }
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>): false | void => e.keyCode === 13 && setActive(false)}
        type="search"
        id="inputSearch"
        name="query"
      />
      {!!sugests?.length && active && (
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
