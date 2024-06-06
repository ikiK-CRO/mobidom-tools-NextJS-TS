import Link from "next/link";

export default function Page() {
  return (
    <div>
      <div className="header center">
        <h1>Hello, 2nd page!</h1>
        <Link href="/">Back to LogIn</Link>
      </div>
    </div >
  );
}
