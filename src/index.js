import React from 'react';
import ReactDOM from 'react-dom';
import '@atlaskit/css-reset';
import ConfigurableTable from './ConfigurableTable';

function dataGen(size) {
  var data = [];
  for (var i = 0; i < size; i++) {
    var obj = {
      id: `ID-${i}`,
      data: {
        name: `${i}-RoboCop`,
        director: `${i}-Paul Verhoeven`,
        releaseDate: `${i}-July 17, 1987`,
        length: `${i}-102`,
        budget: `${i}-13000000`,
        boxOffice: `${i}-53400000`
      }
    };
    data.push(obj);
  }
  return data;
}

const columns = [
  {
    id: 'name',
    label: 'Title',
    highlight: true,
    collWidth: 80
  },
  {
    id: 'releaseDate',
    label: 'Release date',
    collWidth: 120
  },
  {
    id: 'director',
    label: 'Director',
    collWidth: 140
  },
  {
    id: 'length',
    label: 'min',
    type: 'integer',
    collWidth: 50
  },
  {
    id: 'budget',
    label: 'Budget, $',
    type: 'amount',
    collWidth: 100
  },
  {
    id: 'boxOffice',
    label: 'Box office, $',
    type: 'amount',
    collWidth: 120
  },
  {
    id: 'actions',
    label: 'Actions',
    collWidth: 120
  }
];
const rows = [
  {
    id: 'rbc',
    data: {
      name: 'RoboCop',
      director: 'Paul Verhoeven',
      releaseDate: 'July 17, 1987',
      length: 102,
      budget: 13000000,
      boxOffice: 53400000,
      actions: ['close']
    }
  },
  {
    id: 'tr',
    data: {
      name: 'Total Recall',
      director: 'Paul Verhoeven',
      releaseDate: 'June 1, 1990',
      length: 113,
      budget: 65000000,
      boxOffice: 261300000,
      actions: ['save', 'approve']
    }
  },
  {
    id: 'sst',
    data: {
      name: 'Starship Troopers',
      director: 'Paul Verhoeven',
      releaseDate: 'November 7, 1997',
      length: 129,
      budget: 105000000,
      boxOffice: 121200000,
      actions: ['reject', 'approve']
    }
  }
];

// const rows = dataGen(10);

function App() {
  return <ConfigurableTable rows={rows} columns={columns} />;
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
