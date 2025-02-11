'use client';

import {
	SidebarContent,
	SidebarGroup,
	SidebarGroupContent,
	SidebarGroupLabel,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
	Sidebar as UiSideBar,
} from '@/components/ui/sidebar';
import { itemsSideBar } from '@/constants/sidebar';
import { useLocation } from 'react-router-dom';


export default function Sidebar() {
	const location = useLocation();

	return (
		<UiSideBar collapsible="icon">
			<SidebarContent>
				<SidebarGroup>
					<SidebarGroupLabel>ProtoScan</SidebarGroupLabel>
					<SidebarGroupContent>
						<SidebarMenu>
							{itemsSideBar.map((item) => (
								<SidebarMenuItem key={item.title}>
									<SidebarMenuButton asChild isActive={location.pathname === item.url}>
										<a href={item.url}>
											<item.icon />
											<span>{item.title}</span>
										</a>
									</SidebarMenuButton>
								</SidebarMenuItem>
							))}
						</SidebarMenu>
					</SidebarGroupContent>
				</SidebarGroup>
			</SidebarContent>
		</UiSideBar>
	);
}
