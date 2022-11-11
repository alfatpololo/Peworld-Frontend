import Script from "next/script";
import Image from "next/image";

export default function NavAfterLogin() {
    return (
        <>
        {/* navbar-section */}
      <header className="bg-white shadow-lg fixed top-0 left-0 w-full flex items-center z-10">
        <div className="container">
          <div className="flex items-center justify-between relative">
            <div className="px-4">
              <img src="/logo.png" className="block py-6" alt="" />
            </div>
            <div className="flex items-center px4">
              {/* <button
                id="hamburger"
                name="hamburger"
                type="buttons"
                className="block absolute right-4"
              >
                <span className="primary hamburger-line transition duration-300 origin-top-left "></span>
                <span className="primary hamburger-line transition duration-300"></span>
                <span className="primary hamburger-line transition duration-300 origin-bottom-left"></span>
              </button> */}
              <nav id="nav-menu" className="hidden absolute py-5 bg-white shadow-lg rounded-lg max-w-[250px] w-full right-4 top-full lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none">
                            <ul className="block lg:flex">
                                <li className="group">
                                    <img src="/bell (1) 1.png" alt="" className="mr-12 py-3" />
                                </li>
                                <li className="group">
                                    <img src="/mail (3) 1.png" alt="" className="mr-14 py-3" />
                                </li>
                                <li className="group">
                                    <img src="/Mask Group.png" alt="" className="ms- py-2" />
                                </li>
                            </ul>
                        </nav>
            </div>
          </div>
        </div>
      </header>
        </>
    )
}