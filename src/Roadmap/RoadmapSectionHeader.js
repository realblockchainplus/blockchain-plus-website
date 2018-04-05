import React, { Component } from 'react';

class RoadmapSectionHeader extends Component {
  render() {
    const { title } = this.props;
    return (
      <h4 className='text-center'>{title}</h4>
    );
  }
}

export default RoadmapSectionHeader;