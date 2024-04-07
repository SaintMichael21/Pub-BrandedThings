export default function Navbar() {
  return (
    <>
      {/* Navbar Start */}
      <section className="navbar">
        <div className="flex p-1 border-b-2 border sticky">
          <div>
            <a href="/">
              <img
                src="https://www.freepnglogos.com/uploads/logo-website-png/logo-website-website-logo-png-transparent-background-background-15.png"
                alt="Logo"
                className="h-10"
              />
            </a>
          </div>
          <div className="opacity-70 text-slate-600 my-auto text-xs flex m-auto gap-11">
            <a
              href="/"
              className="hover:opacity-100 hover:text-slate-800 active:text-slate-300 hover:scale-125 duration-200"
            >
              Home
            </a>
          </div>
        </div>
      </section>
      {/* Navbar End */}
    </>
  );
}
