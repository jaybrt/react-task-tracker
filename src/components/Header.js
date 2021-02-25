import Button from './Button'
import PropTypes from 'prop-types'

const Header = ({ title, onClick, formOpen }) => {

  return(
    <header className='header'>
      <h1>{title}</h1>
      <Button color={formOpen ? 'red' : 'green'}
      text={formOpen ? 'Done' : 'Add'} onClick={onClick}/>
    </header>
  )
}

Header.defaultProps = {
  title: 'Task Tracker',
}

Header.propTypes = {
  formOpen: PropTypes.bool,
}

export default Header
