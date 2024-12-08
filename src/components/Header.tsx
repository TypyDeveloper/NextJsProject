import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  return (
    <nav className="bg-gray-00 text-white">
      <div className="container mx-auto flex items-center justify-between p-4 text-black w-full">
        <div className="text-xl font-bold">
          <Link href="/"><Image src={"/assets/Vector.png"} alt="" width={30} height={20} /></Link>
        </div>
        <div className="space-x-4">
        <Link href="/loginpage" className="hover:text-gray-300">Find a Store
          </Link> |
          <Link href="/gethelp" className="hover:text-gray-300">Help
          </Link> |
          <Link href="/loginpage" className="hover:text-gray-300">
            Login
          </Link> |
          <Link href="/signup" className="hover:text-gray-300">
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
