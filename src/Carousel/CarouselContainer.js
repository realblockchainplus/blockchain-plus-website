import React, { Component } from 'react';
import {
  Carousel,
  CarouselControl,
  CarouselIndicators,
  CarouselItem
} from 'reactstrap';
import CarouselSlide from './CarouselSlide';
import classes from './Carousel.css';

class CarouselContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
    this.content = this.props.content;
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === this.content.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? this.content.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;

    return (
      <div className={`${classes['carousel-container']}`}>
        <Carousel
          activeIndex={activeIndex}
          next={this.next}
          previous={this.previous}
        >
          <CarouselIndicators items={this.content} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
          {this.content.map((slide, index) => {
            const { images, title, description }  = slide;
            return (
              <CarouselItem
                key={index}
                onExiting={this.onExiting}
                onExited={this.onExited}
              >
                <CarouselSlide
                  key={index}
                  onExiting={this.onExiting}
                  onExited={this.onExited}
                  images={images}
                  title={title}
                  description={description}
                />
              </CarouselItem>
            );
          })};
        </Carousel>
      </div>
    );
  }
}

export default CarouselContainer;