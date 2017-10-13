import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data:[],
      standings:[]
    }
  }
  componentWillMount() {
    fetch('http://api.football-data.org/v1/soccerseasons/445/leagueTable', { headers: { 'X-Auth-Token': 'b7d52e61c66f4a0194be725042ad4359' } })
    .then((response) => response.json())
    .then((responseJson) => {
      this.setState({
        data: responseJson 
      })
    })
    .catch((error) => {
      console.error(error);
    });

  }
  render() {
    console.log(this.state.data);
    const leagueCaption = this.state.data.leagueCaption;
      //teamName = this.state.data.standing["0"].teamName;
      //console.log(teamName);
    return (
      <div>
        <h1 className="title">{leagueCaption}</h1>
        <span className="subtitle">Standings</span>
        <table>
          <tbody>
            <tr>
              <td>
                #
              </td>
              <td>
                Team
              </td>
              <td title="Matches played">
                MP
              </td>
              <td title="Wins">
                W
              </td>
              <td title="Draws">
                D
              </td>
              <td title="Losses">
                L
              </td>
              <td title="Goals for">
                GF
              </td>
              <td title="Goals against">
                GA
              </td>
              <td title="Goals difference">
                GD
              </td>
              <td title="Team points">
                Pts
              </td>
            </tr>
            <tr>
              <td>
                1
              </td>
              <td>
                <table>
                  <tbody>
                    <tr>
                      <td>
                        Badge
                              </td>
                      <td>
                        Man. City
                              </td>
                    </tr>
                  </tbody>
                </table>
              </td>
              <td>
                7
              </td>
              <td>
                6
              </td>
              <td>
                1
              </td>
              <td>
                0
              </td>
              <td>
                22
              </td>
              <td>
                2
              </td>
              <td>
                20
              </td>
              <td>
                19
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;


