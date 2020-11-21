import React from "react";

class Summary extends React.Component {
    render(){
        const {summary, currentDate} = this.props;
        return(
            <div className="row">
            <div className="NewConfirmed">
                <h3>New Confirmed</h3>
                <h1>{summary.NewConfirmed}</h1>
                <h4>{new Date(currentDate).toDateString()}</h4>
            </div>
            <div className="TotalConfirmed">
            <h4>Total Confirmed</h4>
            <h1>{summary.TotalConfirmed}</h1>
            <h4>{new Date(currentDate).toDateString()}</h4>

            </div>
            <div className="NewDeaths">
                <h3>NewDeaths</h3>
                <h1>{summary.NewDeaths}</h1>
                <h4>{new Date(currentDate).toDateString()}</h4>
            </div>

            </div>
        )
    }
}
export default Summary;