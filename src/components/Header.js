import { useLocation } from 'react-router-dom'
import Button from './Button'
import PropTypes from 'prop-types'

const Header = ({ title, onClick, formOpen }) => {
  const location = useLocation()

  return(
    <header className='header'>
      <h1>{title}</h1>
      {location.pathname === '/' && <Button color={formOpen ? 'red' : 'green'}
      text={formOpen ? 'Done' : 'Add'} onClick={onClick}/>}
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
