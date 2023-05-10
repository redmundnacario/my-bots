import React, { Dispatch, SetStateAction, useState } from "react";
import { useSelector } from "react-redux";

import { currentUserType } from "@models/entities";
import { selectUserState } from "@store/selectors/User";

export type WithUserType = {
    currentUser?: currentUserType;
    isLoading?: boolean;
    setIsLoading?: Dispatch<SetStateAction<boolean>>;
};

const WithUser = <T,>(
    Component: React.ComponentType<T>
): React.ComponentType<T & WithUserType> => {
    const ComponentWithUser: React.ComponentType<T & WithUserType> = (
        props: T
    ) => {
        const data = useSelector(selectUserState);
        const [isLoading, setIsloading] = useState(false);

        return (
            <Component
                {...props}
                currentUser={data}
                isLoading={isLoading}
                setIsLoading={setIsloading}
            />
        );
    };

    return ComponentWithUser;
};

export default WithUser;
