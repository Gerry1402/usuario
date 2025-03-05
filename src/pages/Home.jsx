import UserInfo from '../components/UserInfo';
import { logout } from '../services/auth';


function Home() {

    return (<>
        <UserInfo/>
        <button onClick={logout}>Log Out</button>
    </>);
}

export default Home;
