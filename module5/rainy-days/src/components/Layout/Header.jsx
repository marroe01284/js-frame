import { Link } from "react-router-dom";

export function Header() {
  return (
    <>
      <header className="flex justify-between p-2 max-w-6xl w-full mx-auto text-lg cursor-pointer">
        <Link to={"/"}>Rainy Days</Link>
        <nav className="flex gap-2">
          <Link to={"/products"}className="text-blue-400">Products</Link>
        </nav>
      </header>
    </>
  );
}
