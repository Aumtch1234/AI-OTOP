import Link from "next/link";
import React from "react";

export default function Ai() {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          <p className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 text-center">
            AI ตรวจวินิจฉัยโรคมะเร็งปอด
          </p>
          <img
            className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
            alt="hero"
            src="img/AI.jpeg"
          />
          <div className="lg:w-2/3 w-full">
            <p className="mb-8 leading-relaxed">
              <p> คำชี้เเจงเกี่ยวกับ AI ตรวจวินิจฉัยโรคมะเร็งปอด</p>
              <ol  style={{listStyleType: 'square'}} className="ml-4 ">
                <li>
                  ถ้าผลการพยากรณ์เป็น <strong>lung_bnt</strong> หมายความว่า{" "}
                  <span className="text-green-500 font-bold">
                    เป็นปกติ ไม่เป็นโรคมะเร็งปอด
                  </span>
                </li>
                <li>
                  ถ้าผลการพยากรณ์เป็น <strong>lung_aca</strong> หมายความว่า{" "}
                  <span className="text-red-500 font-bold ">
                    เป็นโรคมะเร็งปอด ชนิด lung_aca
                  </span>
                </li>

                <li>
                  ถ้าผลการพยากรณ์เป็น <strong>lung_scc</strong> หมายความว่า{" "}
                  <span className="text-red-500 font-bold ">
                    เป็นโรคมะเร็งปอด ชนิด lung_scc
                  </span>
                </li>
              </ol>
            </p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 hover:bg-blue-600 rounded text-lg">
                <Link href={"http://127.0.0.1:5000"} className="text-white" target="_blank" rel="nonopener noreferrer">ตรวจโรคมะเร็งปอดได้ที่นี้</Link>
              </button>

              {/* <button className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 hover:bg-blue-600 rounded text-lg">
                <Link href={"lung"} className="text-white" >ตรวจโรคมะเร็งปอดได้ที่นี้</Link>
              </button> */}

              {/* <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                Button
              </button> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
