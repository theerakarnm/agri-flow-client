import Image from 'next/image';
import React from 'react';
import Tag from '../Tag';

const MiniBlog = () => {
  return (
    <div>
      <div className="w-full h-full ml-2 flex-col item-center">
        {/* Header */}
        <div className="w-full flex flex-col sm:flex-row  justify-between items-center ">
          <div className="w-full">
            <p className="text-[1.75rem] m-0 p-0 truncate">
              จิ๊กโก๋สัมนาเบบี้ปัจฉิมนิเทศ
            </p>
          </div>
          <div className="w-full sm:w-50 flex justify-start sm:justify-end">
            <Tag linkto={''} tagName={'รักน้ำรักปลา'} />
          </div>
        </div>
        {/* detail */}
        <div className="w-full">
          <div className="h-[7rem] w-[90%] overflow-y-hidden ">
            <p className="text-[#979797] text-[1.2rem] font-light m-0 p-0 overflow-y-hidden">
              {text}
            </p>
          </div>
        </div>
        {/* footer */}
        <div className="w-full">
          <div className="w-full  flex justify-between items-center mt-4">
            <div className="flex items-center">
              <div>
                <Image
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAA
                                    JbSJIAAAAM1BMVEXk5ueutLeqsbTn6eqpr7PJzc/j5ebf4eLZ3N2wtrnBxsjN0NLGysy6v8HT
                                    1tissra8wMNxTKO9AAAFDklEQVR4nO2d3XqDIAxAlfivoO//tEOZWzvbVTEpic252W3PF0gAI
                                    csyRVEURVEURVEURVEURVEURVEURVEURVEURVEURflgAFL/AirAqzXO9R7XNBVcy9TbuMHmxj
                                    N6lr92cNVVLKEurVfK/zCORVvW8iUBnC02dj+Wpu0z0Y6QlaN5phcwZqjkOkK5HZyPAjkIjSO
                                    4fIdfcOwFKkJlX4zPu7Ha1tIcwR3wWxyFhRG6g4Je0YpSPDJCV8a2Sv2zd1O1x/2WMDZCwljH
                                    +clRrHfWCLGK8REMiql//2si5+DKWKcWeAGcFMzzNrXC/0TUwQ2s6+LhlcwjTMlYsUIQzPOCb
                                    7YBiyHopyLXIEKPEkI/TgeuiidK/R9FniUDOjRDpvm0RhqjMyyXNjDhCfIMYl1gGjIMIuYsnG
                                    EYRMRZOMMunaLVwpWRW008v6fYKDIzxCwVAeNSO90BJW6emelYBRF/kHpYGVaoxTDAaxOFsfP
                                    9y8hpJ4xd7gOcij7JNGQ1EYFgkPJa1jQEiYZXRaRINKxSDUW9n+FT82lSKadkiru9/4XPqSLW
                                    OekGPoY05TAvLm9orm+YWuwHoBHkZKijNBJGmeb61eL6Ff/6q7bLr7yvv3vKGhpDRjvgjGaPz
                                    +gUg6YgcvpyAR2FIZ9U6nEEyZRTovmEU32KichpGn7C17XrfyH9gK/c0CMP05HZIM2uf9sEve
                                    izKveBy9/6Qt7o89ne33D525cfcIMW6ab+TMEukQbQbu+xu7X3A9bChmWaCeAkG17bpntwXgW
                                    xHaMzGPmUaR5dQZiKqRVeUZ3047fi3nAu28h4CHxCsZAgmEH8Y27jJAhm8c+5RQzRQNVGhVFS
                                    fxOYIjp/pP7RxzjevYXVGf4eLt+BJ1vCuLuLkrgABgCGXZ2wik5uty+oBvNirI6mkzhAf4Gsb
                                    58Hcm67Jzd+KwD10BYPLL3e0MjvKrgAULnOfveF/O4N2Xb9BZom3gJes3F9X5Zze8/6Yt09b4
                                    CrqsEjUv8oFBaR2rl+6CZr2xVrp24o/WitBKuGrrpl1+bFkmK2qXTON4VpbdfLa7o7y/WdLxG
                                    7lm2Lqh2clOwTegbvc/vj2U78CwhA87Bn8G5Nk3eOb0Nsr9flz3sG78UUtue4kpv1xvjg3TMa
                                    y62BMlTlP+vrOMnJsRmt/ze0jsfkPPYdAH57hK+34PeOyc8XIXu5xT2HsUkdZz+adwg8HGFfQ
                                    3K5jtDvbUiO4Di9/ywHGrL88pDizZ++oTp+an+SMX/ndymUCwmHMdO7yuOx83pUx/eEMU0Avx
                                    WndwgidAqOZ8ypCwdEfvvEo6D9HwpA8wzvmOJEqAg9ySu8g4x0Hb9hSB/BANEKJ+LbPBU0lzb
                                    AJs4xt1AoshKkUGQmiH8/jJ0gdhTTLmSegHlPE0oOdXALnqDjKYh3px//fSgSWG8UqfrrIICz
                                    YYSJXRr9BSPbpNzw7gBjKjKOYI7ReIGqQRIap5+5MdjyvuDkExvGeXSlONWZAP3/AZBwJohU7
                                    QJRGU+cTVH18ELmRPNBmibW6MT/k1b0XhdkRBvyT6SB6EYv/GvhSmRNpGngRULsAlxMCGNXp7
                                    w3FfdEbTEEDdLI9TdIKRUzUesa3I461ER8cpNT7gMRhpKmYVS9ELOgCUQsa4SsulciKiLbY+A
                                    nHD8cpuhISsnxpamI84sbDq9qYJgf8wiiOBrC7Ml7M7ZECCqKoiiKoiiKoiiKoijv5AvJxlZR
                                    yNWWLwAAAABJRU5ErkJggg=="
                  width={31}
                  height={31}
                  className="rounded-full"
                />
              </div>
              <div className="px-3 text-[#7A7A7A]">{`ชื่อผู้เขียน`}</div>
              <div className="px-3 text-[#7A7A7A]">{`เวลาที่เผยแพร่`}</div>
            </div>
            <div className="mr-2 sm:mr-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-file-plus"
                width="35"
                height="35"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#1C658C"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M14 3v4a1 1 0 0 0 1 1h4" />
                <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
                <line x1="12" y1="11" x2="12" y2="17" />
                <line x1="9" y1="14" x2="15" y2="14" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const miniBlog = ({ text }) => {
  return (
    <>
      <div className="w-full max-h-[90px] ml-2 flex-col item-center border-b-2 mt-2">
        {/* Header */}
        <div className="w-full flex justify-between items-center ">
          <div className="w-full">
            <p className="text-[1.125rem] text-[#1C658C] m-0 p-0 truncate">{``}</p>
          </div>
          <div className="w-full flex justify-end mr-2">
            <Tag linkto={''} tagName={'รักน้ำรักปลา'} />
          </div>
        </div>
        {/* detail */}
        <div className=" h-[2.5rem] w-[90%] mb-2">
          <div className="text-[0.75rem] text-[#979797] font-light block break-words	">
            {``}
          </div>
        </div>
      </div>
    </>
  );
};

export default miniBlog;