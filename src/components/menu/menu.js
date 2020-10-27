import React, { useState } from 'react'
import { Menu } from 'semantic-ui-react';
import menuItems from '../../config/menu';
import MenuItem from '../../common/route-item/menuItem';

export default function AppMenu({initialItem}) {

    const [menuItem, setMenuItem] = useState(initialItem);

    const handleItemClick = (name) => {
        setMenuItem(name);
    };

    const getMenuItems = () => {
        return menuItems.map(item => <MenuItem
            key={item.name}
            activeItem={menuItem}
            itemLabel={item.label}
            handleItemClick={handleItemClick}
            itemName={item.name}
            path={item.path}
        />);
    }

    return (
        <Menu>
            {getMenuItems()}
        </Menu>
    )
}
