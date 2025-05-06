import React from "react";

export default function Lung() {
  return (
    <div className="flex flex-col items-center">
      <p className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 text-center">
        AI ตรวจวินิจฉัยโรคมะเร็งปอด
      </p>
      
      <iframe
        src="http://127.0.0.1:5000"
        width="100%"
        height="800"
        allow="camera"
        className="border rounded"
        title="Lung Cancer AI"
      />
    </div>
  );
}