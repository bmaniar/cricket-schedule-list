import React from 'react';
import MapCard from './MapCard';

function Schedule({ data, setMatchStatus, matchStatus, matchType, setMatchType }) {
    const onStatusChange = (event) => {
        setMatchStatus(event.target.getAttribute("value"));
    }
    const onTypeChange = (event) => {
        setMatchType(event.target.getAttribute("value"));
    }
    return (
        <div className="ph3 relative">
            <header className="pr0">
                <div className="black-70 f4 b db pt3 pb2">
                    Schedule
                </div>
                <div className="bg-white pt3 br2 overflow-hidden" onClick={onStatusChange}>
                    <div className="w-100 pa1 relative flex items-center justify-center">
                        <span className={"black-20 pointer f7 fw6 pa2 w-100 tc ba b--black-10 br-0" + (matchStatus === "upcoming" ? " bg-white light-red" : " bg-near-white")} value="upcoming">UPCOMING</span>
                        <span className={"black-20 pointer f7 fw6 pa2 w-100 tc ba b--black-10 br-0" + (matchStatus === "running" ? " bg-white light-red" : " bg-near-white")} value="running">RUNNING</span>
                        <span className={"black-20 pointer f7 fw6 pa2 w-100 tc ba b--black-10 " + (matchStatus === "completed" ? " bg-white light-red" : " bg-near-white")} value="completed">COMPLETED</span>
                    </div>
                </div>
                <div className="flex justify-center items-center">
                    <div className="scroll pt3 tc bg-white flex justify-around w-100" onClick={onTypeChange}>
                        <span className={"gray pointer f7 ph3 pv2 w-30 " + (matchType === "all" ? "bb b--dark-red" : "")} value="all">All</span>
                        <span className={"gray pointer f7 ph3 pv2 w-30 " + (matchType === "international" ? "bb b--dark-red" : "")} value="international">International</span>
                        <span className={"gray pointer f7 ph3 pv2 w-30 " + (matchType === "domestic" ? "bb b--dark-red" : "")} value="domestic">Domestic</span>
                    </div>
                </div>
            </header>
            <section className="mt3">
                <div className="w-100 db flex flex-wrap">
                    {
                        data.schedule.map(map => <MapCard data={map} />)
                    }
                </div>
            </section>
        </div>
    );
}

export default Schedule;
