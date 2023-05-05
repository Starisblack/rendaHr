import React from 'react'

const Records = () => {

    const records = [
        {
          num: 100,
          suffix: "M",
          desc: "Client Satisfaction",
        },
        {
          num: 24,
          suffix: "h",
          desc: "Expert Support Team",
        },
        {
          num: 98,
          suffix: "k+",
          desc: "Sales Count",
        },
        {
          num: 208,
          suffix: "+",
          desc: "Client Worldwide",
        },
      ];


  return (
    <div>
        
      <div>
        <div className="max-[600px]:mt-[2rem]">
          <p className="font-nunito font-bold text-[18px] text-primary bg-primary-light px-[40px] md:px-[55px]  py-[10px] md:py-[25px] rounded-[40px] inline">
            Brief
          </p>
        </div>
        <h1 className="font-nunito font-extrabold text-[30px] md:text-[50px]  md:leading-[55px] leading-normal my-[30px] md:my-[50px]">
          RendaHR at
          <br /> a Glance.
        </h1>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 max-[600px]:gap-4 gap-8 md:gap-0 bg-[#FAF5F0] max-[600px]:py-[50px] py-[93px] px-[82px] max-[600px]:px-[0px] rounded-[50px]">
        {records.map((record) => {
          return (
            <div key={record.desc} className="text-center">
              <h2 className="font-nunito font-extrabold text-[50px] max-[651px]:text-[30px] md:text-[75px] text-center  leading-normal">
                {record.num}
                <span className="text-primary">{record.suffix}</span>
              </h2>
              <p className="font-nunito font-bold max-[500px]:text-[12px] max-[651px]:text-[14px]  text-[20px]">
                {record.desc}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  )
}

export default Records