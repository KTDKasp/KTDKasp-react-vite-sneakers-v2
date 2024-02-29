import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";
import { Drawer } from "../components/Drawer";

export const MainLayout = () => {
	const [drawerOpen, setDrawerOpen] = React.useState(false);

	return (
		<>
			{drawerOpen && <Drawer onClickClose={() => setDrawerOpen(false)} />}
			<Header onClickOpenDrawer={() => setDrawerOpen(true)}/>
			<div className="content">
				<Outlet />
			</div>
		</>
	)
}
