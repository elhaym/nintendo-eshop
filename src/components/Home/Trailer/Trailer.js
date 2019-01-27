import React from 'react';
import CloseButton from './CloseButton';
import './styles/trailer.css';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';




export class Trailer extends React.Component {
    render() {
        if (!this.props.isOpen) {
            return null;
        }
        if (this.props.isOpen) {
            return (
                <CSSTransitionGroup
                    transitionName="fade"
                    transitionAppear={true}
                    transitionAppearTimeout={500}
                    transitionEnter={false}
                    transitionLeave={false}
                    >
                    <div id="hero-trailer">
                        <div className="trailer">
                            <iframe
                                width="100%"
                                height="685"
                                src="https://www.youtube.com/embed/rkux5h0PeXo"
                                frameBorder="0"
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen>
                            </iframe>
                        </div>
                        <CloseButton closeTrailer={this.props.closeTrailer} />
                    </div>
                </CSSTransitionGroup>

            )
        }
    }
}

export default Trailer;