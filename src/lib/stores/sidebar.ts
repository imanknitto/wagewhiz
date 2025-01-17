import { writable } from "svelte/store";

export type SidebarState = {
  show: boolean;
};

const sidebarStore = writable<SidebarState>({
  show: false,
});

export const toggleSidebar = () => {
  return sidebarStore.update((state) => ({ ...state, show: !state.show }));
};

export const closeSidebar = () => {
  return sidebarStore.update((state) => ({ ...state, show: false }));
};

export default sidebarStore;
