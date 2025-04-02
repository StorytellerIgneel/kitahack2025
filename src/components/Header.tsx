function Header() {
  return (
    <nav className="flex justify-between items-center bg-[#025E86] h-16 w-full max-w-screen px-30">
      <div className="flex items-center">
        <img
        className="h-12"
          src="/flood-logo.svg"
          alt="flood logo"
        />
        <p className="text-white text-2xl">
          FloodInfo
        </p>
      </div>
      <div className="flex gap-16">
        <a className="text-white hover:text-gray-200" href="#">Home</a>
        <a className="text-white hover:text-gray-200" href="#about">About</a>
        <a className="text-white hover:text-gray-200" href="#contact">Contact</a>
      </div>
    </nav>
  );
}

export default Header;
