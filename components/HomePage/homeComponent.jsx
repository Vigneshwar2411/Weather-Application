import React from 'react';
// import FileInput from 'react-file-input';
import Paper from 'material-ui/Paper';
import FontIcon from 'material-ui/FontIcon';

import ActionSearch from 'material-ui/svg-icons/action/search';
import {blue500} from 'material-ui/styles/colors';
import Subheader from 'material-ui/Subheader';
import AutoComplete from 'material-ui/AutoComplete';

import WeatherData from './weatherdata.jsx';

const iconStyles = {
  margin: 30,
};


const cities = [
  {textKey: 'London,UK', valueKey: 'someFirstValue'},
  {textKey: 'Bangalore,IN', valueKey: 'someSecondValue'},
];
const dataSourceConfig = {
  text: 'textKey',
  value: 'valueKey',
};


export default class Home extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      cityData: "" , arrayList: [] ,searchText : "Example 'Chennai'"
    }
  }

  static get contextTypes() {
    return {
      router: React.PropTypes.object
    }
  }

  componentDidMount(){
    console.log("inside component did mount of home component");
  }

  loadData(city){
    $.ajax({
      url: '/api/v1/getcitydata/'+city,
      type: 'GET',
      contentType : 'application/json',
      success : function(data){
          this.setState({
            cityData : data
          });
      }.bind(this)
    });
  }

  searchSubmit(e){
    var outerThis = this;
    if(e.keyCode===13){
        var tempstring = e.target.value;
        outerThis.loadData(tempstring);
    }
  }

  autoCompleteUpdate(text){
    console.log("hi",text);
  }

  render(){
    return (
      <div className="row center-xs" style={{paddingTop:'64px'}}>
        <div className="col-lg-11 col-md-11 col-sm-7">
          <Paper style={{padding: '10px', margin: '10px'}}>
            <div className="row">
              <Subheader style={{fontSize:30,padding:20}}>Now, know the weather in your City</Subheader>
              <div className="col-lg-1 col-md-1 col-sm-1" style={{margin:0,padding:0,border:0}}>
                <ActionSearch style={iconStyles} color={blue500}/>
              </div>
              <div className="col-lg-11 col-md-11 col-sm-11" style={{margin:0,padding:0,border:0}}>
                <AutoComplete
                  floatingLabelText="Type your City and hit Enter"
                  hintText="Enter the Name of your City Ex: London"
                  fullWidth={true}
                  filter={AutoComplete.fuzzyFilter}
                  dataSource={cities}
                  dataSourceConfig={dataSourceConfig}
                  onKeyUp={this.searchSubmit.bind(this)}
                />
              </div>
            </div>
            {this.state.cityData?
            <div className="row">
              <Subheader style={{fontSize:30,padding:20}}>Weather in {this.state.cityData.data.city.name},
              {this.state.cityData.data.city.country}</Subheader>
              <WeatherData data = {this.state.cityData.data.list} cityName = {this.state.cityData.data.city.name} />
            </div>: null
            }
          </Paper>
        </div>
      </div>

    );
  }
}
