import React, { Component } from 'react';
import './Content.css';
import Subtitle from '../subtitle/Subtitle';
import Footer from '../footer/Footer';

class Content extends Component {
  render() {
    return (
        <div className="right">
                    <div className="inner">
                        <div className="welcome">
                                <Subtitle text={'Hello,'} />
                                <p className="paragraph">Lorem ipsum dolor sit amet, duo id aliquip nostrud, est te agam scaevola intellegam, vitae labore pertinax eum ex. Ut augue suavitate euripidis vel, nam possim erroribus mnesarchum ut, illud eloquentiam an nam. Ipsum vidisse propriae eu has, luptatum electram cu duo. Habemus alienum intellegebat eam cu. Cu has sonet equidem nostrum.</p>
                                <br/>
                                <p className="paragraph">Lorem ipsum dolor sit amet, duo id aliquip nostrud, est te agam scaevola intellegam, vitae labore pertinax eum ex. Ut augue suavitate euripidis vel, nam possim erroribus mnesarchum ut, illud eloquentiam an nam. Ipsum vidisse propriae eu has, luptatum electram cu duo. Habemus alienum intellegebat eam cu. Cu has sonet equidem nostrum.</p>
                        </div>
                        <div className="blog">
                                <Subtitle text={'Latest Blog'} />
                                <p className="paragraph">Lorem ipsum dolor sit amet, duo id aliquip nostrud, est te agam scaevola intellegam, vitae labore pertinax eum ex. Ut augue suavitate euripidis vel, nam possim erroribus mnesarchum ut, illud eloquentiam an nam. Ipsum vidisse propriae eu has, luptatum electram cu duo. Habemus alienum intellegebat eam cu. Cu has sonet equidem nostrum.</p>
                        </div>
                        <div className="projects">
                                <Subtitle text={'Projects'} />
                        </div>
                        <Footer />
                    </div>
            </div>
    );
  }
}

export default Content;