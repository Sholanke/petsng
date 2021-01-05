import React from "react";

export default function Footer() {
  return (
    <div className="wrapper app_footer">
      <div className="max_width flex">
        <p className="logo">PetsNg</p>
        <div className="__links">
          <a href="#">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M4.37167 7.23917C4.39667 6.99333 4.3025 6.75083 4.11917 6.58583L2.2525 4.33583V4H8.05083L12.5325 13.8292L16.4725 4H22V4.33583L20.4033 5.86667C20.2658 5.97167 20.1975 6.14417 20.2258 6.315V17.5633C20.1975 17.7333 20.2658 17.9058 20.4033 18.0108L21.9625 19.5417V19.8775H14.1192V19.5417L15.735 17.9733C15.8933 17.815 15.8933 17.7683 15.8933 17.5258V8.43417L11.4025 19.8408H10.7958L5.56667 8.43417V16.0792C5.52333 16.4 5.63 16.7242 5.85583 16.9558L7.95667 19.5042V19.8408H2V19.5042L4.10083 16.9558C4.32583 16.7233 4.42583 16.3975 4.37167 16.0792V7.23917Z"
                fill="black"
              />
            </svg>
          </a>
          <a href="#">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M19.9442 7.98749C19.9569 8.16248 19.9569 8.33751 19.9569 8.5125C19.9569 13.85 15.8326 20 8.29444 20C5.97209 20 3.81473 19.3375 2 18.1875C2.32996 18.225 2.64719 18.2375 2.98985 18.2375C4.90607 18.2375 6.67006 17.6 8.0787 16.5125C6.27666 16.475 4.76649 15.3125 4.24618 13.7125C4.5 13.75 4.7538 13.775 5.02032 13.775C5.38833 13.775 5.75638 13.725 6.099 13.6375C4.22083 13.2625 2.81215 11.6375 2.81215 9.67499V9.62501C3.35782 9.92501 3.99239 10.1125 4.66493 10.1375C3.56087 9.41247 2.83754 8.17498 2.83754 6.77497C2.83754 6.02499 3.04055 5.33749 3.3959 4.73748C5.41369 7.18748 8.4467 8.78745 11.8477 8.96248C11.7843 8.66248 11.7462 8.35001 11.7462 8.03751C11.7462 5.81248 13.5736 4 15.8452 4C17.0254 4 18.0914 4.4875 18.8401 5.275C19.7665 5.10001 20.6548 4.76249 21.4416 4.3C21.137 5.23752 20.4898 6.02502 19.6396 6.52499C20.4645 6.43753 21.264 6.21248 22 5.90001C21.4417 6.69998 20.7437 7.41245 19.9442 7.98749Z"
                fill="black"
              />
            </svg>
          </a>
          <a href="#">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M20.3292 2C21.252 2 22 2.74752 22 3.67079V20.3292C22 21.252 21.2525 22 20.3292 22H3.67079C2.74804 22 2 21.2525 2 20.3292V3.67079C2 2.74804 2.74752 2 3.67079 2H20.3292ZM15.5187 9.5C14.0993 9.5 13.1281 10.1274 12.6957 10.8563L12.625 10.9858V9.625H9.91667V19.2083H12.8333V14.5662C12.8333 13.0104 13.4062 12.0208 14.7833 12.0208C15.7331 12.0208 16.1316 12.8607 16.1644 14.358L16.1667 14.5662V19.2083H19.0833V13.9154C19.0833 11.0575 18.3996 9.5 15.5187 9.5ZM7.83333 9.5H4.91667V19.0833H7.83333V9.5ZM6.375 4.5C5.33958 4.5 4.5 5.33958 4.5 6.375C4.5 7.41042 5.33958 8.25 6.375 8.25C7.41042 8.25 8.25 7.41042 8.25 6.375C8.25 5.33958 7.41042 4.5 6.375 4.5Z"
                fill="black"
              />
            </svg>
          </a>
          <a href="#">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 9.52C11.5095 9.52 11.03 9.66545 10.6222 9.93795C10.2144 10.2105 9.89648 10.5978 9.70878 11.0509C9.52107 11.5041 9.47196 12.0028 9.56765 12.4838C9.66334 12.9649 9.89954 13.4068 10.2464 13.7536C10.5932 14.1005 11.0351 14.3367 11.5162 14.4323C11.9972 14.528 12.4959 14.4789 12.9491 14.2912C13.4022 14.1035 13.7895 13.7856 14.062 13.3778C14.3346 12.97 14.48 12.4905 14.48 12C14.48 11.6743 14.4159 11.3518 14.2912 11.0509C14.1666 10.7501 13.9839 10.4767 13.7536 10.2464C13.5233 10.0161 13.2499 9.83341 12.9491 9.70878C12.6482 9.58415 12.3257 9.52 12 9.52ZM21.93 7.07C21.9247 6.29776 21.7825 5.53257 21.51 4.81C21.3093 4.28126 20.9987 3.80109 20.5988 3.40119C20.1989 3.00128 19.7187 2.69072 19.19 2.49C18.4674 2.21746 17.7022 2.07526 16.93 2.07C15.64 2 15.26 2 12 2C8.74 2 8.36 2 7.07 2.07C6.29776 2.07526 5.53257 2.21746 4.81 2.49C4.28126 2.69072 3.80109 3.00128 3.40119 3.40119C3.00128 3.80109 2.69072 4.28126 2.49 4.81C2.21746 5.53257 2.07526 6.29776 2.07 7.07C2 8.36 2 8.74 2 12C2 15.26 2 15.64 2.07 16.93C2.08076 17.705 2.22277 18.4725 2.49 19.2C2.68983 19.7263 3.00013 20.2037 3.4 20.6C3.79819 21.0023 4.27939 21.3129 4.81 21.51C5.53257 21.7825 6.29776 21.9247 7.07 21.93C8.36 22 8.74 22 12 22C15.26 22 15.64 22 16.93 21.93C17.7022 21.9247 18.4674 21.7825 19.19 21.51C19.7206 21.3129 20.2018 21.0023 20.6 20.6C20.9999 20.2037 21.3102 19.7263 21.51 19.2C21.7823 18.4739 21.9244 17.7055 21.93 16.93C22 15.64 22 15.26 22 12C22 8.74 22 8.36 21.93 7.07ZM19.39 15.07C19.3579 15.6871 19.2262 16.295 19 16.87C18.8059 17.3497 18.5173 17.7854 18.1514 18.1514C17.7854 18.5173 17.3497 18.8059 16.87 19C16.2895 19.2136 15.6783 19.3318 15.06 19.35C14.27 19.35 14.06 19.35 12 19.35C9.94 19.35 9.73 19.35 8.94 19.35C8.32173 19.3318 7.71049 19.2136 7.13 19C6.6341 18.8157 6.18628 18.5217 5.82 18.14C5.45767 17.7813 5.17784 17.3479 5 16.87C4.78556 16.2901 4.67061 15.6782 4.66 15.06C4.66 14.27 4.66 14.06 4.66 12C4.66 9.94 4.66 9.73 4.66 8.94C4.67061 8.32183 4.78556 7.70988 5 7.13C5.18428 6.6341 5.47827 6.18628 5.86 5.82C6.22033 5.45962 6.65326 5.18009 7.13 5C7.71049 4.78641 8.32173 4.66821 8.94 4.65C9.73 4.65 9.94 4.65 12 4.65C14.06 4.65 14.27 4.65 15.06 4.65C15.6783 4.66821 16.2895 4.78641 16.87 5C17.3659 5.18428 17.8137 5.47827 18.18 5.86C18.5423 6.21875 18.8222 6.65213 19 7.13C19.2136 7.71049 19.3318 8.32173 19.35 8.94C19.35 9.73 19.35 9.94 19.35 12C19.35 14.06 19.42 14.27 19.39 15.06V15.07ZM17.79 7.63C17.6709 7.30698 17.4832 7.01364 17.2398 6.77021C16.9964 6.52678 16.703 6.33906 16.38 6.22C15.9365 6.06626 15.4693 5.99179 15 6C14.22 6 14 6 12 6C10 6 9.78 6 9 6C8.52827 6.00461 8.06107 6.09263 7.62 6.26C7.30193 6.37366 7.01169 6.55371 6.76858 6.7882C6.52547 7.02269 6.33506 7.30624 6.21 7.62C6.06478 8.06537 5.99383 8.5316 6 9C6 9.78 6 10 6 12C6 14 6 14.22 6 15C6.00991 15.4712 6.09777 15.9375 6.26 16.38C6.37906 16.703 6.56678 16.9964 6.81021 17.2398C7.05364 17.4832 7.34698 17.6709 7.67 17.79C8.09667 17.9469 8.54565 18.0347 9 18.05C9.78 18.05 10 18.05 12 18.05C14 18.05 14.22 18.05 15 18.05C15.4717 18.0454 15.9389 17.9574 16.38 17.79C16.703 17.6709 16.9964 17.4832 17.2398 17.2398C17.4832 16.9964 17.6709 16.703 17.79 16.38C17.9574 15.9389 18.0454 15.4717 18.05 15C18.05 14.22 18.05 14 18.05 12C18.05 10 18.05 9.78 18.05 9C18.0503 8.5278 17.9621 8.05972 17.79 7.62V7.63ZM12 15.82C11.4988 15.82 11.0026 15.7211 10.5397 15.529C10.0768 15.3369 9.6563 15.0554 9.30238 14.7005C8.94846 14.3457 8.66803 13.9245 8.47714 13.4611C8.28626 12.9977 8.18868 12.5012 8.19 12C8.19 11.2441 8.4143 10.5051 8.83449 9.87669C9.25468 9.24828 9.85187 8.75866 10.5505 8.46983C11.2491 8.181 12.0177 8.10594 12.7589 8.25415C13.5002 8.40236 14.1808 8.76717 14.7147 9.30241C15.2485 9.83764 15.6116 10.5192 15.7578 11.2609C15.9041 12.0026 15.827 12.771 15.5363 13.4688C15.2457 14.1666 14.7545 14.7625 14.125 15.1811C13.4955 15.5996 12.7559 15.822 12 15.82ZM16 8.93C15.7789 8.9066 15.5744 8.80222 15.4257 8.63697C15.277 8.47172 15.1947 8.25729 15.1947 8.035C15.1947 7.81271 15.277 7.59828 15.4257 7.43303C15.5744 7.26778 15.7789 7.1634 16 7.14C16.2211 7.1634 16.4256 7.26778 16.5743 7.43303C16.723 7.59828 16.8053 7.81271 16.8053 8.035C16.8053 8.25729 16.723 8.47172 16.5743 8.63697C16.4256 8.80222 16.2211 8.9066 16 8.93Z"
                fill="black"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
