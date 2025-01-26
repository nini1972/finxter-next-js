import Link from 'next/link';

const Navbar = () => {
  const showAllLinks = false; // Change this to true to show all links
  return (
    <nav className= "bg-yellow-400 text-white p-4">
      <ul className="flex justify-between items-center">
      {showAllLinks && (
          <>
        <li className="mx-4">
            <Link href="/">
            Home
          </Link>
        </li>
        <li>
          <Link href="/blockbuster_chat">
            Blockbuster Chat 
          </Link>
        </li>
        <li>
          <Link href="/blockbuster_chat_2">
            Blockbuster Chat V2
          </Link>
        </li>
       </>
      )}
      <li>
          <Link href="/blockbuster_chat_3">
            Blockbuster Chat V3
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
