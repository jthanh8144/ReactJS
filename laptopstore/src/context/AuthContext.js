import { createContext, useState } from "react";

const AuthContext = createContext();

function AuthProvider({ children }) {
    const [cartNum, setCartNum] = useState(0);

    const [authTokens, setAuthTokens] = useState(() =>
        localStorage.getItem("authTokens")
            ? localStorage.getItem("authTokens")
            : null
    );

    const [refresh, setRefresh] = useState(() =>
        localStorage.getItem("refresh") ? localStorage.getItem("refresh") : null
    );

    const [user, setUser] = useState(() =>
        localStorage.getItem("user") ? localStorage.getItem("user") : null
    );

    const loginUser = (token, refresh, user) => {
        setAuthTokens(token);
        setRefresh(refresh);
        setUser(user);
        localStorage.setItem("authTokens", token);
        localStorage.setItem("refresh", refresh);
        localStorage.setItem("user", user);
    };

    const logoutUser = () => {
        setAuthTokens(null);
        setRefresh(null);
        setUser(null);
        localStorage.removeItem("authTokens");
        localStorage.removeItem("refresh");
        localStorage.removeItem("user");
    };

    const contextData = {
        cartNum,
        setCartNum,
        user: user,
        setUser: setUser,
        authTokens: authTokens,
        setAuthTokens: setAuthTokens,
        refresh: refresh,
        setRefresh: setRefresh,
        loginUser: loginUser,
        logoutUser: logoutUser,
    };

    return (
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>
    );
}

export { AuthContext, AuthProvider };
