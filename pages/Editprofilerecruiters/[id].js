import NavAfterLogin from "../../components/navafterloginpages";
import Footer from "../../components/footer/Footer";
import Image from "next/image";
import { useRouter } from "next/router";
import { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { data } from "autoprefixer";

export default function EditProfilerecruiters() {

  const [dataUser, setDataUser] = useState([]);
 
  const [update, setUpdate] = useState({
    name: dataUser.name,
    field: dataUser.field,
    city: dataUser.city,
    description: dataUser.description,
    email: dataUser.email,
    instagram: dataUser.instagram,
    phone: dataUser.phone,
    linkedin: dataUser.linkedin
  })
  
  useEffect(() => {
  const data = JSON.parse(localStorage.getItem("data"));
  const id = data.id;
  console.log(id);
  axios
    .get(`http://localhost:3001/userrecruiters/${id}`)
    .then((response) => {
      setDataUser(response.data);
      console.log(response.data);
    })
    .catch((error) => {
      console.error(error);
    });
}, []);


const handlePost = (e) => {
  const data = JSON.parse(localStorage.getItem("data"));
  const id = data.id
  e.preventDefault();
  const form = {
    name: update.name,
    field: update.field,
    city: update.city,
    description: update.description,
    email: update.email,
    instagram: update.instagram,
    phone: update.phone,
    linkedin: update.linkedin  
  }
  console.log(form)
  axios
      .put(`http://localhost:3001/userrecruiters/update/${id}`, form)
      .then((res) => {
          console.log(res);
          alert("Update Success");
// router.push('/home');
      })
      .catch((err) => {
          console.log(err);
          alert("Update Failed");
      })
};




  return (
    <>
    <NavAfterLogin />

    <section className="section absolute w-full bg-primary pt-36 h-56">
    </section>

    <section className="pt-40 z-1 relative">
      <div className="container">
          <div className="flex flex-wrap ">
          {dataUser.map((item, index) => (
            <>
              <div className="w-fit mx-auto pt-5">
                  <img src="/Ellipse 326.png" alt="" />
              </div>
              <div className="w-full pt-5">
                  <h1 className="text-center text-lg font-semibold text-dark">{item.name}</h1>
              </div>
              <div className="w-full pt-5">
                  <h1 className="text-center text-sm font-normal text-dark">{item.position}</h1>
              </div>
              <div className="w-full pt-5">
                  <h1 className="text-center text-sm font-normal text-softGrey">{item.field}</h1>
              </div>
              <div className="w-full pt-5">
                  <h1 className="text-center text-sm font-normal text-softGrey">{item.description}</h1>
              </div>
              </>
            ))}
          </div>
      </div>
    </section>

    <section className="mt-20 pb-2 pt-2 w-full flex items-center justify-center lg:pb-0">
      <form onSubmit={(e) => handlePost(e)}>
        <div className="container"> 
        <h1 className="mb-5 text-dark text-semibold text-2xl">Data Diri</h1>
        <hr className="mb-5"></hr>
          <div className="flex flex-wrap">          
          
          {dataUser.map((item, index) => (
            <>
            <div key={index}>
            <label for="namalengkap" className=" text-sm font-normal text-softGrey pb-4">Nama Perusahaan</label>
                      <input type="text" defaultValue={item.name} onChange={(e) => setUpdate({...update,name: e.target.value})} id="namalengkap" placeholder="Masukan nama lengkap" className="w-full bg-white ring-lightGrey ring-2 text-dark mb-5 p-4 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary" />
            <label for="field" className=" text-sm font-normal text-softGrey pb-4">Bidang</label>
                      <input type="text" id="field" onChange={(e) => setUpdate({...update,field: e.target.value})} placeholder="Masukan bidang perusahaan ex : Financial" className="w-full bg-white ring-lightGrey ring-2 text-dark mb-5 p-4 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary" />
            <label for="domisili" className=" text-sm font-normal text-softGrey pb-4">Kota</label>
                      <input type="text" id="domisili" onChange={(e) => setUpdate({...update,city: e.target.value})} placeholder="Masukan kota" className="w-full bg-white ring-lightGrey ring-2 text-dark mb-5 p-4 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary" />
            <label for="deskripsi" className=" text-sm font-normal text-softGrey pb-4">Deskripsi singkat</label>
                      <textarea type="textarea" id="deskripsi" onChange={(e) => setUpdate({...update,description: e.target.value})} placeholder="Tuliskan Deskripsi singkat" className="w-full bg-white ring-lightGrey ring-2 text-dark mb-5 p-4 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary" />
            <label for="email" className=" text-sm font-normal text-softGrey pb-4">Email</label>
                      <input type="email" onChange={(e) => setUpdate({...update,email: e.target.value})} id="email" placeholder="Masukan email" className="w-full bg-white ring-lightGrey ring-2 text-dark mb-5 p-4 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary" />
            <label for="instagram" className=" text-sm font-normal text-softGrey pb-4">Instagram</label>
                      <input type="instagram" onChange={(e) => setUpdate({...update,instagram: e.target.value})} id="email" placeholder="Masukan nama Instagram" className="w-full bg-white ring-lightGrey ring-2 text-dark mb-5 p-4 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary" />
            <label for="phone" className=" text-sm font-normal text-softGrey pb-4">No. Handphone</label>
                      <input type="phone" onChange={(e) => setUpdate({...update,phone: e.target.value})} id="phone" placeholder="Masukan nomor telepon" className="w-full bg-white ring-lightGrey ring-2 text-dark mb-5 p-4 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary" />
            <label for="linkedin" className=" text-sm font-normal text-softGrey pb-4">Linkedin</label>
                      <input type="text" onChange={(e) => setUpdate({...update,linkedin: e.target.value})} id="linkedin" placeholder="Masukan nama linkedin" className="w-full bg-white ring-lightGrey ring-2 text-dark mb-5 p-4 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary" />
                      <button type="submit" href="" className="mt-10 w-full text-base text-center font-bold text-white bg-primary py-6 rounded-md px-8">Simpan</button>
                      </div>
                      </>
          ))}
          
          </div>
        </div>
        </form>
      </section>

    <section className="mt-20 pb-2 pt-2 w-full flex items-center justify-center lg:pb-0">
        <div className="container">
        <h1 className="mb-5 text-dark text-semibold text-2xl">Skill</h1>
        <hr className="mb-5"></hr>
          <div className="flex flex-wrap">          
                    <input type="text" id="skill" placeholder="Ex: Java" className="w-full bg-white ring-lightGrey ring-2 text-dark mb-5 p-4 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary" />
                    <button type="submit" href="" className="mt-10 w-full text-base text-center font-bold text-white bg-primary py-6 rounded-md px-8">Simpan</button>
          </div>
        </div>
      </section>

    <section className="mt-20 pb-2 pt-2 w-full flex items-center justify-center lg:pb-0">
    <div className="container">
        <h1 className="mb-5 text-dark text-semibold text-2xl">Pengalaman Kerja</h1>
        <hr className="mb-5"></hr>
          <div className="flex flex-wrap">          
          <label for="position" className=" text-sm font-normal text-softGrey pb-4">Posisi</label>
                    <input type="text" id="position" placeholder="Ex: UI/UX Designer" className="w-full bg-white ring-lightGrey ring-2 text-dark mb-5 p-4 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary" />
          <label for="companyname" className=" text-sm font-normal text-softGrey pb-4">Nama Perusahaan</label>
                    <input type="text" id="companyname" placeholder="Ex: Gojek" className="w-full bg-white ring-lightGrey ring-2 text-dark mb-5 p-4 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary" />
          <label for="date" className=" text-sm font-normal text-softGrey pb-4">Bulan/Tahun Masuk</label>
                    <input type="date" id="date" placeholder="Masukan domisili" className="w-full bg-white ring-lightGrey ring-2 text-dark mb-5 p-4 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary" />
          <label for="date" className=" text-sm font-normal text-softGrey pb-4">Bulan/Tahun Keluar</label>
                    <input type="date" id="date" placeholder="Masukan domisili" className="w-full bg-white ring-lightGrey ring-2 text-dark mb-5 p-4 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary" />
          <label for="deskripsipekerjaan" className=" text-sm font-normal text-softGrey pb-4">Deskripsi singkat</label>
                    <textarea type="textarea" id="deskripsipekerjaan" placeholder="Deskripsikan pekerjaan anda" className="w-full bg-white ring-lightGrey ring-2 text-dark mb-5 p-4 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary" />

          
                    <button type="submit" href="" className="mt-10 w-full text-base text-center font-bold text-white bg-primary py-6 rounded-md px-8">Simpan</button>
          </div>
        </div>
      </section>

    <section className="mt-20 pb-2 pt-2 w-full flex items-center justify-center lg:pb-0">
    <div className="container">
        <h1 className="mb-5 text-dark text-semibold text-2xl">Portfolio</h1>
        <hr className="mb-5"></hr>
          <div className="flex flex-wrap">          
          <label for="namaaplikasi" className=" text-sm font-normal text-softGrey pb-4">Nama Aplikasi</label>
                    <input type="text" id="namaaplikasi" placeholder="Ex: Ankasa Ticketing" className="w-full bg-white ring-lightGrey ring-2 text-dark mb-5 p-4 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary" />
          <label for="linkrepository" className=" text-sm font-normal text-softGrey pb-4">Link Repository</label>
                    <input type="text" id="linkrepository" placeholder="Ex: github/test" className="w-full bg-white ring-lightGrey ring-2 text-dark mb-5 p-4 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary" />
          <label for="typeportfolio" className=" text-sm font-normal text-softGrey pb-4">Type Portfolio</label>
                    <input type="text" id="typeportfolio" placeholder="Ex: github/test" className="w-full bg-white ring-lightGrey ring-2 text-dark mb-5 p-4 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary" />
          <label for="uploadportfolio" className=" text-sm font-normal text-softGrey pb-4">Upload Gambar</label>
                    <input type="file" id="uploadportfolio" placeholder="Deskripsikan pekerjaan anda" className="w-full bg-white ring-lightGrey ring-2 text-dark mb-5 p-4 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary" />

          
                    <button type="submit" href="" className="mt-10 w-full text-base text-center font-bold text-white bg-primary py-6 rounded-md px-8">Simpan Portfolio</button>
          </div>
        </div>
      </section>


    <Footer />
  </>
  );
}