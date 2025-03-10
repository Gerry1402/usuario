import Router from "./app/Router";
import { useUserContext } from "./providers/UserProvider";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./services/firebase";
import Login from "./pages/Login";

const App = () => {
    const {user, setUser} = useUserContext();

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                console.log("user", user, " userId:", user.uid);
                setUser(user);
            } else {
                console.log("No user logged");
                setUser(null);
            }
        });
    }, [setUser]);

    return user ? <Router /> : <Login />;
};

export default App;
