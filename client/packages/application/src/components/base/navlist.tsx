import React from 'react';
import List from 'devextreme-react/list.js';
import Drawer from 'devextreme-react/drawer';
import '../../styles/navlist.scss';


const navigation = [
  { id: 1, text: 'Home', icon: 'home' },
  { id: 2, text: 'Communication Setup', icon: 'paste' },
  { id: 3, text: 'Analytics', icon: 'chart' },
  { id: 4, text: 'Settings', icon: 'preferences' },
  { id: 5, text: 'Change Log', icon: 'event' }
]


const NavigationList = () => {
  return (
    <div className="list" style={{ width: '230px'}}>
      <List
        dataSource={navigation}
        hoverStateEnabled={true}
        activeStateEnabled={true}
        focusStateEnabled={true}
        elementAttr={{ class: 'panel-list dx-theme-accent-as-background-color' }} />
    </div>
  )
}

export interface LayoutProps {
  opened: boolean
}

export const SideBar: React.FC<LayoutProps> = (props): JSX.Element => {
  return (
    <Drawer
      openedStateMode={"overlap"}
      position={"left"}
      revealMode={"expand"}
      component={NavigationList}
      height={"100%"}
      opened={props.opened}
    >
      <div id='content'>
        {props.children}
      </div>
    </Drawer>
  )
}







