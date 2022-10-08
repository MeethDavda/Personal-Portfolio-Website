import React from "react";
import "./Home.css";
// import Typed from "typed.js";
// import Typical from "react-typical";
import { useTypewriter, Cursor } from "react-simple-typewriter";

function Home() {
  const { text } = useTypewriter({
    words: ["HELLO", "THERE"],
    loop: 0,
    typeSpeed: 150,
    deleteSpeed: 100,
    delaySpeed: 700,
  });

  return (
    <div className="flex flex-col flex-wrap bgm">
      <div className="flex flex-row flex-wrap justify-center content-center main ">
        <div className="text-white text-[5.31em] h-36 mx-5  w-[320px] flex justify-center content-center mt-28 hello flex-col ">
          <div className="flex justify-center content-center  text-center flex-col relative top-11 ">
            <div>
              {text}
              <Cursor />
            </div>

            <div className="text-white font-thin relative bottom-[1.2em] w-auto left-[-0.9em]">
              ___
            </div>
          </div>
        </div>

        <div className="text-white flex flex-col h-60 w-auto mx-5 mt-10 name-section">
          <div className="flex justify-center text-center relative ml-[-4.5em] mb-2 font-extralight text-2xl">
            I AM
          </div>
          <div className="text-8xl font-extralight flex justify-center content-center meeth">
            MEETH
          </div>
          <div className="flex flex-col justify-center text-center relative ml-16 font-extralight mt-3">
            A YOUNG{" "}
            <strong className="relative ml-24">CREATIVE DEVELOPER.</strong>
          </div>
        </div>
      </div>

      <footer className="flex flex-row justify-between mt-11">
        <div className="text-white ml-4">
          <svg
            width="65"
            height="125"
            viewBox="0 0 65 125"
            fill="none"
            className="w-13"
          >
            <line x1="0.5" x2="0.5" y2="125" stroke="#F4F4F4" />
            <line y1="124.5" x2="65" y2="124.5" stroke="#E5E5E5" />
          </svg>
        </div>
        <div className="text-white mr-3">
          <svg
            width="26"
            height="147"
            viewBox="0 0 26 147"
            fill="none"
            className="w-5"
          >
            <path
              d="M16.9091 9.94318C17.8134 9.86742 18.545 9.49811 19.1037 8.83523C19.6624 8.17708 19.9418 7.32481 19.9418 6.27841C19.9418 5.57292 19.8116 4.94555 19.5511 4.39631C19.2907 3.84706 18.9356 3.41619 18.4858 3.10369C18.036 2.79119 17.5199 2.63494 16.9375 2.63494C16.5634 2.63494 16.2249 2.70597 15.9219 2.84801C15.6236 2.99479 15.3561 3.20076 15.1193 3.46591C14.8873 3.73106 14.6837 4.04593 14.5085 4.41051C14.3333 4.77509 14.1795 5.17756 14.0469 5.6179L13.5781 7.20881C13.4124 7.75331 13.2206 8.25521 13.0028 8.71449C12.785 9.1785 12.5246 9.58097 12.2216 9.92188C11.9233 10.2675 11.5729 10.535 11.1705 10.7244C10.768 10.9186 10.304 11.0156 9.77841 11.0156C9.01136 11.0156 8.32481 10.8168 7.71875 10.419C7.11269 10.026 6.63447 9.46496 6.28409 8.7358C5.93845 8.01136 5.76562 7.15672 5.76562 6.17188C5.76562 5.23438 5.92424 4.41761 6.24148 3.72159C6.55871 3.0303 6.99905 2.48343 7.5625 2.08097C8.13068 1.6785 8.78409 1.45123 9.52273 1.39915V2.30824C8.9214 2.35559 8.40057 2.54735 7.96023 2.88352C7.52462 3.22443 7.18845 3.67661 6.9517 4.24006C6.71496 4.8035 6.59659 5.44744 6.59659 6.17188C6.59659 6.95313 6.72917 7.64205 6.99432 8.23864C7.2642 8.83523 7.63826 9.30161 8.11648 9.63778C8.5947 9.97396 9.15104 10.142 9.78551 10.142C10.2969 10.142 10.7348 10.0213 11.0994 9.77983C11.464 9.53835 11.7789 9.18087 12.044 8.70739C12.3092 8.23864 12.5459 7.65625 12.7543 6.96023L13.2656 5.26278C13.6113 4.12642 14.0824 3.25758 14.679 2.65625C15.2756 2.05966 16.0189 1.76136 16.9091 1.76136C17.6572 1.76136 18.3201 1.96023 18.8977 2.35795C19.4801 2.75568 19.937 3.29545 20.2685 3.97727C20.5999 4.66383 20.7656 5.43797 20.7656 6.29972C20.7656 7.16619 20.5975 7.93087 20.2614 8.59375C19.9299 9.25663 19.473 9.7822 18.8906 10.1705C18.313 10.5587 17.6525 10.7741 16.9091 10.8168V9.94318ZM16 25.6037V24.6946C16.4924 24.5999 16.9683 24.4223 17.4276 24.1619C17.8916 23.9015 18.3082 23.5653 18.6776 23.1534C19.0516 22.7462 19.3475 22.2727 19.5653 21.733C19.7831 21.1932 19.892 20.5966 19.892 19.9432C19.892 18.9867 19.6364 18.1061 19.125 17.3011C18.6184 16.5009 17.8726 15.8594 16.8878 15.3764C15.9029 14.8982 14.6979 14.6591 13.2727 14.6591C11.8381 14.6591 10.6283 14.8982 9.64347 15.3764C8.65862 15.8594 7.91288 16.5009 7.40625 17.3011C6.90436 18.1061 6.65341 18.9867 6.65341 19.9432C6.65341 20.5966 6.75994 21.1932 6.97301 21.733C7.19081 22.2727 7.48438 22.7462 7.85369 23.1534C8.22775 23.5653 8.64678 23.9015 9.1108 24.1619C9.57481 24.4223 10.053 24.5999 10.5455 24.6946V25.6037C9.95833 25.4995 9.38305 25.2983 8.8196 25C8.25616 24.7064 7.74479 24.3182 7.28551 23.8352C6.83097 23.357 6.46875 22.7912 6.19886 22.1378C5.93371 21.4891 5.80114 20.7576 5.80114 19.9432C5.80114 18.7311 6.1089 17.6634 6.72443 16.7401C7.3447 15.8168 8.21591 15.0923 9.33807 14.5668C10.4602 14.0459 11.7718 13.7855 13.2727 13.7855C14.7737 13.7855 16.0852 14.0459 17.2074 14.5668C18.3295 15.0923 19.1984 15.8168 19.8139 16.7401C20.4342 17.6634 20.7443 18.7311 20.7443 19.9432C20.7443 20.7576 20.6094 21.4891 20.3395 22.1378C20.0743 22.7912 19.7145 23.357 19.2599 23.8352C18.8101 24.3182 18.3035 24.7064 17.7401 25C17.1766 25.2983 16.5966 25.4995 16 25.6037ZM6 29.0163L20.5455 29.0163V33.4979C20.5455 34.4164 20.3655 35.2071 20.0057 35.87C19.6458 36.5329 19.1463 37.0419 18.5071 37.397C17.8726 37.7521 17.134 37.9297 16.2912 37.9297C15.4579 37.9297 14.724 37.7521 14.0895 37.397C13.4598 37.0419 12.9673 36.5329 12.6122 35.87C12.2571 35.2119 12.0795 34.4235 12.0795 33.505V29.4922H12.9105V33.4837C12.9105 34.2318 13.0502 34.871 13.3295 35.4013C13.6089 35.9316 13.9995 36.3388 14.5014 36.6229C15.008 36.907 15.6046 37.049 16.2912 37.049C16.9825 37.049 17.5838 36.907 18.0952 36.6229C18.6113 36.3388 19.0114 35.9292 19.2955 35.3942C19.5795 34.8639 19.7216 34.2247 19.7216 33.4766V29.9041L6 29.9041V29.0163ZM12.5909 34.9893L6 38.5689V37.5462L12.5909 33.9879V34.9893ZM13.2727 53.0469C11.7718 53.0469 10.4602 52.7865 9.33807 52.2656C8.22064 51.7448 7.3518 51.0204 6.73153 50.0923C6.11127 49.169 5.80114 48.1037 5.80114 46.8963C5.80114 45.6842 6.11127 44.6141 6.73153 43.6861C7.35653 42.7628 8.22775 42.0407 9.34517 41.5199C10.4673 40.9991 11.7765 40.7386 13.2727 40.7386C14.7737 40.7386 16.0829 40.9991 17.2003 41.5199C18.3177 42.0455 19.1866 42.7699 19.8068 43.6932C20.4318 44.6165 20.7443 45.6842 20.7443 46.8963C20.7443 48.1037 20.4342 49.169 19.8139 50.0923C19.1937 51.0204 18.3224 51.7448 17.2003 52.2656C16.0829 52.7865 14.7737 53.0469 13.2727 53.0469ZM13.2727 52.1804C14.6222 52.1804 15.7917 51.9531 16.7813 51.4986C17.7708 51.0488 18.5355 50.4261 19.0753 49.6307C19.6198 48.8352 19.892 47.9238 19.892 46.8963C19.892 45.8688 19.6222 44.9574 19.0824 44.1619C18.5473 43.3665 17.7827 42.7415 16.7884 42.2869C15.7988 41.8371 14.6269 41.6122 13.2727 41.6122C11.9328 41.6122 10.7656 41.8348 9.77131 42.2798C8.78172 42.7296 8.01468 43.3523 7.47017 44.1477C6.92566 44.9432 6.65341 45.8594 6.65341 46.8963C6.65341 47.9238 6.9233 48.8352 7.46307 49.6307C8.00758 50.4261 8.77462 51.0488 9.7642 51.4986C10.7538 51.9531 11.9233 52.1804 13.2727 52.1804ZM6 56.5163H20.5455V57.4041H6.82386L6.82386 64.5064H6L6 56.5163ZM6 67.7663H20.5455V68.6541H6.82386V75.7564H6V67.7663Z"
              fill="#EEEDED"
            />
            <line x1="13.5" y1="94" x2="13.5" y2="147" stroke="#ECEAEA" />
          </svg>
        </div>
      </footer>
    </div>
  );
}

export default Home;
