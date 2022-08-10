import React from "react";
import Loader from "components/atoms/loader/component.loader";

export const QueryResult = ({
  loading,
  error,
  data,
  children,
}: {
  loading: boolean;
  error: any;
  data: any;
  children: JSX.Element | JSX.Element[];
}) => {
  if (error) {
    return <p>ERROR: {error.message}</p>;
  }
  if (loading) {
    return <Loader />;
  }
  if (!data) {
    return <p>Nothing to show...</p>;
  }
  if (data) {
    return children;
  }
};
