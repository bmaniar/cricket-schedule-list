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
  const [matchType, setMatchType] = useState("all");
  const [matchStatus, setMatchStatus] = useState("upcoming");
  const { loading, error, data } = useQuery(CRICKET_SCHEDULE,
    {
      variables: {
        type: matchType,
        status: matchStatus,
        page: 0
      }
    });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  return (
    <div className="flex w-100 flex-column min-vh-100 bg-light-gray">
      <Schedule data={data} setMatchStatus={setMatchStatus} matchStatus={matchStatus} matchType={matchType} setMatchType={setMatchType} />
    </div>
  );
}

export default App;
