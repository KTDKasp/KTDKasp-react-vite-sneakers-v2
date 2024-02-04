import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";
import { Drawer } from "../components/Drawer";

export const MainLayout = () => {
	return (
		<>
			<Drawer />
			<Header />
			<div className="content">
				<Outlet />
			</div>
		</>
	)
}
