//importing global stlyes
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

const theme = {
    black: "#0B0D17",
    gray: "#D0D6F9",
    white: "#FFFFFF",
}



const Router = () => {

    const router = createBrowserRouter([
        {
            path: "/",
            element: <Homepage />
        },
        {
            path: "/destinations/:id",
            element: <Destination />
        }
    ])

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