import { useCallback } from 'react';

import { redirect } from 'react-router-dom';

import SidebarFooter from './sidebarFooter';

const SidebarFooterContainer = () => {
	const handleLogout = useCallback(async () => {
		localStorage.clear();
		redirect('/auth');
	}, []);

	return <SidebarFooter handleLogout={handleLogout} />;
};

export default SidebarFooterContainer;
