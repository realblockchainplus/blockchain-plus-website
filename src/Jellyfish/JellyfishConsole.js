import React, { Component } from 'react';

class JellyfishConsole extends Component {
  render() {
    return (
      <div id="console" style={{ display: 'none' }}>
          <div className="console-field" id="debugJellyfish">
            <b>jellyfish debug</b>
              Frame rate: <span id="frameRate">NaN</span><br />

              <span className="input-section">count</span>
              <input type="text" className="textboxDebug" id="jCount" /><br />
              <span className="input-section">size</span>
              <input type="text" className="textboxDebug" id="jScale" />
              <input type="text" className="textboxDebug" id="jScaleRandom"  /><br />
              <span className="input-section">Turbulence</span>
              <input type="text" className="textboxDebug" id="jTurb" /><br />
              <span className="input-section">speed</span>
              <input type="text" className="textboxDebug" id="jSpeed" /><br />
          </div>
      </div>
    );
  }
}

export default JellyfishConsole;