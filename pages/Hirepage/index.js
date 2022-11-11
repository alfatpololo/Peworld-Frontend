import NavAfterLogin from "../../components/navafterloginpages";
import Footer from "../../components/footer/Footer";
import Image from "next/image";
import Tabs from "../../components/tabs/Tabs";

export default function Hirepage() {

  
  return (
    <>
      <NavAfterLogin />

      <section className="section absolute w-full bg-primary pt-36 h-56">
    </section>

      <section className="pt-40 z-1 relative">
      
        <div className="container">
            <div className="flex flex-wrap ">
                <div className="w-fit mx-auto pt-5">
                    <img src="Ellipse 326.png" alt="" />
                </div>
                <div className="w-full pt-5">
                    <h1 className="text-center text-lg font-semibold text-dark">Louis Tomlinsoon</h1>
                </div>
                <div className="w-full pt-5">
                    <h1 className="text-center text-sm font-normal text-dark">Web Developer</h1>
                </div>
                <div className="w-full pt-5">
                    <h1 className="text-center text-sm font-normal text-softGrey">Purwokerto, Jawa Tengah</h1>
                </div>
                <div className="w-full pt-5">
                    <h1 className="text-center text-sm font-normal text-softGrey">Freelancer</h1>
                </div>
                <div className="w-full pt-5">
                    <p className="text-center text-sm font-normal text-softGrey">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum erat orci, mollis nec 
                    <br></br>gravida sed, ornare quis urna. Curabitur eu lacus fringilla, vestibulum risus at.</p>
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

      <section className="mt-20 pb-2 pt-2 w-full flex items-center justify-center lg:pb-0">
        <div className="container">
        <h1 className="mb-5 text-dark text-semibold text-2xl">Data Diri</h1>
        <hr className="mb-5"></hr>
          <div className="flex flex-wrap">          
          <label for="namalengkap" className=" text-sm font-normal text-softGrey pb-4">Nama Lengkap</label>
                    <input type="text" id="namalengkap" placeholder="Masukan nama lengkap" className="w-full bg-white ring-lightGrey ring-2 text-dark mb-5 p-4 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary" />
          <label for="jobdesk" className=" text-sm font-normal text-softGrey pb-4">Job Desk</label>
                    <input type="text" id="jobdesk" placeholder="Masukan jobdesk" className="w-full bg-white ring-lightGrey ring-2 text-dark mb-5 p-4 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary" />
          <label for="domisili" className=" text-sm font-normal text-softGrey pb-4">Domisili</label>
                    <input type="text" id="domisili" placeholder="Masukan domisili" className="w-full bg-white ring-lightGrey ring-2 text-dark mb-5 p-4 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary" />
          <label for="tempatkerja" className=" text-sm font-normal text-softGrey pb-4">Tempat kerja</label>
                    <input type="text" id="tempatkerja" placeholder="Masukan tempat kerja" className="w-full bg-white ring-lightGrey ring-2 text-dark mb-5 p-4 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary" />
          <label for="deskripsi" className=" text-sm font-normal text-softGrey pb-4">Deskripsi singkat</label>
                    <textarea type="textarea" id="deskripsi" placeholder="Tuliskan Deskripsi singkat" className="w-full bg-white ring-lightGrey ring-2 text-dark mb-5 p-4 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary" />
                    <button type="submit" href="" className="mt-10 w-full text-base text-center font-bold text-white bg-primary py-6 rounded-md px-8">Hire</button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}