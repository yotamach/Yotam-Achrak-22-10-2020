import React, {Component} from 'react'
import {connect} from 'react-redux';
import {getError} from '../../store/actions';
import { Header } from 'semantic-ui-react';
import Icon from 'semantic-ui-react/dist/commonjs/elements/Icon';

const mapStateToProps = (state) => {
  return {error: getError(state)};
};

const mapDispatchToProps = () => {};

class ErrorPage extends Component {
  render() {
    const {error} = this.props;
    return (
      <Header as='h2' icon className="error">
        <Icon name='hand paper outline'/>
        Error
        <Header.Subheader>
          {error}
        </Header.Subheader>
      </Header>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ErrorPage);
