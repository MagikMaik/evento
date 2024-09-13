import Logo from "@/components/Logo";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-3 pt-36">
      <h1 className="text-3xl lg:text-6xl font-bold tracking-tight">
       
        Find events around you
      </h1>
      <p>Browse more than 10,000 events near you</p>
      <form>
        <input
          type="text"
          placeholder="Search events in every city"
          spellCheck={false}
        />
      </form>

      <section>
        <p>Popular:</p>
        <div>
          <Link href="/events/austin">Austin</Link>
          <Link href="/events/new-york">New York</Link>
        </div>
      </section>
    </main>
  );
}
