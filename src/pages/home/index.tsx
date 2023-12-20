import { Link } from "react-router-dom"

export default function HomePage() {
  return (
    <div>
      <h2>HomePage</h2>
      <div>Homepage Blah</div>
      <ul>
				<Link to="/contact"><li>contact</li></Link>
				<Link to="/list"><li>list</li></Link>
        <Link to="/about"><li>about</li></Link>
			</ul>
    </div>
  )
}
