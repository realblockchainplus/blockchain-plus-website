import React, { Component } from 'react';

class RoadmapSectionDescription extends Component {
  render() {
    const { description } = this.props;
    return (
      <p>{description}</p>
    );
  }
}

export default RoadmapSectionDescription;