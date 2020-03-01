import React from 'react';

function MapCard({ data }) {
    console.log(data)
    return (
        <div className="w-100 mb3 bg-white br2 pointer">
            <div className="flex justify-between items-center pa3">
                <span className="f7 fw5">
                    {data.seriesName}
                </span>
            </div>
            <hr />
            <div className="mh3 pb2">
                <p className="ma0 mv3 f7 fw5">
                    {data.matchNumber}.{data.venue}
                </p>
                <div className="flex mb2">
                    <div className="flex w-40 flex-column justify-center items-evenly">
                        <span className="flex w-50 pv2 f6 fw6">
                            {data.homeTeamName}
                        </span>
                        <span className="flex w-50 pv2 f6 fw6">
                            {data.awayTeamName}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MapCard;
