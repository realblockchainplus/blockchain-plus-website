import React, { Component } from 'react';

class RoadmapSectionHeader extends Component {
  render() {
    const { title } = this.props;
    return (
      <h4>{title}</h4>
    );
  }
}

export default RoadmapSectionHeader;