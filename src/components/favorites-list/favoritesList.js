import React, {Component} from 'react'
import {List,Button} from 'semantic-ui-react'
import {NavLink} from "react-router-dom";

export default class FavoritesList extends Component {

  getList = () => {
    const {getFavoriteLocations, removeFromFavoritesList} = this.props;
    return getFavoriteLocations.map(item => <List.Item key={item.cityCode}><List.Content>
      <List.Header as='li'>{item.cityName}</List.Header>
      <List.Description>
        <Button
          onClick={() => removeFromFavoritesList(item.cityCode)}
          floated="right"
          basic
          color='red'>
            Remove from favorites
          Show details
        </Button>
        <Button
            as={NavLink}
            to={`/?cityCode=${item.cityCode}&cityName=${item.cityName}`}
          floated="right"
          basic
          color='red'>
             Show details
        </Button>
      </List.Description>
    </List.Content>
    </List.Item>);
  }

  render() {
    return (
      <List divided relaxed>
        {this.getList()}
      </List>
    )
  }
}
