import React from "react";
import styled from "styled-components";

export const Bag = () => {
  const SVG = styled.svg`
    pointer-events: none;
  `;
  return (
    <SVG
      width="38"
      height="40"
      viewBox="-10 0 58 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M37.2807 28.5797L36.5326 27.8317C36.0177 27.3196 35.6095 26.7104 35.3316 26.0395C35.0537 25.3686 34.9116 24.6492 34.9136 23.923V21.1416C35.3245 20.6752 35.5515 20.075 35.5521 19.4533V6.68278C35.5504 5.15918 34.9444 3.69847 33.867 2.62112C32.7897 1.54377 31.329 0.93776 29.8054 0.936037H24.1732C22.8432 0.934862 21.5654 1.45315 20.612 2.38045C20.403 1.94795 20.0764 1.58308 19.6696 1.32763C19.2628 1.07217 18.7922 0.93646 18.3119 0.936037H10.1256C8.88103 0.937762 7.67976 1.39309 6.74674 2.21675C5.81372 3.04041 5.21293 4.17593 5.05686 5.41068L4.7109 8.17832C3.96381 8.89219 3.36927 9.75017 2.96325 10.7004C2.55723 11.6506 2.34816 12.6733 2.34869 13.7066V22.1737C1.75765 22.585 1.27479 23.133 0.941252 23.7711C0.607712 24.4093 0.433379 25.1186 0.433105 25.8386V36.055C0.433103 36.1389 0.449617 36.2219 0.481706 36.2994C0.513794 36.3769 0.560827 36.4473 0.62012 36.5066C0.679414 36.5659 0.749805 36.6129 0.827276 36.645C0.904747 36.6771 0.98778 36.6936 1.07163 36.6936H2.34869V38.6092C2.34869 38.693 2.3652 38.776 2.39729 38.8535C2.42938 38.931 2.47641 39.0014 2.5357 39.0607C2.595 39.12 2.66539 39.167 2.74286 39.1991C2.82033 39.2312 2.90336 39.2477 2.98722 39.2477H27.2513C27.3351 39.2477 27.4181 39.2312 27.4956 39.1991C27.5731 39.167 27.6435 39.12 27.7028 39.0607C27.7621 39.0014 27.8091 38.931 27.8412 38.8535C27.8733 38.776 27.8898 38.693 27.8898 38.6092V37.5966L30.8954 34.591C32.2973 33.1865 33.3788 31.4954 34.0657 29.6337C34.133 29.6573 34.2037 29.6695 34.2751 29.6698H36.8292C36.9555 29.6698 37.0789 29.6323 37.1839 29.5622C37.2889 29.492 37.3708 29.3923 37.4191 29.2756C37.4674 29.1589 37.4801 29.0305 37.4554 28.9067C37.4308 28.7828 37.37 28.669 37.2807 28.5797ZM30.4312 33.2237L29.4187 32.2113C30.6646 30.8274 31.5539 29.1604 32.0095 27.3549C32.296 27.8431 32.642 28.2939 33.0395 28.6969C32.4991 30.3729 31.6102 31.9157 30.4312 33.2237ZM32.3595 23.2845V20.7304H33.6365V23.2845H32.3595ZM34.2751 6.68278V19.4533H31.721V6.68278C31.7219 5.82737 31.5315 4.98257 31.1637 4.21024C30.796 3.43791 30.2602 2.75759 29.5956 2.21908C29.665 2.2153 29.7349 2.21309 29.8054 2.21309C30.9904 2.21443 32.1265 2.68578 32.9644 3.52372C33.8024 4.36166 34.2737 5.49776 34.2751 6.68278ZM27.9696 2.68255C28.7136 3.05282 29.3394 3.62347 29.7766 4.33023C30.2137 5.03698 30.4448 5.85176 30.4439 6.68278V19.4533C30.4445 20.075 30.6715 20.6752 31.0824 21.1416V24.5162C31.0894 27.0183 30.1751 29.4354 28.514 31.3066L27.8898 30.6824V13.7066C27.8913 11.8418 27.2098 10.041 25.9742 8.64441V6.04426C25.9747 5.35645 26.1602 4.68144 26.5113 4.08998C26.8624 3.49852 27.3661 3.01239 27.9696 2.68255ZM17.0348 6.04426H14.4807V5.40573H17.0348V6.04426ZM20.2275 7.32131C21.9204 7.32322 23.5434 7.99657 24.7404 9.19362C25.9375 10.3907 26.6108 12.0137 26.6127 13.7066V25.2001H21.5045V13.7066C21.5041 12.4417 21.1904 11.1966 20.5916 10.0824C19.9928 8.96818 19.1274 8.01961 18.0727 7.32131H20.2275ZM21.5045 26.4771H26.6127V35.4165H21.5045V26.4771ZM24.1732 2.21309H26.4301C25.8854 2.69171 25.449 3.28102 25.1502 3.94168C24.8514 4.60235 24.6969 5.31915 24.6971 6.04426V7.48681C23.5728 6.67497 22.2481 6.18547 20.866 6.07108V4.10938C21.2034 3.53178 21.6863 3.05273 22.2666 2.72C22.8469 2.38727 23.5043 2.21249 24.1732 2.21309ZM18.3119 2.21309C18.6505 2.21348 18.9751 2.34815 19.2145 2.58756C19.4539 2.82697 19.5885 3.15157 19.5889 3.49015V6.04426H18.3119V3.49015C18.3124 3.04166 18.1942 2.60103 17.9691 2.21309H18.3119ZM15.7578 2.21309C16.0963 2.21348 16.4209 2.34815 16.6604 2.58756C16.8998 2.82697 17.0344 3.15157 17.0348 3.49015V4.12867H14.4807V3.49015C14.4811 3.15157 14.6158 2.82697 14.8552 2.58756C15.0946 2.34815 15.4192 2.21348 15.7578 2.21309ZM13.5464 2.21309C13.3214 2.60103 13.2031 3.04166 13.2037 3.49015V6.04426H11.9266V3.49015C11.927 3.15157 12.0617 2.82697 12.3011 2.58756C12.5405 2.34815 12.8651 2.21348 13.2037 2.21309H13.5464ZM6.32401 5.56906C6.44108 4.64301 6.89169 3.79138 7.59145 3.17363C8.29122 2.55589 9.19217 2.21439 10.1256 2.21309H10.9931C10.7678 2.60093 10.6492 3.04158 10.6495 3.49015V6.04426H10.011C8.64689 6.04271 7.30739 6.40762 6.13254 7.10085L6.32401 5.56906ZM3.62574 13.7066C3.62765 12.0137 4.301 10.3907 5.49806 9.19362C6.69511 7.99657 8.31812 7.32322 10.011 7.32131H13.8422C15.5351 7.32322 17.1581 7.99657 18.3551 9.19362C19.5522 10.3907 20.2255 12.0137 20.2275 13.7066V35.4165H18.9504V22.0074C18.9504 21.9236 18.9339 21.8406 18.9018 21.7631C18.8697 21.6856 18.8227 21.6152 18.7634 21.5559C18.7041 21.4966 18.6337 21.4496 18.5562 21.4175C18.4788 21.3854 18.3957 21.3689 18.3119 21.3689H4.9028C4.4703 21.3689 4.0401 21.4318 3.62574 21.5558V13.7066ZM17.6733 22.7102V25.2001H15.1835C15.3098 24.5872 15.613 24.0247 16.0555 23.5822C16.498 23.1397 17.0604 22.8365 17.6733 22.7102ZM15.1192 26.4771H17.6733V35.4165H15.1192V26.4771ZM4.9028 22.646H15.188C14.4857 23.3313 14.029 24.229 13.8885 25.2001H1.77431C1.92248 24.4795 2.31454 23.832 2.88441 23.3668C3.45429 22.9015 4.16713 22.6469 4.9028 22.646ZM1.71016 26.4771H13.8422V35.4165H1.71016V26.4771ZM3.62574 36.6936H20.2275V37.9706H3.62574V36.6936ZM26.6127 37.9706H21.5045V36.6936H26.6127V37.9706ZM27.8898 35.7906V32.4883L29.5409 34.1395L27.8898 35.7906ZM34.5396 28.3927L33.9785 27.8317C33.0953 26.9529 32.5376 25.7996 32.3972 24.5616H33.6663C33.7958 25.9801 34.3711 27.3213 35.3099 28.3927H34.5396Z"
        fill="black"
      />
    </SVG>
  );
};

export const Cap = ({ handleClick }) => {
  const SVG = styled.svg`
    pointer-events: none;
  `;

  return (
    <SVG
      onClick={handleClick}
      width="59"
      height="49"
      viewBox="-9 0 59 29"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M37.7004 25.5642C37.2323 25.4082 36.7638 25.2583 36.2948 25.1146V15.2168C36.2948 11.9338 34.4989 8.86215 31.2381 6.56754C28.7724 4.8322 25.6858 3.69946 22.3375 3.27194V1.25943C22.3375 1.09848 22.2735 0.944132 22.1597 0.830327C22.0459 0.716523 21.8916 0.652588 21.7306 0.652588H16.8759C16.715 0.652588 16.5606 0.716523 16.4468 0.830327C16.333 0.944132 16.2691 1.09848 16.2691 1.25943V3.27194C12.9207 3.69946 9.83412 4.83235 7.36838 6.56754C4.10752 8.86215 2.31173 11.9338 2.31173 15.2168V25.1146C1.8428 25.2588 1.37426 25.4087 0.906138 25.5642C0.785317 25.6045 0.68023 25.6818 0.605762 25.7851C0.531293 25.8884 0.491217 26.0125 0.491211 26.1399V27.9604C0.491211 28.1213 0.555146 28.2757 0.66895 28.3895C0.782755 28.5033 0.937107 28.5672 1.09805 28.5672H37.5085C37.6694 28.5672 37.8238 28.5033 37.9376 28.3895C38.0514 28.2757 38.1153 28.1213 38.1153 27.9604V26.1399C38.1153 26.0125 38.0752 25.8884 38.0007 25.7851C37.9263 25.6818 37.8212 25.6045 37.7004 25.5642ZM17.4827 3.07995V1.86627H21.1238V3.07995H17.4827ZM3.52541 15.2168C3.52541 9.19386 10.6034 4.29363 19.3033 4.29363C28.0031 4.29363 35.0811 9.19386 35.0811 15.2168V24.7549C29.8319 23.2574 24.5367 22.4988 19.3033 22.4988C14.0698 22.4988 8.77458 23.2574 3.52541 24.7549V15.2168ZM36.9016 27.3536H1.70489V26.5789C7.54831 24.6767 13.4668 23.7125 19.3033 23.7125C25.1397 23.7125 31.0582 24.6767 36.9016 26.5789V27.3536Z"
        fill="black"
      />
      <path
        d="M25.372 18.8577C25.4794 18.8577 25.5848 18.8292 25.6776 18.7751C25.7704 18.721 25.8471 18.6433 25.9001 18.5499C25.953 18.4564 25.9801 18.3506 25.9788 18.2432C25.9774 18.1358 25.9476 18.0307 25.8923 17.9386L22.2513 11.8702C22.1974 11.7804 22.1211 11.706 22.0299 11.6544C21.9387 11.6027 21.8357 11.5756 21.7309 11.5756C21.6261 11.5756 21.5231 11.6027 21.4319 11.6544C21.3407 11.706 21.2645 11.7804 21.2106 11.8702L20.5173 13.026L18.3068 9.34199C18.2529 9.25213 18.1767 9.17777 18.0855 9.12613C17.9943 9.0745 17.8913 9.04736 17.7865 9.04736C17.6817 9.04736 17.5787 9.0745 17.4875 9.12613C17.3963 9.17777 17.32 9.25213 17.2661 9.34199L12.108 17.9386C12.0527 18.0307 12.0229 18.1358 12.0215 18.2432C12.0202 18.3506 12.0473 18.4564 12.1003 18.5499C12.1532 18.6433 12.2299 18.721 12.3227 18.7751C12.4155 18.8292 12.5209 18.8577 12.6283 18.8577H25.372ZM21.7309 13.362L24.3001 17.644H23.2882L21.225 14.2053L21.7309 13.362ZM17.7865 10.8337L21.8728 17.644H13.7002L17.7865 10.8337Z"
        fill="black"
      />
      <path
        d="M24.4613 10.9703C24.8814 10.9703 25.2921 10.8457 25.6413 10.6123C25.9906 10.379 26.2629 10.0472 26.4236 9.65915C26.5844 9.27105 26.6264 8.844 26.5445 8.43199C26.4625 8.01999 26.2602 7.64154 25.9632 7.3445C25.6662 7.04746 25.2877 6.84518 24.8757 6.76322C24.4637 6.68127 24.0366 6.72333 23.6485 6.88409C23.2604 7.04484 22.9287 7.31708 22.6954 7.66636C22.462 8.01564 22.3374 8.42628 22.3374 8.84635C22.338 9.40946 22.562 9.94932 22.9602 10.3475C23.3584 10.7457 23.8982 10.9697 24.4613 10.9703ZM24.4613 7.93609C24.6414 7.93609 24.8174 7.98948 24.9671 8.0895C25.1167 8.18952 25.2334 8.33168 25.3023 8.49801C25.3712 8.66434 25.3892 8.84736 25.3541 9.02394C25.319 9.20051 25.2323 9.3627 25.105 9.49C24.9777 9.61731 24.8155 9.704 24.6389 9.73912C24.4624 9.77425 24.2793 9.75622 24.113 9.68732C23.9467 9.61843 23.8045 9.50176 23.7045 9.35207C23.6045 9.20238 23.5511 9.02639 23.5511 8.84635C23.5513 8.60502 23.6473 8.37364 23.818 8.20299C23.9886 8.03234 24.22 7.93635 24.4613 7.93609Z"
        fill="black"
      />
      <path
        d="M24.1577 20.0714C24.1577 19.9105 24.0938 19.7561 23.9799 19.6423C23.8661 19.5285 23.7118 19.4646 23.5508 19.4646H15.0551C14.8941 19.4646 14.7398 19.5285 14.626 19.6423C14.5122 19.7561 14.4482 19.9105 14.4482 20.0714C14.4482 20.2324 14.5122 20.3867 14.626 20.5005C14.7398 20.6143 14.8941 20.6783 15.0551 20.6783H23.5508C23.7118 20.6783 23.8661 20.6143 23.9799 20.5005C24.0938 20.3867 24.1577 20.2324 24.1577 20.0714Z"
        fill="black"
      />
      <rect onClick={() => console.log("clicked again")} />
    </SVG>
  );
};

export const Shirt = () => {
  const SVG = styled.svg`
  // margin-right: 20px;
  // border: 1px solid black;
  // width: 60px;
  // height: 60px;
  // background: ${({ selected }) => (selected === true ? "blue" : "white")}
  // fill: black;
  // border-radius: 8px;
  // cursor: pointer;
  pointer-events: none;
  z-index: 0

`;
  return (
    <SVG
      value="shirt"
      width="35"
      height="35"
      viewBox="0 0 35 35"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M34.6816 5.78573C31.1793 2.53174 26.716 0.501603 21.9617 0H13.0371C8.28283 0.501603 3.81953 2.53174 0.317194 5.78573C0.112465 5.99217 -0.00162312 6.27155 1.74515e-05 6.56227V17.4994C1.74515e-05 18.1035 0.489658 18.5931 1.09373 18.5931H6.56229V33.9051C6.56229 34.5091 7.05193 34.9988 7.656 34.9988H27.3428C27.9469 34.9988 28.4365 34.5091 28.4365 33.9051V18.5931H33.9051C34.5091 18.5931 34.9988 18.1035 34.9988 17.4994V6.56227C35.0005 6.27155 34.8863 5.99217 34.6816 5.78573ZM14.2183 2.18742H20.7805V3.28113C20.7805 5.09328 19.3115 6.56227 17.4994 6.56227C15.6873 6.56227 14.2183 5.09328 14.2183 3.28113V2.18742ZM32.8114 16.4057H28.4365V10.9371H26.2491V32.8113H8.74971V10.9371H6.56229V16.4057H2.18744V7.02163C4.97039 4.57978 8.37921 2.96245 12.0308 2.35148V3.28113C12.0308 6.30135 14.4792 8.74969 17.4994 8.74969C20.5196 8.74969 22.968 6.30135 22.968 3.28113V2.35148C26.6208 2.95856 30.0307 4.57636 32.8114 7.02163V16.4057Z"
        fill="black"
      />
    </SVG>
  );
};

export const Mug = () => {
  const SVG = styled.svg`
    pointer-events: none;
  `;
  return (
    <SVG
      width="32"
      height="32"
      viewBox="-10 0 52 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M23.5753 24.8415C23.2207 24.8415 22.9333 25.1289 22.9333 25.4834C22.9333 26.5453 22.0694 27.4091 21.0076 27.4091H3.89021C2.82834 27.4091 1.96448 26.5453 1.96448 25.4834V4.94245C1.96448 4.58793 1.67709 4.30054 1.32257 4.30054C0.968061 4.30054 0.680664 4.58787 0.680664 4.94245V25.4834C0.680664 27.0334 1.78509 28.3301 3.2483 28.6283V30.6187C3.2483 30.9732 3.5357 31.2606 3.89021 31.2606H21.0077C21.3623 31.2606 21.6496 30.9732 21.6496 30.6187V28.6283C23.1128 28.3301 24.2172 27.0334 24.2172 25.4834C24.2172 25.1289 23.9298 24.8415 23.5753 24.8415ZM20.3657 29.9767H4.53207V28.6929H20.3657V29.9767Z"
        fill="black"
      />
      <path
        d="M27.8551 5.15585H24.2177V1.51838C24.2177 1.16386 23.9303 0.876465 23.5757 0.876465H1.32306C0.968549 0.876465 0.681152 1.16386 0.681152 1.51838C0.681152 1.87289 0.968549 2.16029 1.32306 2.16029H11.8075V6.86759H9.02592C8.67141 6.86759 8.38401 7.15498 8.38401 7.5095V16.0682C8.38401 16.4227 8.67141 16.7101 9.02592 16.7101H15.8729C16.2275 16.7101 16.5148 16.4227 16.5148 16.0682V7.5095C16.5148 7.15498 16.2275 6.86759 15.8729 6.86759H13.0913V2.16029H22.9338V22.0594C22.9338 22.4139 23.2212 22.7013 23.5757 22.7013C23.9303 22.7013 24.2177 22.4139 24.2177 22.0594V21.8453H27.8551C29.6249 21.8453 31.0647 20.4056 31.0647 18.6358V8.3654C31.0646 6.59556 29.6248 5.15585 27.8551 5.15585ZM15.231 8.15141V15.4263H9.66783V8.15141H15.231ZM24.2177 9.86315H26.3573V17.1381H24.2177V9.86315ZM29.7808 18.6358C29.7808 19.6977 28.9169 20.5616 27.8551 20.5616H24.2177V18.4219H26.9992C27.3538 18.4219 27.6411 18.1345 27.6411 17.78V9.22124C27.6411 8.86672 27.3538 8.57933 26.9992 8.57933H24.2177V6.43967H27.8551C28.9169 6.43967 29.7809 7.30352 29.7809 8.3654L29.7808 18.6358Z"
        fill="black"
      />
    </SVG>
  );
};

export const OuterWear = () => {
  const SVG = styled.svg`
    pointer-events: none;
  `;
  return (
    <SVG
      width="41"
      height="41"
      viewBox="0 -4 41 51"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M39.9425 32.1046L35.5446 16.8334C35.0592 15.1778 33.6919 13.9304 31.9986 13.5983C30.8496 12.0071 29.4101 11.7496 28.0366 11.3733C28.5473 9.4723 28.4078 7.45517 27.6404 5.64249C26.9074 3.89287 24.9858 0.954834 20.2644 0.954834C15.543 0.954834 13.6214 3.89287 12.895 5.64249C12.1276 7.45517 11.9881 9.4723 12.4988 11.3733C11.0593 11.7629 9.67255 12.0335 8.53676 13.5983C6.84599 13.9326 5.48166 15.1796 4.99734 16.8334L0.586278 32.1046C0.297502 33.1001 0.493123 34.1734 1.11455 35.0031L0.606089 36.9838C0.520104 37.3235 0.572699 37.6834 0.752289 37.9843C0.931879 38.2853 1.22373 38.5025 1.56358 38.5881L5.40015 39.5785C5.73994 39.6667 6.10085 39.6159 6.40317 39.4376C6.7055 39.2592 6.92435 38.9678 7.01138 38.6277L7.51984 36.647C7.81372 36.5094 8.08707 36.3316 8.33206 36.1189C8.5451 36.806 9.04287 37.3686 9.69896 37.6638V39.2484C9.69896 39.9776 10.2902 40.5688 11.0196 40.5688H29.5091C30.2385 40.5688 30.8298 39.9776 30.8298 39.2484V37.6638C31.4873 37.3671 31.9853 36.8018 32.1967 36.1123C32.4417 36.325 32.7151 36.5028 33.0089 36.6404L33.5174 38.6211C33.665 39.2052 34.1893 39.6154 34.7919 39.6181C35.023 39.6181 34.739 39.6709 38.9586 38.5947C39.2987 38.5077 39.5901 38.2889 39.7685 37.9866C39.947 37.6843 39.9977 37.3235 39.9095 36.9838L39.401 35.0031C40.027 34.1757 40.2276 33.1022 39.9425 32.1046ZM13.5619 8.29002C14.0879 7.70246 14.7029 7.20117 15.3845 6.8045C14.9618 7.70326 14.866 8.72133 15.1137 9.68312C15.5826 11.7298 16.7316 12.7466 18.1051 14.0935C16.5731 13.2286 14.744 12.3307 14.143 11.71C13.661 11.2545 13.3704 9.88119 13.5619 8.29002ZM19.7889 18.1209L20.0861 16.9391C20.1149 16.8657 20.1856 16.8175 20.2644 16.8175C20.3432 16.8175 20.4139 16.8657 20.4427 16.9391L20.7398 18.1209H19.7889ZM20.2644 14.5886C19.0428 12.7268 16.9627 11.9477 16.4014 9.39261C16.1551 8.55934 16.3166 7.6587 16.8372 6.96296C18.739 4.57951 25.0717 5.22654 24.101 9.39261C23.5661 11.9543 21.519 12.6806 20.2644 14.5886ZM25.415 9.68312C25.6616 8.72402 25.5682 7.70916 25.1509 6.8111C25.8328 7.20719 26.4461 7.71109 26.9668 8.30323C27.1583 9.88779 26.8546 11.2611 26.3989 11.71C25.7848 12.324 23.9557 13.2286 22.4369 14.0935C23.7246 12.839 24.933 11.7893 25.415 9.68312ZM20.2644 2.2753C23.9293 2.2753 25.5933 4.256 26.3593 6.01222C25.5843 5.47966 24.7341 5.06575 23.8368 4.78419C21.7535 4.15949 19.5429 4.0912 17.4249 4.58612C16.2686 4.8695 15.1696 5.34967 14.1761 6.00562C14.9355 4.256 16.6061 2.2753 20.2644 2.2753ZM5.73693 38.2976L1.89375 37.3139L2.24373 35.9472C2.75879 36.2113 2.90407 36.2179 5.34732 36.8385C5.58746 36.8974 5.83316 36.9306 6.0803 36.9375L5.73693 38.2976ZM8.10754 34.0721C7.99059 34.5975 7.66481 35.0527 7.20517 35.333C6.74552 35.6132 6.19161 35.6943 5.67089 35.5577C3.28046 34.9502 2.85124 34.937 2.32297 34.3824C1.83996 33.8742 1.66165 33.1485 1.85413 32.4744L6.25199 17.2032C6.48905 16.3629 7.04939 15.6507 7.81039 15.2225C7.74475 15.5395 7.71375 15.8627 7.71794 16.1864C8.2264 35.0625 8.2198 33.5373 8.10094 34.0721H8.10754ZM9.03862 16.1402C9.02319 15.3776 9.30499 14.6389 9.82442 14.0803C10.7027 13.0899 11.7262 12.9447 13.1261 12.5617C14.1034 13.6511 17.4117 15.0244 18.9701 16.1996C18.7984 16.4835 18.8381 16.4637 18.3098 18.6161C18.2597 18.8135 18.3035 19.0231 18.4286 19.1839C18.6664 19.4876 18.9107 19.4348 19.6107 19.4348V23.3962H16.9627C15.9182 23.3938 15.0513 24.2028 14.9817 25.2448C14.8958 26.4134 14.4732 27.932 12.9082 28.5064C12.1618 28.813 11.6759 29.5416 11.68 30.3484V32.646C11.68 33.7399 12.5669 34.6267 13.661 34.6267H19.6041V36.6074H10.8678C10.1901 36.642 9.60659 36.1344 9.54708 35.4586L9.03862 16.1402ZM19.6041 33.3063H13.661C13.2963 33.3063 13.0007 33.0107 13.0007 32.646V30.3484C13.0012 30.089 13.1536 29.854 13.3903 29.7476C15.127 29.0874 16.1703 27.549 16.3222 25.3438C16.3426 25.0023 16.6206 24.7329 16.9627 24.7232H19.6041V33.3063ZM20.9247 24.7232H23.5661C23.9159 24.7226 24.2054 24.9948 24.2264 25.3438C24.3783 27.549 25.4216 29.1138 27.1583 29.7476C27.395 29.854 27.5474 30.089 27.5479 30.3484V32.646C27.5479 33.0107 27.2523 33.3063 26.8876 33.3063H20.9247V24.7232ZM11.0196 37.9279H19.6041V39.2484H11.0196V37.9279ZM20.9247 39.2484V37.9279H29.5091V39.2484H20.9247ZM29.661 36.6074H20.9247V34.6267H26.8678C27.9619 34.6267 28.8488 33.7399 28.8488 32.646V30.3484C28.8458 29.5375 28.3487 28.8103 27.5942 28.513C26.0292 27.9386 25.6131 26.42 25.5207 25.2514C25.4518 24.2195 24.6004 23.4143 23.5661 23.4028H20.9247V19.4414C21.6313 19.4414 21.869 19.4942 22.1067 19.1905C22.2319 19.0297 22.2757 18.8201 22.2256 18.6227C21.6907 16.5033 21.7171 16.4835 21.5653 16.2062C23.1303 15.031 26.432 13.6577 27.4093 12.5683C28.7894 12.9447 29.8393 13.0965 30.711 14.0935C31.2272 14.6483 31.5067 15.3826 31.4902 16.1402L30.9817 35.452C30.9255 36.1304 30.341 36.6418 29.661 36.6074ZM32.4344 34.0721L32.3816 33.8344C32.3719 33.8118 32.3609 33.7897 32.3486 33.7684C32.8505 14.5688 32.8637 15.9817 32.7184 15.2489C33.4794 15.6771 34.0397 16.3893 34.2768 17.2296L38.6747 32.5008C38.8215 33.0149 38.7542 33.5666 38.4881 34.0304C38.222 34.4942 37.7796 34.8307 37.2615 34.9634C34.9239 35.5643 34.4947 35.7821 33.7683 35.5511C33.0901 35.3337 32.5809 34.769 32.4344 34.0721ZM34.7919 38.2976L34.4419 36.9375C34.6912 36.9306 34.9391 36.8974 35.1815 36.8385C37.6181 36.2179 37.7766 36.1783 38.2784 35.9472L38.6284 37.3139L34.7919 38.2976Z"
        fill="black"
      />
    </SVG>
  );
};

export const Poster = () => {
  const SVG = styled.svg`
    pointer-events: none;
  `;
  return (
    <SVG
      width="43"
      height="52"
      viewBox="-10 -4 60 52"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M41.8604 22.8449V14.6904C41.8604 12.944 40.6107 11.4845 38.9588 11.158V1.51418C38.9588 0.824636 38.3978 0.263672 37.7087 0.263672H6.39859C5.70905 0.263672 5.14809 0.824636 5.14809 1.51418V2.60239C5.14809 3.01675 5.48404 3.3527 5.89839 3.3527C6.31274 3.3527 6.64869 3.01675 6.64869 2.60239V1.76389H37.4586V11.1137H34.6863C33.6988 11.1137 32.8952 11.9173 32.8952 12.9048C32.8952 13.2928 33.0207 13.6515 33.2316 13.9455C33.0207 14.2392 32.8952 14.5978 32.8952 14.9863C32.8952 15.9738 33.6988 16.777 34.6863 16.777H37.4586V17.4642H6.64869V16.777H9.33199C10.3195 16.777 11.1227 15.9738 11.1227 14.9863C11.1227 14.5978 10.9972 14.2392 10.7863 13.9455C10.9972 13.6515 11.1227 13.2928 11.1227 12.9048C11.1227 11.9173 10.3195 11.1137 9.33199 11.1137H6.64869V6.02815C6.64869 5.6138 6.31274 5.27785 5.89839 5.27785C5.48404 5.27785 5.14809 5.6138 5.14809 6.02815V11.1423C3.45265 11.4332 2.15785 12.913 2.15785 14.6904V22.8379C1.50476 22.8782 0.985352 23.4208 0.985352 24.084V31.8591C0.985352 36.3273 2.95794 40.5253 6.39742 43.383C6.73768 43.6664 7.00895 43.9761 7.28884 44.3368C7.89214 45.1808 8.22574 46.2047 8.22574 47.2807V50.3945C8.22574 51.084 8.78671 51.645 9.47625 51.645H34.4621C35.1512 51.645 35.7122 51.084 35.7122 50.3945V47.2807C35.7122 46.2129 36.0446 45.1909 36.6452 44.347C36.8913 44 37.1912 43.6723 37.5186 43.4018C40.9721 40.5437 42.9526 36.3367 42.9526 31.8591V24.084C42.9526 23.4482 42.4751 22.9229 41.8604 22.8449ZM37.7087 18.9644C38.3978 18.9644 38.9588 18.4035 38.9588 17.7143V16.0267C38.9588 15.6124 38.6232 15.2768 38.2089 15.2768C38.1654 15.2768 38.1234 15.2811 38.0823 15.2882C38.0411 15.2811 37.9992 15.2768 37.956 15.2768H34.6859C34.526 15.2768 34.3954 15.1467 34.3954 14.9863C34.3954 14.826 34.526 14.6958 34.6859 14.6958H37.956C38.3704 14.6958 38.7063 14.3599 38.7063 13.9455C38.7063 13.5312 38.3704 13.1952 37.956 13.1952H34.6859C34.526 13.1952 34.3954 13.0651 34.3954 12.9048C34.3954 12.7444 34.526 12.6143 34.6859 12.6143H38.2559C38.31 12.6143 38.3622 12.6084 38.4127 12.5974C39.4994 12.6766 40.3598 13.5841 40.3598 14.6904V22.8339H37.0901V20.2588C37.0901 19.888 36.8866 19.5493 36.5585 19.3749C36.39 19.2847 36.2657 19.1373 36.2018 18.9648H37.7087V18.9644ZM34.4503 24.084V31.8591C34.4503 33.2237 34.0309 34.5189 33.2547 35.606C33.0418 35.9004 32.809 36.1779 32.5518 36.4347C31.3464 37.6381 29.7011 38.3335 27.9759 38.3335H27.0198V38.2426C27.62 37.5742 28.0951 36.7855 28.3997 35.9078C29.8105 35.4558 30.7921 34.1406 30.7921 32.6212C30.7921 31.4542 29.9124 30.4887 28.7811 30.353V27.7489C28.7811 25.1025 26.6282 22.9496 23.9821 22.9496H19.7947C17.1482 22.9496 14.9953 25.1025 14.9953 27.7489V30.3546C13.8711 30.4969 12.9988 31.4589 12.9988 32.6212C12.9988 34.132 13.9738 35.4448 15.3752 35.9023C15.6939 36.8227 16.1996 37.6452 16.8405 38.3335H15.9616C14.2219 38.3335 12.5763 37.6358 11.3712 36.4241C11.0866 36.1379 10.8314 35.8247 10.6025 35.4923C9.87806 34.4284 9.48762 33.1739 9.48762 31.8591V24.084C9.48762 23.46 9.02701 22.9425 8.42802 22.85V20.5344C8.94194 20.1636 9.27633 19.5948 9.35042 18.9644H34.6679C34.7416 19.5948 35.076 20.1636 35.5899 20.5344V22.8394C34.9521 22.8959 34.4503 23.4321 34.4503 24.084ZM16.6904 35.0807C16.6139 34.8027 16.3846 34.593 16.1008 34.5417C15.1729 34.3735 14.4994 33.5656 14.4994 32.6212C14.4994 32.192 14.8464 31.8423 15.2744 31.8376C15.4034 31.9419 15.5673 32.0042 15.7456 32.0042C16.16 32.0042 16.4959 31.6686 16.4959 31.2543C16.4959 28.8324 18.4662 26.8622 20.888 26.8622H22.8888C25.3106 26.8622 27.2809 28.8324 27.2809 31.2543C27.2809 31.6686 27.6164 32.0042 28.0312 32.0042C28.2099 32.0042 28.3738 31.9415 28.5028 31.8372H28.5079C28.9398 31.8372 29.2915 32.1888 29.2915 32.6212C29.2915 33.571 28.6137 34.3798 27.6792 34.5436C27.3938 34.5938 27.1629 34.8035 27.0857 35.083C26.4431 37.4119 24.3063 39.0384 21.8884 39.0384C19.4693 39.0384 17.3321 37.4108 16.6904 35.0807ZM16.5269 27.2958C16.7484 25.6905 18.1294 24.4502 19.7947 24.4502H23.9821C25.647 24.4502 27.0284 25.6905 27.2499 27.2958C26.1711 26.1084 24.6156 25.362 22.8888 25.362H20.888C19.1612 25.362 17.6057 26.1084 16.5269 27.2958ZM5.60517 12.5974C5.65574 12.6084 5.70827 12.6143 5.76197 12.6143H9.33199C9.49193 12.6143 9.62247 12.7444 9.62247 12.9048C9.62247 13.0647 9.49193 13.1952 9.33199 13.1952H5.9619C5.54754 13.1952 5.21159 13.5312 5.21159 13.9455C5.21159 14.3599 5.54754 14.6955 5.9619 14.6955H9.33199C9.49193 14.6955 9.62247 14.826 9.62247 14.9859C9.62247 15.1463 9.49193 15.2768 9.33199 15.2768H6.03481C5.99051 15.2686 5.94504 15.2639 5.89839 15.2639C5.48404 15.2639 5.14809 15.5994 5.14809 16.0138V17.7143C5.14809 18.4035 5.70905 18.9644 6.3982 18.9644H7.81649C7.7522 19.1373 7.62793 19.2843 7.45937 19.3745C7.13126 19.5493 6.9278 19.888 6.9278 20.2584V22.8335H3.65806V14.6904C3.65806 13.5837 4.51852 12.6766 5.60517 12.5974ZM2.48557 31.8591V24.3342H7.98701V31.8591C7.98701 33.3354 8.38647 34.7502 9.13285 35.9815L6.6142 41.5645C3.97912 39.0286 2.48557 35.546 2.48557 31.8591ZM7.78591 42.6155L10.167 37.3378C10.1905 37.3625 10.2152 37.3857 10.2387 37.41C10.2646 37.4366 10.2889 37.4641 10.3151 37.4903C10.3269 37.5021 10.3395 37.5127 10.352 37.5237C11.5476 38.7079 13.0874 39.4868 14.755 39.742L19.2996 50.1448H9.72596V47.2807C9.72596 45.5042 9.02505 43.8326 7.78591 42.6155ZM34.2116 47.2807V50.1448H24.4913L27.7772 42.6233C27.943 42.2434 27.7693 41.8013 27.3898 41.6354C27.0104 41.4696 26.5682 41.6429 26.402 42.0223L22.8539 50.1444H20.937L16.4328 39.8338H17.5073C17.7919 39.8338 18.0397 39.6754 18.1667 39.4418C19.2518 40.1395 20.5356 40.5386 21.8884 40.5386C23.1907 40.5386 24.429 40.1689 25.4874 39.519C25.2887 40.8052 24.1742 41.7934 22.8328 41.7934H20.9437C20.416 41.7934 19.9052 41.6405 19.467 41.3516C19.1212 41.1235 18.6559 41.2187 18.4278 41.5645C18.1996 41.9102 18.2949 42.3759 18.641 42.6041C19.3251 43.0553 20.1212 43.2936 20.9437 43.2936H22.8328C24.8935 43.2936 26.6101 41.7969 26.9551 39.8338H27.9759C30.0402 39.8338 32.0105 39.0251 33.4817 37.6213C33.5005 37.6064 33.5189 37.5903 33.5361 37.5734C33.5675 37.5429 33.5969 37.5111 33.6275 37.4801C33.6412 37.4664 33.6561 37.4531 33.6698 37.439L36.0513 42.7178C35.7906 42.9863 35.553 43.2776 35.3413 43.5892C35.3331 43.6017 35.3261 43.6143 35.3182 43.6268C34.6048 44.6923 34.2116 45.9605 34.2116 47.2807ZM41.452 31.8591C41.452 35.5938 39.9196 39.1183 37.2206 41.6621L34.7192 36.1167C35.5205 34.8553 35.9505 33.3927 35.9505 31.8591V24.3342H41.452V31.8591Z"
        fill="black"
      />
      <path
        d="M30.8727 7.07355C30.8727 6.6588 30.5368 6.32324 30.1224 6.32324H13.6683C13.2539 6.32324 12.918 6.65919 12.918 7.07355C12.918 7.48751 13.2539 7.82346 13.6683 7.82346H30.1224C30.5368 7.82346 30.8727 7.4879 30.8727 7.07355Z"
        fill="black"
      />
      <path
        d="M15.7401 10.0527C15.3258 10.0527 14.9902 10.3887 14.9902 10.803C14.9902 11.217 15.3258 11.5529 15.7401 11.5529H28.3667C28.7811 11.5529 29.1166 11.217 29.1166 10.803C29.1166 10.3887 28.7811 10.0527 28.3667 10.0527H15.7401Z"
        fill="black"
      />
      <path
        d="M20.0441 31.9277C20.0441 32.4107 19.6524 32.8023 19.1695 32.8023C18.6865 32.8023 18.2949 32.4107 18.2949 31.9277C18.2949 31.4444 18.6865 31.0527 19.1695 31.0527C19.6524 31.0527 20.0441 31.4444 20.0441 31.9277Z"
        fill="black"
      />
      <path
        d="M25.5499 31.9277C25.5499 32.4107 25.1587 32.8023 24.6754 32.8023C24.1924 32.8023 23.8008 32.4107 23.8008 31.9277C23.8008 31.4444 24.1924 31.0527 24.6754 31.0527C25.1587 31.0527 25.5499 31.4444 25.5499 31.9277Z"
        fill="black"
      />
      <path
        d="M23.1624 36.0846V34.8898C23.1624 34.2269 22.6249 33.6895 21.962 33.6895C21.2992 33.6895 20.7617 34.2269 20.7617 34.8898V36.0846C20.7617 36.7475 21.2992 37.285 21.962 37.285C22.6249 37.285 23.1624 36.7475 23.1624 36.0846Z"
        fill="black"
      />
    </SVG>
  );
};

export const Pants = () => {
  const SVG = styled.svg`
    pointer-events: none;
  `;
  return (
    <SVG
      width="23"
      height="40"
      viewBox="0 -10 24 57"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.6051 9.76587C11.1806 9.76587 10.8359 10.1105 10.8359 10.5351C10.8359 10.9596 11.1806 11.3043 11.6051 11.3043C12.0297 11.3043 12.3743 10.9596 12.3743 10.5351C12.3743 10.1105 12.0297 9.76587 11.6051 9.76587Z"
        fill="black"
      />
      <path
        d="M12.375 39.1516C12.375 39.5765 12.7193 39.9208 13.1442 39.9208H21.6054C22.0303 39.9208 22.3746 39.5765 22.3746 39.1516V10.9002C22.3746 8.5941 21.8422 6.28529 20.8362 4.20814V1.3068C20.8362 0.881936 20.4919 0.537598 20.067 0.537598H3.14453C2.71966 0.537598 2.37532 0.881936 2.37532 1.3068V4.20844C1.36935 6.28529 0.836914 8.59441 0.836914 10.9005V39.1516C0.836914 39.5765 1.18125 39.9208 1.60612 39.9208H10.0674C10.4922 39.9208 10.8366 39.5765 10.8366 39.1516V18.4108L11.6058 16.8724L12.375 18.4108V39.1516ZM13.9134 38.3824V36.844H20.8362V38.3824H13.9134ZM12.375 3.61441V2.076H14.6826V3.61441H12.375ZM3.63009 5.15192H5.40797C5.18231 7.14193 4.0883 8.9096 2.40657 9.9985C2.51714 8.32819 2.9339 6.675 3.63009 5.15192ZM10.8366 3.61441H8.52895V2.076H10.8366V3.61441ZM19.5814 5.15282C20.2779 6.6759 20.6944 8.32819 20.8053 9.9985C19.1235 8.9099 18.0292 7.14283 17.8036 5.15282H19.5814ZM19.2978 3.61441H16.221V2.076H19.2978V3.61441ZM3.91373 2.076H6.99054V3.61441H3.91373V2.076ZM2.37532 38.3824V36.844H9.29816V38.3824H2.37532ZM12.2938 14.8084C12.1634 14.5479 11.8972 14.3833 11.6058 14.3833C11.3143 14.3833 11.0481 14.5479 10.9177 14.8084L9.37928 17.8852C9.3261 17.9922 9.29816 18.11 9.29816 18.2293V35.3056H2.37532V11.7815L2.43692 11.7505C3.80616 11.0664 4.95516 10.0162 5.76012 8.71399C6.42957 7.6308 6.8355 6.41269 6.95359 5.15282H10.8366V7.46043C10.8366 7.8853 11.1809 8.22963 11.6058 8.22963C12.0306 8.22963 12.375 7.8853 12.375 7.46043V5.15282H16.2579C16.376 6.41269 16.782 7.6311 17.4514 8.71399C18.2564 10.0162 19.4054 11.0664 20.774 11.7502L20.8362 11.7815V35.3056H13.9134V18.2293C13.9134 18.11 13.8857 17.9922 13.8323 17.8852L12.2938 14.8084Z"
        fill="black"
      />
    </SVG>
  );
};

export const Kids = () => {
  const SVG = styled.svg`
    pointer-events: none;
  `;
  return (
    <SVG
      id="Capa_1"
      // enable-background="new 0 0 512 512"
      height="45"
      viewBox="-30 -30 612 612"
      width="45"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        <path d="m509.071 164.93-95.989-96.01c-1.244-1.244-2.735-2.087-4.314-2.539l-89.606-29.869c-.919-.304-2.09-.512-3.162-.512h-120c-1.104 0-2.303.228-3.162.513l-89.8 29.93c-1.958.678-3.609 1.705-4.969 3.478l-95.148 95.377c-3.897 3.906-3.894 10.231.008 14.134l63.64 63.64c3.917 3.914 10.267 3.903 14.167-.025l15.264-15.374v238.327c0 5.522 4.478 10 10 10h105c5.522 0 10-4.478 10-10s-4.478-10-10-10h-95v-372.796l71.308-23.766c6.286 32.189 34.691 56.562 68.692 56.562s62.406-24.373 68.692-56.562l71.308 23.77v372.792h-95c-5.522 0-10 4.478-10 10s4.478 10 10 10h105c5.522 0 10-4.478 10-10v-238.588l15.287 15.296c3.906 3.908 10.239 3.906 14.145.002l63.64-63.64c3.903-3.904 3.904-10.235-.001-14.14zm-435.457 56.903-49.48-49.481 71.866-72.039v98.976zm182.386-125.833c-24.146 0-44.348-17.205-48.994-40.01h97.988c-4.646 22.805-24.848 40.01-48.994 40.01zm182.362 125.495-22.362-22.376v-98.993l71.858 71.873z" />
        <path d="m196 366c-5.522 0-10 4.478-10 10s4.478 10 10 10h120c5.522 0 10-4.478 10-10s-4.478-10-10-10h-20v-170c0-5.522-4.478-10-10-10h-60c-2.652 0-5.195 1.054-7.071 2.929l-30 30c-1.876 1.876-2.929 4.418-2.929 7.071v30c0 5.522 4.478 10 10 10h20v100zm10-120v-15.857l24.142-24.143h45.858v160h-40v-110c0-5.522-4.478-10-10-10z" />
        <circle cx="256" cy="466" r="10" />
      </g>
    </SVG>
  );
};
