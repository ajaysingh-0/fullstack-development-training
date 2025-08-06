import { Link } from 'react-router-dom'

function Header() {
    return (
 <header className="flex justify-center bg-blue-300 py-4 shadow-md">
  <nav className="flex space-x-6">
    <Link to="/todo-add">
      <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-200">
        Add
      </button>
    </Link>

    <Link to="/todo-show">
      <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-200">
        Show
      </button>
    </Link>

    <Link to="/todo-done">
      <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-200">
        Done
      </button>
    </Link>
  </nav>
</header>

    )
}

export default Header;