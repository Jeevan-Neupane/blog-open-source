import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./layout/Layout";
import HomePage from "./pages/homepage";
import PostsPage from "./pages/postspage";
import { ThemeProvider } from "styled-components";
import { darkTheme } from "./style/theme";
import GlobalStyle from "./style/globalStyle";
import SingleBlogPage from "./pages/SingleBlogPage";
import EditBlogPage from "./pages/EditBlogPage";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
        element={<Layout />}
        path='/'
      >
        <Route
          index
          element={<HomePage />}
        />
        <Route
          path='/blogs'
          element={<PostsPage />}
        />
        <Route
          path='/blogs/:slug'
          element={<SingleBlogPage />}
        />
        <Route
          path='/edit/:slug'
          element={<EditBlogPage />}
        />
      </Route>
    )
  );
  return (
    <ThemeProvider theme={darkTheme}>
      <RouterProvider router={router} />
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
