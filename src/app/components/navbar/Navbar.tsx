import Link from "next/link";

export default function Navbar() {
  return (
    <ul>
      <li>
        <Link href="/login"> Login </Link>
      </li>
      <li>
        <Link href="/"> Home </Link>
      </li>
    </ul>
  );
}
