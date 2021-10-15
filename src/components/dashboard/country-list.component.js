import React, { Component } from "react";
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import CountryTableRow from './CountryTableRow';
import _ from 'lodash';

export default class CountryList extends Component {

  constructor(props) {
    super(props)
    this.state = {
      countries: []
    };
  }

  componentDidMount() {
    axios.get('https://restcountries.com/v3.1/all')
      .then(res => {
        let countries = res.data.map(country => _.pick(country, ['name', 'capital', 'currencies']));
        console.log(countries);

        this.setState({
          countries
        });
      })
      .catch((error) => {
        console.log(error);
      })
  }

  DataTable() {
    return this.state.countries.map((res, i) => {
      return <CountryTableRow obj={res} key={i} />;
    });
  }


  render() {
    return (<div className="table-wrapper">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Capital</th>
            <th>Currency</th>
          </tr>
        </thead>
        <tbody>
          {this.DataTable()}
        </tbody>
      </Table>
    </div>);
  }
}