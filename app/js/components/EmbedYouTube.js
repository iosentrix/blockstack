import { PropTypes } from 'react'

const propTypes = {
  src: PropTypes.string.isRequired,
}

const EmbedYouTube = ({ src }) => (
  <div className="embed-responsive embed-responsive-16by9">
    <iframe
      className="embed-responsive-item"
      src={src}
      frameBorder="0"
      allowFullScreen>
    </iframe>
  </div>
)

EmbedYouTube.propTypes = propTypes

export default EmbedYouTube
