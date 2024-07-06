export interface SidebarList {
  title?: string;
  items: { text: string; icon: JSX.Element; path: string }[];
}

export interface NavSectionProps {
  secList: SidebarList;
  isOpen: boolean;
}
