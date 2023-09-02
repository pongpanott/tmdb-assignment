import { Outlet } from "react-router";
import { Navbar } from "./navbar";
import { Footer } from "./footer";

const Layout = () => {
	return (
		<div className="flex min-h-screen flex-col flex-1">
			<Navbar />
			<Outlet />
			<Footer />
		</div>
	);
};

export { Layout };
