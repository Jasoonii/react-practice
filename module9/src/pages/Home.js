import { useContext } from "react";
import { AppContext } from "../App";
import { useQuery } from "@tanstack/react-query";
import Axios from "axios";

export const Home = (props) => {
    const { data } = useQuery({
        queryKey: ["cat"],
        queryFn: () => Axios.get("https://catfact.ninja/fact").then((res) => res.data)
    });

    const {username} = useContext(AppContext);
    
    return (
        <h1>HOME PAGE user: {username} 
            <p>{data.fact}</p>
        </h1>
    )
    
};