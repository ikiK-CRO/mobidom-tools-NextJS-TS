import Link from "next/link";

export default function Page() {
  return (
    <div className="center ">
      <div className="header padd">
        <h1 className="padd">MENU</h1>
        <Link href="/indexpage/tool1">TOOL 1</Link><br />
        <Link href="/">ODJAVA</Link>
      </div>

    </div >
  );
}
