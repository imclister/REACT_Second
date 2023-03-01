import { useState} from "react";
import { login, logout } from "../store";

// useDispatch is for modifying state  while useselector hook is for getting state
// useDispatch is for modifying state  while useselector hook is for getting state
import { useDispatch , useSelector } from "react-redux/";

export const Login = () => {

    const dispatch  = useDispatch();
    const [newUsername, setNewUsername] = useState("");
    const username = useSelector( (state:any) => state.user.value.username)

    return  ( 
        <div>
             <h1>This is from login component</h1>
            <p>{username} </p>
            <input className="form-control" type="text" onChange={ (e) => setNewUsername(e.target.value)}  />
            <button className="btn btn-danger" onClick={() => dispatch(login({username: newUsername}))}>Login</button>
            <button className="btn btn-danger " onClick={() => dispatch(logout())} >Logout</button>
        </div>
       
    );
};