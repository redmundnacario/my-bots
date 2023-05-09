import React from "react";
import { useSelector } from "react-redux";

import { currentUserType } from "@models/entities";
import { selectUserState } from "@store/selectors/User";

export type WithUserType = {
  currentUser?: currentUserType;
};

const WithUser = <T,>(
  Component: React.ComponentType<T>
): React.ComponentType<T & WithUserType> => {
  const ComponentWithUser: React.ComponentType<T & WithUserType> = (
    props: T
  ) => {
    const data = useSelector(selectUserState);

    return <Component {...props} currentUser={data} />;
  };

  return ComponentWithUser;
};

export default WithUser;
