import { Link } from "react-router-dom";

export default function ListPage() {
  return (
    <div>
      <h2>List</h2>
      <ul>
				<Link to="/contact"><li>contact</li></Link>
				<Link to="/list"><li>list</li></Link>
        <Link to="/about"><li>about</li></Link>
			</ul>
    </div>
  )
}
