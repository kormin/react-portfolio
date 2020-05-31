import React, { Component } from 'react';
import { UilPlus, UilTimes } from '@iconscout/react-unicons';

import TitlebarOptions from './titlebar/Options';

class Work extends Component {
  render() {
    return (
      <div id="work" className="row">
        <div className="browser-titlebar">
          <div className="browser-tab">
            Tom's Portfolio
            <ul>
              <li><UilTimes /></li>
            </ul>
          </div>
          <div className="browser-space">
            <a target="_blank" rel="noopener noreferrer" href="/">
              <UilPlus />
            </a>
            <TitlebarOptions />
          </div>
        </div>
        <div className="browser-tool-bar">
          <div className="browser-address-bar">
            localhost:1234
          </div>
        </div>
        <div className="browser-content">
          <div className="browser-row">
            <div className="tech-stack-title">
              <h1>Tech Stack</h1>
            </div>
            <div className="tech-stack-content">
              <h4>Python</h4>
              <p>Libraries: Django Framework, Django REST Framework, Celery, RabbitMQ</p>
              <p>Tools: Elasticsearch, Google AdWords, EC2, RDS, Docker, Jenkins</p>
            </div>
            <div className="tech-stack-content">
              <h4>Java</h4>
              <p>Libraries: Spring Framework, Hibernate ORM, JUnit</p>
              <p>Tools: Jenkins, Oracle Weblogic, SonarQube, Splunk</p>
            </div>
            <div className="tech-stack-content">
              <h4>ReactJS</h4>
              <p>Libraries: Ant Design</p>
              <p>Tools: EC2, RDS</p>
            </div>
          </div>

          <div className="browser-row">
            <div className="other-skills-title">
              <h1>Other Skills</h1>
            </div>
            <div className="other-skills-content">
              <p>C, C++, Android, SQL, HTML, CSS, JavaScript, Vue.js, Bootstrap</p>
              <p>Amazon Web Services, DigitalOcean Droplets, Git, Ubuntu, JIRA, Confluence, Sentry</p>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default Work;
