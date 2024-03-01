import { useContext } from "react";
import { AppContext } from "../App";
import { useQuery } from "@tanstack/react-query";
import Axios from "axios";

export const Home = (props) => {
    const { data: catData, isLoading, isError, refetch } = useQuery({
        queryKey: ["cat"],
        queryFn: () => Axios.get("https://catfact.ninja/fact").then((res) => res.data)
    });

    const {username} = useContext(AppContext);

    if (isLoading) {
        return <h1> Loading fact... </h1>
    }

    if (isError) {
        return <h1> Error...</h1>
    }
    
    return (
        <h1>HOME PAGE user: {username} 
            <p>{catData?.fact}</p>

            <button onClick={refetch}>New Fact!</button>
        </h1>
    )
    
};