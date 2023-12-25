import { Link } from "react-router-dom"
import "./indes.scss";

export default function Nav() {
  return (
    <nav className="nav">
      <ul className="nav__list">
				<Link to="/contact"><li>contact</li></Link>
				<Link to="/list"><li>list</li></Link>
        <Link to="/about"><li>about</li></Link>
			</ul>
    </nav>
  )
}
