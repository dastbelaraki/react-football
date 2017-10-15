import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Button from './components/Button';
import Row from './components/Row';
import TableBody from './components/TableBody';
import LeagueInfo from './components/LeagueInfo';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      data: [],
      rows: [],
      leagueId: 455,
      leagues: {
        "La Liga": 455,
        "Premier League": 445,
        "Eredivisie": 449,
        "Ligue 1": 450,
        "Bundesliga": 452,
        "Serie A": 456
      },
      buttons: []
    }
  }

  handleLeagueClick() {

  }

  fetchData() {
    const Token = 'b7d52e61c66f4a0194be725042ad4359',
      leagueId = this.state.leagueId,
      URL = 'http://api.football-data.org/v1/soccerseasons/' + leagueId + '/leagueTable';

    fetch(URL, { headers: { 'X-Auth-Token': Token } })
      .then((response) => response.json())
      .then((responseJson) => {
        const rows = [];
        responseJson.standing.map(
          (item, index) => {
            const { position, crestURI, teamName, playedGames, wins, draws, losses, goals, goalsAgainst, goalDifference, points } = item;
            return (
              rows.push(
                <Row key={index} position={position} crestURI={crestURI} teamName={teamName} playedGames={playedGames} wins={wins} draws={draws} losses={losses} goalsFor={goals} goalsAgainst={goalsAgainst} goalDifference={goalDifference} points={points} />
              )
            )
          }
        )
        this.setState({
          data: responseJson,
          rows: rows
        })
      })
      .catch((error) => {
        console.error(error);
      });
  }

  componentDidMount() {
    this.fetchData();
    console.log(this.state.leagues);
    for (let key in this.state.leagues) {
        this.state.buttons.push(
          <Button key={this.state.leagues[key]} leagueId={this.state.leagues[key]} text={key} />
        )
    }
    console.log('*componentDidMount');
  }

  render() {
    console.log('*render');
    const { leagueCaption, matchday } = this.state.data;
    return (
      <div className="app">
        <Header>
        {this.state.buttons}
        </Header>
        <LeagueInfo leagueCaption={leagueCaption} matchday={matchday} />
        <TableBody>
          {this.state.rows}
        </TableBody>
      </div>
    );
  }

}

export default App;


