import { Link } from "react-router-dom"

export default function AboutPage() {
  const onHandleBtnApplay = () => {
    (window as any).quickApplyMobile('47078426','','t_category=m-main&amp;t_scnid=805&amp;t_content=SRI_M_100_MAIN_QUBIT_RCT_NOINFO&amp;dpId=SRI_M_100_MAIN_QUBIT_RCT_NOINFO', '')
  }
  return (
    <div>
      <h2>about</h2>
      <ul>
				<Link to="/contact"><li>contact</li></Link>
				<Link to="/list"><li>list</li></Link>
        <Link to="/about"><li>about</li></Link>
			</ul>
      <div>
        <button type="button" onClick={onHandleBtnApplay} className="sri_btn_sm"><span className="sri_btn_immediately">입사지원</span></button>
      </div>
    </div>
  )
}
