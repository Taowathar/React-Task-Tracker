import PropTypes from 'prop-types'
import Button from './Button'


const Header = ({title}) => {
    const onClick = () => {
        console.log('Click')
    }

    return (
        <header className='header'>
            <h1>{title}</h1>
            {/* <h1 style={headerStyle}>{title}</h1> */}
            {/* <h1 style={{color: 'red', backgroundColor: 'green'}}>{title}</h1> */}
            <Button color='green' text='Add' onClick={onClick}></Button>
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker'
}


Header.propTypes = {
    title: PropTypes.string.isRequired,
}

// const headerStyle = {
//     color: 'red',
//     backgroundColor: 'green'
// }

export default Header
