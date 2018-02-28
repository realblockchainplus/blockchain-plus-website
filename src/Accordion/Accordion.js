import React, { Component } from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faQuestion } from '@fortawesome/fontawesome-free-solid';
import AccordionPanel from './AccordionPanel';
import classes from './Accordion.css';

class Accordion extends Component {
  state = {
    activePanel: null,
    numQuestionMarks: 10,
    questionMarks: []
  }
  componentDidMount() {
    this.updateQuestionMarks();
    window.addEventListener('resize', () => {
      this.updateQuestionMarks();
    })
  }
  handleToggle(panelId) {
    if (panelId === this.state.activePanel) {
      this.setState({ activePanel: null });
    }
    else {
      this.setState({ activePanel: panelId});
    }
  }
  createQuestionMarks() {
    let questionMarks = [];
    const width = this.accordion.clientWidth;
    const height = this.accordion.clientHeight;
    for (let i = 0; i < this.state.numQuestionMarks; i++) {
      let questionMark = {};
      questionMark.x = Math.random() * width;
      questionMark.y = Math.random() * (height * 2);
      questionMark.size = Math.random() * (6 - 1) + 1;
      questionMark.rotation = Math.random() * (45 - -45) + -45;
      questionMarks.push(questionMark);
    }
    return questionMarks;
  }
  updateQuestionMarks() {
    const questionMarks = this.createQuestionMarks();
    this.setState({ questionMarks });
  }
  render() {
    console.log('Accordion render');
    return (
      <div ref={(accordion) => { this.accordion = accordion }}  className={`${classes['accordion']} my-5`}>
        {this.state.questionMarks.map((questionMark, index) => {
          const { x, y, size, rotation } = questionMark;
          const intSize = Math.ceil(size);
          return <FontAwesomeIcon
            key={index}
            icon={faQuestion}
            size={`${intSize}x`}
            style={{ top: y, left: x - (intSize * 35), transform: `rotate(${rotation}deg)` }}
          />
        })}
        {this.props.content.map((panel, index) => {
          const isActive = this.state.activePanel === index;
          return <AccordionPanel
            key={index}
            index={index}
            content={panel}
            isActive={isActive}
            handleToggle={(panelId) => this.handleToggle(panelId)}
          />
        })}
      </div>
    );
  }
}

export default Accordion;