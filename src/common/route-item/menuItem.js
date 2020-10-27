import React from 'react'
import {NavLink} from "react-router-dom";
import { Menu } from 'semantic-ui-react'

export default function MenuItem({activeItem,itemLabel,handleItemClick,itemName,path}) {

        const select = () => {
            handleItemClick(itemName);
        }

        return ( 
            <Menu.Item
            name={itemName}
            as={NavLink}
            to={path}
            active={activeItem === itemName}
            onClick={() => select()}
          >
            {itemLabel}
          </Menu.Item>
        )
    }