import { createBrowserRouter } from "react-router-dom";
import Home from "./Home.jsx";
import Prestations from "./Prestations.jsx";
import Galerie from "./Galerie.jsx";
import Blog from "./Blog.jsx";
import BlogPost from "./BlogPost.jsx";
import APropos from "./APropos.jsx";
import Contact from "./Contact.jsx";
import Mentions from "./Mentions.jsx";
import Confidentialite from "./Confidentialite.jsx";
import Cookies from "./Cookies.jsx";

export const router = createBrowserRouter([
	{ path: "/", element: <Home /> },
	{ path: "/prestations", element: <Prestations /> },
	{ path: "/galerie", element: <Galerie /> },
	{ path: "/blog", element: <Blog /> },
	{ path: "/blog/:slug", element: <BlogPost /> },
	{ path: "/a-propos", element: <APropos /> },
	{ path: "/contact", element: <Contact /> },
	{ path: "/mentions", element: <Mentions /> },
	{ path: "/confidentialite", element: <Confidentialite /> },
	{ path: "/cookies", element: <Cookies /> },
]);


