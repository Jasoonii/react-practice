import { ChangeProfile } from "../components/ChangeProfile";
import { useContext } from "react";
import { AppContext } from "../App";

export const Profile = (props) => {
    const { username } = useContext(AppContext);
    return  (
        <div>
            PROFILE PAGE user: {username}
            <ChangeProfile setUsername={props.setUsername} /> 
        </div>
    )
};