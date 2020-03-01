import React, { useState } from 'react';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import Schedule from './Schedule';
import './App.css';

const CRICKET_SCHEDULE = gql`
  query getSchedule($type: String!, $status: String!, $page: Int!){
    schedule(type: $type, status: $status, page: $page){
      matchID
      seriesName
      homeTeamName
      awayTeamName
      matchNumber
      venue
    }
  }
`;

function App() {
  const [matchType, setMatchType] = useState("All");
  const [matchStatus, setMatchStatus] = useState("upcoming");
  const [page, setPage] = useState(0);
  const { loading, error, data } = useQuery(CRICKET_SCHEDULE,
    {
      variables: {
        type: matchType,
        status: matchStatus,
        page: page
      }
    });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  return (
    <div className="flex w-100 flex-column min-vh-100 bg-light-gray">
      <Schedule data={data} />
    </div>
  );
}

export default App;
