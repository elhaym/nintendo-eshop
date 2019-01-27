import React from 'react';
import '../../styles/dividers.css';
import '../../styles/responsive.dividers.css';
import DirectLogo from '../../images/placeholder-nd-logo.png';

const imgStyle = {
    height: "auto",
    float: "left"
}


export class TopDivider extends React.Component {
    render() {
        const img = <img src={DirectLogo} alt="" style={imgStyle} />
        return (
            <div className="top-divider">
                <div className="container">
                    <div className="direct-info">
                        {img}
                        <br />
                        <p>The online home for exclusive Nintendo news — broadcast directly to you, the player.</p>
                    </div>
                    <div className="add-to-calendar">
                        <div title="Add to Calendar" className="addeventatc">
                            Add to Calendar
                            <span className="start">01/28/2019 08:00 AM</span>
                            <span className="end">01/28/2019 10:00 AM</span>
                            <span className="timezone">America/Los_Angeles</span>
                            <span className="title">Summary of the event</span>
                            <span className="description">Description of the event</span>
                            <span className="location">Location of the event</span>
                        </div>
                        <br />
                        <p>Get reminders for every new Nintendo Direct.</p>
                    </div>
                </div>
            </div>
        )
    }
}
