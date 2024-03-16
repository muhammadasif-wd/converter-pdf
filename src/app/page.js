"use client";
import React, { useRef, useState } from "react";
import SVGDesign from "./design-svg";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const Home = () => {
  const pdfRef = useRef();
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="">
      <div ref={pdfRef} className="w-full mx-auto">
        <section>
          <div className="relative">
            <SVGDesign />
          </div>
          <div className="absolute w-full top-3">
            <div className="w-full">
              <h1 className="text-center font-medium text-white tracking-widest 320:text-[10px] 375:text-sm 425:text-[16px] md:text-lg lg:text-2xl xl:text-4xl 375:mt-1 520:mt-2 620:mt-3 md:mt-5 lg:mt-8 xl:mt-10">
                ||SHREEGANESH||
              </h1>
              <h1 className="text-center font-medium text-white tracking-widest 320:text-[10px] 375:text-sm 425:text-[16px] md:text-lg lg:text-2xl xl:text-4xl 375:mt-1 520:mt-2 620:mt-3 md:mt-5 lg:mt-8 xl:mt-10">
                BIO DATA
              </h1>
              <section className="flex flex-col 320:gap-1 425:gap-0.5 475:gap-3 620:gap-5 lg:gap-7 xl:gap-10 text-white 320:ml-3 320:mt-3 475:ml-6 475:mt-6 620:ml-8 620:mt-8 md:ml-8 md:mt-8 lg:ml-10 lg:mt-10 xl:ml-16 xl:mt-16 320:text-[10px] 375:text-xs 425:text-sm md:text-base lg:text-2xl xl:text-4xl">
                <div className="flex items-start gap-1 425:gap-1 520:gap-2 md:gap-3 lg:gap-5 xl:gap-6">
                  <p className="320:w-20 375:w-24 425:w-28 md:w-40 lg:w-60 xl:w-80">
                    Name
                  </p>
                  : <p>ARCHANA KUMARI</p>
                </div>
                <div className="flex items-start gap-1 425:gap-1 520:gap-2 md:gap-3 lg:gap-5 xl:gap-6">
                  <p className="320:w-20 375:w-24 425:w-28 md:w-40 lg:w-60 xl:w-80">
                    Date of Birth
                  </p>
                  : <p>08 December 2002</p>
                </div>
                <div className="flex items-start gap-1 425:gap-1 520:gap-2 md:gap-3 lg:gap-5 xl:gap-6">
                  <p className="320:w-20 375:w-24 425:w-28 md:w-40 lg:w-60 xl:w-80">
                    Height
                  </p>
                  : <p>5 ft. 2 inch.</p>
                </div>
                <div className="flex items-start gap-1 425:gap-1 520:gap-2 md:gap-3 lg:gap-5 xl:gap-6">
                  <p className="320:w-20 375:w-24 425:w-28 md:w-40 lg:w-60 xl:w-80">
                    Caste
                  </p>
                  : <p>KUMHAR</p>
                </div>
                <div className="flex items-start gap-1 425:gap-1 520:gap-2 md:gap-3 lg:gap-5 xl:gap-6">
                  <p className="320:w-20 375:w-24 425:w-28 md:w-40 lg:w-60 xl:w-80">
                    Gotra
                  </p>
                  : <p>KASHYAP</p>
                </div>
                <div className="flex items-start gap-1 425:gap-1 520:gap-2 md:gap-3 lg:gap-5 xl:gap-6">
                  <p className="320:w-20 375:w-24 425:w-28 md:w-40 lg:w-60 xl:w-80">
                    Languages
                  </p>
                  : <p>English, Hindi</p>
                </div>
                <div className="flex items-start gap-1 425:gap-1 520:gap-2 md:gap-3 lg:gap-5 xl:gap-6">
                  <p className="320:w-20 375:w-24 425:w-28 md:w-40 lg:w-60 xl:w-80">
                    Complexion
                  </p>
                  : <p>Milky white</p>
                </div>
                <div className="flex items-start gap-1 425:gap-1 520:gap-2 md:gap-3 lg:gap-5 xl:gap-6">
                  <p className="320:w-20 375:w-24 425:w-28 md:w-40 lg:w-60 xl:w-80">
                    EDUCATIONAL-QUALIFICATION
                  </p>
                  : <p> 10th - 1st Div. (2019) 12th - 1st Div. (2021)</p>
                </div>
                <div className="flex items-start gap-1 425:gap-1 520:gap-2 md:gap-3 lg:gap-5 xl:gap-6">
                  <p className="320:w-20 375:w-24 425:w-28 md:w-40 lg:w-60 xl:w-80">
                    PRESENTLY PURSUING
                  </p>
                  : <p> B.A. 4th Semester (Geography,2021- 2024)</p>
                </div>
                <h1 className="font-medium text-white tracking-widest 320:text-[10px] 375:text-sm 425:text-[16px] md:text-lg lg:text-2xl xl:text-4xl 375:mt-1 520:mt-2 620:mt-3 md:mt-5 lg:mt-8 xl:mt-10">
                  FAMILY DESCRIPTION
                </h1>

                <div className="flex items-start gap-1 425:gap-1 520:gap-2 md:gap-3 lg:gap-5 xl:gap-6">
                  <p className="320:w-20 375:w-24 425:w-28 md:w-40 lg:w-60 xl:w-80">
                    Father's Name
                  </p>
                  : <p>KAMDEO PRAJAPATI (Business) (kirana store)</p>
                </div>
                <div className="flex items-start gap-1 425:gap-1 520:gap-2 md:gap-3 lg:gap-5 xl:gap-6">
                  <p className="320:w-20 375:w-24 425:w-28 md:w-40 lg:w-60 xl:w-80">
                    Mother's Name
                  </p>
                  : <p>DEVANTI DEVI (Homemaker)</p>
                </div>
                <div className="flex items-start gap-1 425:gap-1 520:gap-2 md:gap-3 lg:gap-5 xl:gap-6">
                  <p className="320:w-20 375:w-24 425:w-28 md:w-40 lg:w-60 xl:w-80">
                    Siblings
                  </p>
                  : <p> 2 Younger Sisters:1.Shilpi Kumar 2.Varsha Kumari</p>
                </div>
                <h1 className="font-medium text-white tracking-widest 320:text-[10px] 375:text-sm 425:text-[16px] md:text-lg lg:text-2xl xl:text-4xl 375:mt-1 520:mt-2 620:mt-3 md:mt-5 lg:mt-8 xl:mt-10">
                  ADDRESS
                </h1>
                <div className="flex flex-wrap 320:gap-1 425:gap-0.5 475:gap-3 620:gap-5 lg:gap-7 xl:gap-10 text-white 320:text-[10px] 375:text-xs 425:text-sm md:text-base lg:text-2xl xl:text-4xl">
                  <div className="flex items-start gap-1 425:gap-1 520:gap-2 md:gap-3 lg:gap-5 xl:gap-6">
                    <p className="320:w-20 375:w-24 425:w-28 md:w-40 lg:w-60 xl:w-80">
                      At- Dhankheri
                    </p>
                  </div>
                  <div className="flex items-start gap-1 425:gap-1 520:gap-2 md:gap-3 lg:gap-5 xl:gap-6">
                    <p className="">CONTACT NUMBER</p>:{" "}
                    <p> 9471371281 & 9661515728</p>
                  </div>

                  <div className="flex items-start gap-1 425:gap-1 520:gap-2 md:gap-3 lg:gap-5 xl:gap-6">
                    <p className="">P.o+P.S-Itkhori</p>
                  </div>
                  <div className="flex items-start gap-1 425:gap-1 520:gap-2 md:gap-3 lg:gap-5 xl:gap-6">
                    <p className="">Dist- Chatra 825408 (Jharkhand)</p>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </section>
      </div>
      <div className="flex justify-center">
        <button
          className="font-bold my-3"
          onClick={handleDownloadPDF}
          disabled={isLoading}
        >
          {isLoading ? "Generating PDF..." : "Download PDF"}
        </button>
      </div>
    </div>
  );
};

export default Home;
