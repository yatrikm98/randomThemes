import { useState } from "react";
import SignIn from "./SignIn";
import UserPage from "./components/UserPage/UserPage";

const App = () => {
    const [route, setRoute] = useState('SignIn')
    const handleRouteChange = () => {
        setRoute('User')
    }

    const handleSignOutChange = () => {
        setRoute('SignIn')
    }

    return (
        <div className="App">
            {route === 'SignIn' ? <SignIn onSubmit={handleRouteChange} /> : <UserPage onSignOut={handleSignOutChange} />}
        </div>
    )
}

export default App;