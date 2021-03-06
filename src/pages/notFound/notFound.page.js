import React, {Component} from 'react'
import { Header } from 'semantic-ui-react';
import Icon from 'semantic-ui-react/dist/commonjs/elements/Icon';


class NotFoundPage extends Component {
  render() {
    return (
      <Header as='h2' icon className="not-found">
        <Icon name='hand paper outline'/>
        404
        <Header.Subheader>
          Page not found
        </Header.Subheader>
      </Header>
    );
  }
}

export default NotFoundPage;
