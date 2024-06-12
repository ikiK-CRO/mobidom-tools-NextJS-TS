import Link from "next/link";

export default function Page() {
  return (
    <div className="center ">
      <div className="header padd">
        {/* <h1 className="padd">MENI</h1> */}
      </div>
      <ul className="vertical-menu-3">
        <li><Link  href="/indexpage/tool1">USPOREDBA KUPAC-DOBAVLJAČ</Link></li>
        <li><Link  href="/">ODJAVA</Link></li>
      </ul>
    </div >
  );
}
