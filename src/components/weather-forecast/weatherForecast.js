import React, {Component} from 'react'
import {Card, Image} from 'semantic-ui-react'
import * as moment from 'moment';
import {toCelsius, getImageUrl} from '../../utils/utils';
export default class WeatherForecast extends Component {
  constructor(props) {
    super(props);
  }

  getForecast = (fiveDaysArray) => {
    const {DailyForecasts = []} = fiveDaysArray;
    return DailyForecasts.map(day => <Card key={day.Date} className="weather-forecast-day">
        <Image src={getImageUrl(day.Day.Icon)} size='small' />
      <Card.Header>{moment(day.Date).format('dddd')}</Card.Header>
  <Card.Header>{toCelsius(day.Temperature.Minimum.Value)}&#8451; / {toCelsius(day.Temperature.Maximum.Value)}&#8451;</Card.Header>
    </Card>);
  };

  render() {
    const {fiveDaysForecast} = this.props;
    return (
      <div className="forecast">
          {this.getForecast(fiveDaysForecast)}
      </div>
    )
  }
}
