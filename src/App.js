import React from 'react';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import './App.css';

const CRICKET_SCHEDULE = gql`
  {
    schedule(type: "All", status: "upcoming", page: 0){
      matchID
      seriesName
    }
  }
`;

function App() {
  const { loading, error, data } = useQuery(CRICKET_SCHEDULE);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  return (
    <div className="App">

    </div>
  );
}

export default App;
