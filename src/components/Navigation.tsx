import Image from "next/image";
import Link from "next/link";

const Navigation = () => {
  return (
    <div className="">
      <div className="flex w-[1200px] justify-between m-auto bg-gray-950 opacity-50 py-6 px-12 rounded-3xl text-amber-100 hover:opacity-75">
        <div className="flex gap-2">
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          <Link className="text-xl hover:text-yellow-100 " href="/">
            Deepthi
          </Link>
        </div>
        <div>
          <ul className="flex gap-12 text-xl">
            <li className="hover:text-white">
              <Link href="/about">About</Link>
            </li>
            <li className="hover:text-white">
              <Link href="/work-experience">Work Experience</Link>
            </li>
            <li className="hover:text-white">
              <Link href="/projects">Projects</Link>
            </li>
            <li className="hover:text-white">
              <Link href="/testimonials">Testimonials</Link>
            </li>
            <li className="hover:text-white">
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
