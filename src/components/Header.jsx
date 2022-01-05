import PropTypes from 'prop-types'

// Header components takes text, bg-color, text color as parameters
function Header({ text, bgColor, textColor }) {
  // Declare a style variable
  const headerStyle = {
    backgroundColor: bgColor,
    color: textColor,
  }

  // Return the header
  return (
    <header style={headerStyle}>
      <div className="container">
        <h2>{text}</h2>
      </div>
    </header>
  )
}

// Set the default values for style
Header.defaultProps = {
  text: 'Feedback UI',
  bgColor: 'rgba(0,0,0,0.4)',
  textColor: '#ff6a95'
}

Header.propTypes = {
  text: PropTypes.string,
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
}

export default Header
