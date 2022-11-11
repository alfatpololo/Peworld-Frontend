import NavAfterLogin from "../../components/navafterloginpages";
import Footer from "../../components/footer/Footer";
import Image from "next/image";
import Tabs from "../../components/tabs/Tabs";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Profilerecruiters() {
    const router = useRouter();
    const {id} = router.query;
    const [dataUser, setDataUser] = useState([]);


      useEffect(() => {
        if (id) {
          axios.get(`http://localhost:3001/userrecruiters/${id}`)
          .then((response) => {
            console.log(response.data);
            setDataUser(response.data[0]);
          })
          .catch((err) => {
            console.log(err);
          })
        }      
      }, [router.isReady, id])

    

    console.log(dataUser)
  
  return (
    <>
      <NavAfterLogin />
    
      <section className="section absolute w-full bg-primary pt-36 h-56">
    </section>

    
        <>
      <section className="pt-40 z-1 relative">
        <div className="container">
        
          <div className="flex flex-wrap ">
          <div className="w-fit mx-auto pt-5">
              <img src="/Ellipse 326.png" alt="" />
          </div>
          <div className="w-full pt-5">
              {/* {dataUser.map((item, index) => (
                <div key={index}></div>
              ))} */}
              <h1 className="text-center text-lg font-semibold text-dark">{dataUser.name}</h1>
          </div>
          
          <div className="w-full pt-5">
              <h1 className="text-center text-sm font-normal text-dark">{dataUser.position} </h1>
          </div>
          <div className="w-full pt-5">
              <h1 className="text-center text-sm font-normal text-softGrey">{dataUser.city}</h1>
          </div>
          <div className="w-full pt-5">
              <h1 className="text-center text-sm font-normal text-softGrey">{dataUser.field}</h1>
          </div>
          <div className="w-full pt-5">
              <p className="text-center text-sm font-normal text-softGrey">{dataUser.description}</p>
          </div>
          <div className="w-full pt-5 mt-10 text-center">
              <Link href={`/Editprofilerecruiters/${id}`} className="py-4 px-16 font-bold text-white  bg-primary rounded-md">Edit</Link>
          </div>
          
          <div className="w-full pt-5 mt-10 text-center">
              <h1 className="text-lg text-dark font-semibold">Skills</h1>
              <div className="w-full flex flex-wrap pt-5 justify-center">
          <p className="bg-secondary text-white font-semibold rounded-md px-6 py-2">php</p>
          <p className="bg-secondary text-white font-semibold rounded-md px-6 py-2 lg:ml-5">php</p>
          <p className="bg-secondary text-white font-semibold rounded-md px-6 py-2 lg:ml-5">php</p>
          <p className="bg-secondary text-white font-semibold rounded-md px-6 py-2 lg:ml-5">php</p>
        </div>
        <div className="w-full pt-5 mt-10 text-center">
              <a href="" className="text-softGrey font-normal">Louistommo@gmail.com</a>
          </div>
        <div className="w-full pt-5 mt-10 text-center">
              <a href="" className="text-softGrey font-normal">@Louist91</a>
          </div>
        <div className="w-full pt-5 mt-10 text-center">
              <a href="" className="text-softGrey font-normal">@Louistommo</a>
          </div>
        <div className="w-full pt-5 mt-10 text-center">
              <a href="" className="text-softGrey font-normal">@Louistommo91</a>
          </div>
          </div>
      </div>          
        </div>
      </section>
      </>

      

    <Tabs/>

      <Footer />
    </>
  );
}