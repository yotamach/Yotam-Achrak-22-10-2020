import React from 'react'
import AppMenu from '../menu/menu';
import {Header} from 'semantic-ui-react';

export default function appHeader({title, initialItem}) {
  return (
    <div className="header">
      <Header as='h2' icon='cloud' content={title}/>
      <AppMenu initialItem={initialItem}/>
    </div>
  )
}