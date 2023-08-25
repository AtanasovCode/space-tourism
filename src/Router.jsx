//importing global stlyes
import { useState } from "react";
import { GlobalStyle } from "./GlobalStyle";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";

//importing from react-router
import {
    createBrowserRouter,
    RouterProvider
} from "react-router-dom";

//importing routes
import Homepage from "./routes/Homepage";
import Destination from "./routes/Destination";
import Crew from "./routes/Cew";
import Tech from "./routes/Tech";

const theme = {
    black: "#0B0D17",
    gray: "#D0D6F9",
    white: "#FFFFFF",
}



const Router = () => {


    //used to determine the currently active tab
    const [activeTab, setActiveTab] = useState("home");

    const router = createBrowserRouter([
        {
            path: "/",
            element: <Homepage />
        },
        {
            path: "/destinations",
            element: <Destination />
        },
        {
            path: "/crew",
            element: <Crew />
        },
        {
            path: "/technology",
            element: <Tech />
        }
    ]);

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Container>
                <RouterProvider router={router} />
            </Container>
        </ThemeProvider>
    );
}

export default Router;

const Container = styled.div``;