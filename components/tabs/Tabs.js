import { useState } from "react";

function Tabs() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
  <>
  <section>
    <div className="container-tabs">
      <div className="bloc-tabs">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          Portfolio
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          Pengalaman Kerja
        </button>
      </div>

      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}>
          <div class="flex flex-wrap">
            <div class="w-full px-4 lg:w-1/2 xl:w-1/3">
              <div class="bg-white rounded-xl shadow-lg overflow-hidden mb-10">
                <img
                  src="/mili.jpg"
                  alt="programming"
                  class="object-center mx-auto py-6"
                />
                <div class="py-8 px-6">
                  <h3>
                    <a
                      href="#"
                      class="block mb-3 font-semibold text-xl text-center text-dark hover:text-primary truncate"
                    >
                     MILI Payment Digital
                    </a>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}>
          <div class="flex flex-wrap">
            <div class="w-full px-4 lg:w-1/2 xl:w-1/3">
              <div class="bg-white rounded-xl shadow-lg overflow-hidden mb-10">
                <img
                  src="/mililogo.png"
                  alt="programming"
                  class="object-center mx-auto py-6"
                />
                <div class="py-8 px-6">
                  <h3>
                    <a
                      href="#"
                      class="block mb-1 font-semibold text-2xl text-center text-dark hover:text-primary truncate"
                    >
                     Designer
                    </a>
                  </h3>
                    <div className="text-hardGrey text-center font-normal ">
                      <p>Mili Digital Payment</p>
                    </div>
                    <div className="text-softGrey text-center font-normal mb-4 ">
                      <p>April 2021 - April 2022</p>
                    </div>
                    <div className="text-softGrey text-center font-normal ">
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum erat orci, mollis nec gravida sed, ornare quis urna. Curabitur eu lacus fringilla, vestibulum risus at.</p>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        
      </div>
    </div>
    </section>
    
    </>
  );
}

export default Tabs;