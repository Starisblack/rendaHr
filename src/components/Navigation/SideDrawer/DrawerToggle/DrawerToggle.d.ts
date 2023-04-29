import { FC } from 'react';
import './DrawerToggle.css';
type drawerToggleProps = {
    clicked?: () => void;
};
declare const drawerToggle: FC<drawerToggleProps>;
export default drawerToggle;
