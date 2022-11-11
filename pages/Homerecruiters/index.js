import NavAfterLogin from "../../components/navafterloginpages";
import Footer from "../../components/footer/Footer";
import Image from "next/image";
import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";

export async function getStaticProps(context) {
  const response = await axios({
      method: "GET",
      url: 'http://localhost:3001/userrecruiters/list'
  })
  return {
      props: {
          data: response.data.data.rows
      },
      
      revalidate:15
      // will be passed to the page component as props
  }
}

export default function Homerecruiters(props) {
  
  // const [dataUser, setDataUser] = useState([]);

  // useEffect(() => {
  //   axios.get(`http://localhost:3001/userrecruiters/list`)
  //   .then((response) => {
  //     console.log(response.data.data.rows);
  //     setDataUser(response.data.data.rows);
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   })
  // }, [])
  
  
  return (
    <>
      <NavAfterLogin />

      {/* Top Jobs Section */}
      <section className="bg-primary mt-20 pb-2 pt-2 w-full flex items-center justify-center lg:pb-0">
        <div className="container ">
          <div className="flex flex-wrap">
            <div className="px-6 py-6 justify-center items-center justify-items-center">
              <h1 className="text-white text-semibold text-xl lg:text-2xl">
                Top Jobs
              </h1>
            </div>
          </div>
        </div>
      </section>
      {/* Top Jobs Section */}

      {/* Search Section */}
      <section className="pt-28 w-full flex items-center z-10">
        <div className="container rounded-lg">
          <div className="flex flex-wrap items-center justify-between relative shadow-lg bg-white">
            <div className="px-4">
              <input
                type="email"
                id="email"
                placeholder="Search for any skill"
                class="w-full bg-white ring-transparent ring-2 text-dark p-4 rounded-md focus:outline-none"
              />
            </div>
            <div className="flex items-center px4">
              <nav
                id="nav-menu"
                className="hidden absolute py-5 bg-white shadow-lg rounded-lg max-w-[250px] w-full right-4 top-full lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none"
              >
                <ul className="block lg:flex">
                  <li className="group">
                    <img
                      src="/search (1) 1.png"
                      alt=""
                      className="px-6 py-3 mx-3"
                    />
                  </li>
                  <li className="group">
                    <a
                      href="#home"
                      class="text-base text-start text-softGrey border border-l-1 border-t-0 border-r-0 border-b-0 bg-transparanet px-6 py-3 mx-3 flex"
                    >
                      Kategori
                    </a>
                  </li>
                  <li className="group">
                    <a
                      href="#about"
                      class="text-base text-white bg-primary border rounded-md border-primary px-6 py-3 mx-3 flex"
                    >
                      Search
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </section>
      {/* Search Section */}

      {/* Search Section */}
      <section className="mt-20 pb-2 pt-2 w-full flex items-center justify-center lg:pb-0">
        <div className="container">
        {props.data.map((item, index, e) => (
          
                <div className="flex flex-wrap border">
                <div className="px-6 py-6 relative">
                  <img src="/Ellipse 326.png" alt="" />
                </div>
                <div className="px-6 py-6 relative">              
                  <p className="text-dark font-semibold">{item.name}</p>
                  <p>{item.position}</p>
                  <p>{item.city}</p>
                  <div className="flex pt-2">
                    <p className="bg-secondary text-white font-semibold rounded-md px-6 py-2">php</p>
                    <p className="bg-secondary text-white font-semibold rounded-md px-6 py-2 ml-5">php</p>
                  </div>
                </div>
                <div className="lg:w-1/2 lg:mx-auto lg:justify-self-end lg:-mr-1 lg:py-20 lg:px-6 text-end">
                  <Link href={`/Profilerecruiters/${item.id}`} className="bg-primary py-3 px-3 lg:text-xl text-center font-semibold lg:py-6 lg:px-6 text-white">Lihat Profile</Link>
                </div>
              </div>
                ))}          
        </div>
      </section>
      {/* Search Section */}

      {/* Pagination */}
      <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6 mt-10">
      <div className="flex flex-1 justify-between sm:hidden">
        <a
          href="#"
          className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          Previous
        </a>
        <a
          href="#"
          className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          Next
        </a>
      </div>
      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-gray-700">
            Showing <span className="font-medium">1</span> to <span className="font-medium">10</span> of{' '}
            <span className="font-medium">97</span> results
          </p>
        </div>
        <div>
          <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
            <a
              href="#"
              className="relative inline-flex items-center rounded-l-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"
            >
              <span className="sr-only">Previous</span>
              
            </a>
            {/* Current: "z-10 bg-indigo-50 border-indigo-500 text-indigo-600", Default: "bg-white border-gray-300 text-gray-500 hover:bg-gray-50" */}
            <a
              href="#"
              aria-current="page"
              className="relative z-10 inline-flex items-center border border-indigo-500 bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-600 focus:z-20"
            >
              1
            </a>
            <a
              href="#"
              className="relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"
            >
              2
            </a>
            <a
              href="#"
              className="relative hidden items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20 md:inline-flex"
            >
              3
            </a>
            <span className="relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700">
              ...
            </span>
            <a
              href="#"
              className="relative hidden items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20 md:inline-flex"
            >
              8
            </a>
            <a
              href="#"
              className="relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"
            >
              9
            </a>
            <a
              href="#"
              className="relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"
            >
              10
            </a>
            <a
              href="#"
              className="relative inline-flex items-center rounded-r-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"
            >
              <span className="sr-only">Next</span>
              
            </a>
          </nav>
        </div>
      </div>
    </div>
      {/* Pagination */}
      <Footer />
    </>
  );
}