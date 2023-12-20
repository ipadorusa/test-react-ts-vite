import { Link } from "react-router-dom"
import "./indes.css";

export default function Nav() {
  return (
    <nav className="menu">
      <ul>
				<Link to="/contact"><li>contact</li></Link>
				<Link to="/list"><li>list</li></Link>
        <Link to="/about"><li>about</li></Link>
			</ul>
    </nav>
  )
}
