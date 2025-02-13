import { Link } from 'react-router-dom';
export function Header() {
    return (
      <header>
        {/* make a link back to home page using anchor tag */}
        <Link className='text-blue-500' to="/">
          Home
        </Link>
        <Link className='text-blue-300 mx-4' to="/about">
          About
        </Link>
        {/* create a new link to the profile page using Link component */}
        <Link className='text-blue-300' to="/profile">
          Profile
        </Link>
      </header>
    )
  }