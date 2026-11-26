import Link from "next/link";

export default function NotFound() {
  return (
    <section className="wrap hero">
      <h1>Sidan finns inte</h1>
      <p>
        <Link href="/">Till översikten</Link>
      </p>
    </section>
  );
}
