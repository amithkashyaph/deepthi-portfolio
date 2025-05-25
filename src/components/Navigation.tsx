import Image from "next/image";
import Link from "next/link";

const Navigation = () => {
  return (
    <div className="flex w-[80%] justify-between mx-auto bg-gray-950 py-6 px-12 rounded-3xl text-white uppercase tracking-wider">
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
        <ul className="flex gap-12 text-[16px]">
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
  );
};

export default Navigation;
