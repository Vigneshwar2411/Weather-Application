import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import Subheader from 'material-ui/Subheader';


const styles = {
  gridList: {
      width:"100%",
      overflowY: 'auto',
    }
};

var counter = 0;

export default class WeatherData extends React.Component{

  constructor(props,context){
    super(props,context);
    console.log("Inside Constructor of Weather data");
  }

  static get contextTypes() {
    return {
      router: React.PropTypes.object
    }
  }


  render(){
    return(
      <div style={{paddingTop:20}}>
        <div className="col-lg-12 col-md-12 col-sm-12">
          <div>
              <GridList
                cols={3}
                cellHeight={200}
                style={styles.gridList}
              >
                {this.props.data.map((data,i) => (

                  <GridTile
                    title={data.dt_txt}
                    subtitle={<span>MinTemp: <b>{data.main.temp_max}  </b>
                                    MaxTemp: <b>{data.main.temp_min} </b><br/>
                                    Humidity: <b>{data.main.humidity}  </b>
                                    Weather: <b>{data.weather[0].description.toUpperCase()}</b>
                              </span>}
                  >
                    <img src="../../img/weather.jpg" />
                  </GridTile>
                ))}
              </GridList>
            </div>
        </div>
      </div>
    )
  }
}
