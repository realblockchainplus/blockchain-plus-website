import React, { Component } from 'react';
import AccordionPanel from './AccordionPanel';

class Accordion extends Component {
  state = {
    activePanel: null
  }
  handleToggle(panelId) {
    if (panelId === this.state.activePanel) {
      this.setState({ activePanel: null });
    }
    else {
      this.setState({ activePanel: panelId});
    }
  }
  render() {
    return (
      this.props.content.map((panel, index) => {
        const isActive = this.state.activePanel === index;
        return <AccordionPanel
          key={index}
          index={index}
          content={panel}
          isActive={isActive}
          handleToggle={(panelId) => this.handleToggle(panelId)}
        />
      })
    );
  }
}

export default Accordion;