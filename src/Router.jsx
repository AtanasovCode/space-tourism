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



const Router = () => {

    const router = createBrowserRouter([
        {
            path: "/",
            element: <Homepage />
        },
    ])

    return (
        <ThemeProvider>
            <GlobalStyle />
            <Container>
                <RouterProvider router={router} />
            </Container>
        </ThemeProvider>
    );
}

export default Router;

const Container = styled.div``;