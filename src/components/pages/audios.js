import React from 'react'
import PropTypes from 'prop-types'

const audios = props => {
    return (
        <div className="audio-container">
            <div className="audio-info">
                <h4 id="title">Audio Title</h4>
                <div className="progress-container">
                    <div className="progress"></div>
                </div>
            </div>
            <audio src="" id="audio" />
            <div className="audio-thubmail-container">
                <img src="" alt="audio-thubmail" id="audio-thubmail" />
            </div>

            <div className="audio-nav">
                <button id="audio-prev" className="audio-action-btn">prev</button>
                <button id="audio-play" className="audio-big-action-btn">play</button>
                <button id="audio-next" className="audio-action-btn">next</button>
            </div>
        </div>
    )
}

audios.propTypes = {

}

export default audios
