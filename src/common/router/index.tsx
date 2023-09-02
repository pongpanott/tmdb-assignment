import { Routes, Route } from "react-router-dom";
import { Layout } from "../base-ui/layout";
import HomePage from "../pages/home-page";
import AboutPage from "../pages/about-page";
import NotFoundPage from "../pages/not-found-page";

const AppRouter = () => {
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route index element={<HomePage />} />
				<Route path="/about" element={<AboutPage />} />
			</Route>
			<Route path="*" element={<NotFoundPage />} />
		</Routes>
	);
};

export default AppRouter;
