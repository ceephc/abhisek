import "./App.css";
import RootLayout from "./layout/RootLayout";
import Channel from "./pages/Channel/Channel";
import Home from "./pages/Home/home";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import Search from "./pages/Search/Search";
import Watch from "./pages/Watch/Watch";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

let router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="search/:term" element={<Search />} />
      <Route path="watch/:videoId" element={<Watch />} />
      <Route path="channel/:channelId" element={<Channel />} />
      <Route path="*" element={<PageNotFound />} />
    </Route>
  ),
  { basename: "/youtube-clone" }
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
