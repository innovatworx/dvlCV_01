// components/Navbar.tsx
import Link from 'next/link';


const Navbar = () => {
  return (
    <nav className="navbar text-white py-5 px-10 font-semibold border rounded-full navbar-bg sticky top-0">
      <ul className="flex space-x-4">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/projects">Projects</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
