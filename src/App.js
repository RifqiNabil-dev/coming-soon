import React from 'react';
import { ReactComponent as IconFacebook } from './assets/icons/facebook.svg';
import { ReactComponent as IconTwitter } from './assets/icons/twitter.svg';
import { ReactComponent as IconGithub } from './assets/icons/github.svg';
import Timer from './Timer';
import './App.css';

function App() {
  return (
    <div className="card">
    <div className="header">
      <div className="logo">
        <p>Home Server</p>
      </div>
      <div className="social">
        <a href="https://facebook.com" title="Facebook" target="_blank" rel="noopener noreferrer">
          <IconFacebook className="icon" />
        </a>
        <a href="https://www.instagram.com/n4bil_alfath/" title="Twitter" target="_blank" rel="noopener noreferrer">
          <IconTwitter className="icon" />
        </a>
        <a href="https://github.com/RifqiNabil-dev" title="GitHub" target="_blank" rel="noopener noreferrer">
          <IconGithub className="icon" />
        </a>
      </div>
    </div>
    <div className="content">
      <div className="title-holder">
        <h1>Website Under Construction</h1>
        <p>Website coming soon. Please check back to know more.</p>
      </div>
        <div className="cta">
          <Timer duration={35 * 24 * 60 * 60 * 1000} />
        </div>
    </div>
    <div className="footer">
      <span>made by <a className="underlined" href="https://github.com/RifqiNabil-dev" target="_blank" rel="noopener noreferrer">Riqi Nabil</a> using <a className="underlined" href="https://reactjs.org/" title="ReactJS" target="_blank" rel="noopener noreferrer">React</a> | <a className="underlined" href="https://github.com/RifqiNabil-dev" title="GitHub repo" target="_blank" rel="noopener noreferrer">GitHub</a></span>
    </div>
  </div>
  );
}

export default App;
