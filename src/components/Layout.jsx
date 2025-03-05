import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

function Layout({children}) {
  return (
    <div>
        <header>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/tasks">Tasks</Link>
                </li>
            </ul>
        </header>
        <main>
            {children}
        </main>
    </div>
  )
}

Layout.propTypes = {
    children: PropTypes.node,
}

export default Layout
