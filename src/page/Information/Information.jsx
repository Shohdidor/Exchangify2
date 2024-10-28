let api = "http://localhost:3000/goods";

import { EightK } from "@mui/icons-material";
import { usePagination } from "@mui/lab";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Information() {
  let img = [
    "data:image/jpeg;base64,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",
  ];

  const [data, setData] = useState(null);
  const { id } = useParams();
  console.log(data);

  // getData
  async function getData() {
    try {
      let { data } = await axios.get(api);
      data = data.find((el) => el.title == id);
      setData(data);
    } catch (error) {
      console.log(error);
    }
  }
  console.log(data);

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="h-[1300px]"></div>
      <div className="absolute w-[900px] mt-[20px] top-0 left-[60px]">
        <div className="flex pb-[60px] border-b-[1px] border-[#ffffff] gap-[30px]">
          {img.length == 1 ? (
            <div className="w-[400px]">
              <img className="w-full" src={data?.img[0]} alt="" />
            </div>
          ) : null}
          <div className="">
            <div className="flex justify-between items-center">
              <h1 className="text-[white] text-[30px]">
                <span className="text-[30px]">{data?.sender}:</span>{" "}
                {data?.title}
              </h1>
            </div>
            <p className="text-[white]">{data?.description}</p>
            <button className="bg-[#F39C12] active:brightness-125 active:translate-y-[3px] p-[5px] text-[17px] rounded-[3px] text-[#0A1128] poppins px-[20px] border-[#ffffff76] duration-100 ease-in-out border-[1px]">
              Обмен
            </button>
          </div>
        </div>

        <div className="mt-[100px] grid gap-[20px]">
          <div className="flex items-start items-center gap-[20px]">
            <img
              className="rounded-full w-[70px]"
              src="https://yt3.ggpht.com/ytc/AIdro_mykc8jzR8H_axUwmO0708DD-JrOIxs46ubiQWyktOGo4k=s88-c-k-c0x00ffffff-no-rj"
              alt=""
            />
            <div className="w-full">
              <input
                className="w-full outline-none bg-transparent text-[18px] text-[white]"
                type="text"
                placeholder="Ведите сообшение"
              />
              <div className="border-[#00a6ff] mt-[10px] border-b-[1px]"></div>
            </div>
          </div>

          <div className="flex items-start gap-[20px]">
            <img
              className="rounded-full w-[70px]"
              src="https://yt3.ggpht.com/ytc/AIdro_mykc8jzR8H_axUwmO0708DD-JrOIxs46ubiQWyktOGo4k=s88-c-k-c0x00ffffff-no-rj"
              alt=""
            />
            <div className="">
              <p className="text-[#9d8585] mb-[0px] font-[500] text-[15px]">
                RD
              </p>
              <p className="text-[white]">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Obcaecati nam recusandae mollitia natus, consequ
              </p>
            </div>
          </div>
          <div className="flex items-start gap-[20px]">
            <img
              className="rounded-full w-[70px]"
              src="https://yt3.ggpht.com/ytc/AIdro_mykc8jzR8H_axUwmO0708DD-JrOIxs46ubiQWyktOGo4k=s88-c-k-c0x00ffffff-no-rj"
              alt=""
            />
            <div className="">
              <p className="text-[#9d8585] mb-[0px] font-[500] text-[15px]">
                RD
              </p>
              <p className="text-[white]">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Obcaecati nam recusandae mollitia natus, consequuntur nostrum
                et, deleniti enim quis nemo quidem deserunt reiciendis suscipit.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-[20px]">
            <img
              className="rounded-full w-[70px]"
              src="https://yt3.ggpht.com/ytc/AIdro_mykc8jzR8H_axUwmO0708DD-JrOIxs46ubiQWyktOGo4k=s88-c-k-c0x00ffffff-no-rj"
              alt=""
            />
            <div className="">
              <p className="text-[#9d8585] mb-[0px] font-[500] text-[15px]">
                RD
              </p>
              <p className="text-[white]">
                Obcaecati nam recusandae mollitia natus, consequuntur nostrum
                et, deleniti enim quis nemo quidem deserunt reiciendis suscipit.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-[20px]">
            <img
              className="rounded-full w-[70px]"
              src="https://yt3.ggpht.com/ytc/AIdro_mykc8jzR8H_axUwmO0708DD-JrOIxs46ubiQWyktOGo4k=s88-c-k-c0x00ffffff-no-rj"
              alt=""
            />
            <div className="">
              <p className="text-[#9d8585] mb-[0px] font-[500] text-[15px]">
                RD
              </p>
              <p className="text-[white]">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Obcaecati nam recusandae mollitia natus, consequuntur nostrum
                et, deleniti enim quis nemo quidem deserunt reiciendis suscipit.
                Quae mollitia odio optio necessitatibus aliquam.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute w-[500px] top-5 left-[990px]">
        <div className="flex gap-[10px] overflow-hidden">
          <img
            className="h-min"
            src="data:image/jpeg;base64,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"
            alt="Not f"
          />
          <div className="">
            <h1 className="text-[white] text-[16px]">
              <span className="text-[15px]">Rahmatulloev Daler:</span> Laptop
            </h1>
            <p className="text-[white] h-[100px] text-[12px]">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem
              ipsum dolor, sit amet consectetur adipisicing elit. Itaque, illum
              incidunt velit maxime pariatur ab culpa laborum molestiae hic
              alias iusto libero quas doloremque earum. Tempore animi accusamus
              cupiditate molestias.
            </p>
          </div>
        </div>
        <br />
        <div className="flex gap-[10px] overflow-hidden">
          <img
            className="h-min"
            src="data:image/jpeg;base64,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"
            alt="Not f"
          />
          <div className="">
            <h1 className="text-[white] text-[16px]">
              <span className="text-[15px]">Rahmatulloev Daler:</span> Laptop
            </h1>
            <p className="text-[white] h-[100px] text-[12px]">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem
              ipsum dolor, sit amet consectetur adipisicing elit. Itaque, illum
              incidunt velit maxime pariatur ab culpa laborum molestiae hic
              alias iusto libero quas doloremque earum. Tempore animi accusamus
              cupiditate molestias.
            </p>
          </div>
        </div>
        <br />
        <div className="flex gap-[10px] overflow-hidden">
          <img
            className="h-min"
            src="data:image/jpeg;base64,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"
            alt="Not f"
          />
          <div className="">
            <h1 className="text-[white] text-[16px]">
              <span className="text-[15px]">Rahmatulloev Daler:</span> Laptop
            </h1>
            <p className="text-[white] h-[100px] text-[12px]">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem
              ipsum dolor, sit amet consectetur adipisicing elit. Itaque, illum
              incidunt velit maxime pariatur ab culpa laborum molestiae hic
              alias iusto libero quas doloremque earum. Tempore animi accusamus
              cupiditate molestias.
            </p>
          </div>
        </div>
        <br />
        <div className="flex gap-[10px] overflow-hidden">
          <img
            className="h-min"
            src="data:image/jpeg;base64,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"
            alt="Not f"
          />
          <div className="">
            <h1 className="text-[white] text-[16px]">
              <span className="text-[15px]">Rahmatulloev Daler:</span> Laptop
            </h1>
            <p className="text-[white] h-[100px] text-[12px]">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem
              ipsum dolor, sit amet consectetur adipisicing elit. Itaque, illum
              incidunt velit maxime pariatur ab culpa laborum molestiae hic
              alias iusto libero quas doloremque earum. Tempore animi accusamus
              cupiditate molestias.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Information;
