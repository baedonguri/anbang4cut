import React from "react";
import Nav from "react-bootstrap/Nav";
import { useState } from "react";

import BackgroundContent from "./BackgroundContent";
import DecorationContent from "./DecorationContent";
import EffectContent from "./EffectContent";
import { AutoComplete } from "antd";

function CameraTabs() {
  let [탭, 탭변경] = useState(0);

  return (
    <div>
      <div>
        <Nav variant="tabs" defaultActiveKey="link0" className="chooses">
          <Nav.Item>
            <Nav.Link
              onClick={() => {
                탭변경(0);
              }}
              eventKey="link0"
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.571 1.84999C16.0207 0.955122 14.1783 0.712728 12.4493 1.17612C10.7202 1.63952 9.24605 2.77075 8.351 4.32099L8.101 4.75399C8.05166 4.83927 8.0196 4.93344 8.00667 5.03112C7.99374 5.1288 8.00018 5.22807 8.02562 5.32326C8.05107 5.41845 8.09502 5.50769 8.15497 5.58589C8.21492 5.66408 8.28968 5.7297 8.375 5.77899L12.909 8.39699L10.104 13.307C8.224 13.546 6.562 14.524 5.321 15.914C5.68473 15.9731 6.02504 16.1316 6.30438 16.372C6.58372 16.6123 6.79123 16.9252 6.904 17.276C7.139 18.009 7.628 18.232 8.022 18.236C8.425 18.241 8.884 18.023 9.102 17.368C9.23468 16.9697 9.48934 16.6232 9.82991 16.3777C10.1705 16.1322 10.5797 16 10.9995 16C11.4193 16 11.8285 16.1322 12.1691 16.3777C12.5097 16.6232 12.7643 16.9697 12.897 17.368C13.116 18.023 13.575 18.241 13.977 18.236C14.371 18.232 14.86 18.009 15.096 17.276C15.2088 16.9252 15.4163 16.6123 15.6956 16.372C15.975 16.1316 16.3153 15.9731 16.679 15.914C15.425 14.509 13.741 13.524 11.836 13.299L14.209 9.14699L18.767 11.779C18.8523 11.8283 18.9466 11.8603 19.0443 11.8731C19.142 11.886 19.2413 11.8795 19.3365 11.8539C19.4317 11.8284 19.5209 11.7843 19.5991 11.7243C19.6772 11.6643 19.7428 11.5894 19.792 11.504L20.042 11.071C20.9369 9.52076 21.1795 7.67854 20.7163 5.9495C20.2531 4.22046 19.1221 2.7462 17.572 1.85099L17.571 1.84999ZM5.714 17.66C5.66398 17.5039 5.56424 17.3686 5.43001 17.2746C5.29579 17.1806 5.13447 17.1331 4.97073 17.1395C4.80699 17.1458 4.64983 17.2056 4.52329 17.3097C4.39675 17.4138 4.30778 17.5565 4.27 17.716C4.06 18.606 3.663 19.08 3.229 19.35C2.769 19.636 2.179 19.751 1.5 19.751C1.30109 19.751 1.11032 19.83 0.96967 19.9707C0.829018 20.1113 0.75 20.3021 0.75 20.501C0.75 20.6999 0.829018 20.8907 0.96967 21.0313C1.11032 21.172 1.30109 21.251 1.5 21.251C2.322 21.251 3.23 21.116 4.021 20.624C4.44417 20.3604 4.80623 20.0096 5.083 19.595C6.635 21.461 9.493 21.451 11 19.566C12.534 21.485 15.466 21.461 16.997 19.495C17.845 20.604 19.167 21.251 20.5 21.251C20.6989 21.251 20.8897 21.172 21.0303 21.0313C21.171 20.8907 21.25 20.6999 21.25 20.501C21.25 20.3021 21.171 20.1113 21.0303 19.9707C20.8897 19.83 20.6989 19.751 20.5 19.751C19.317 19.751 18.116 18.954 17.716 17.667C17.6687 17.5148 17.5743 17.3816 17.4462 17.2868C17.3182 17.1919 17.1633 17.1403 17.0039 17.1394C16.8446 17.1385 16.6891 17.1884 16.56 17.2818C16.4309 17.3752 16.335 17.5073 16.286 17.659C15.502 20.099 12.476 20.059 11.711 17.764C11.661 17.615 11.5655 17.4855 11.4379 17.3938C11.3103 17.302 11.1571 17.2527 11 17.2527C10.8429 17.2527 10.6897 17.302 10.5621 17.3938C10.4345 17.4855 10.339 17.615 10.289 17.764C9.524 20.058 6.498 20.1 5.714 17.66Z"
                  fill={탭 === 0 ? "#007AFF" : "#959595"}
                />
              </svg>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              onClick={() => {
                탭변경(1);
              }}
              eventKey="link1"
            >
              <svg
                width="14"
                height="21"
                viewBox="0 0 14 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 7C2.76642e-08 5.14348 0.737498 3.36301 2.05025 2.05025C3.36301 0.737498 5.14348 0 7 0C8.85652 0 10.637 0.737498 11.9497 2.05025C13.2625 3.36301 14 5.14348 14 7C14 9.025 13.33 11.236 12.15 12.956C11.108 14.476 9.607 15.687 7.75 15.948V16.25C7.75 16.664 8.086 17 8.5 17H11.75C12.0455 17 12.3381 17.0582 12.611 17.1713C12.884 17.2843 13.1321 17.4501 13.341 17.659C13.5499 17.8679 13.7157 18.116 13.8287 18.389C13.9418 18.6619 14 18.9545 14 19.25V20.25C14 20.4489 13.921 20.6397 13.7803 20.7803C13.6397 20.921 13.4489 21 13.25 21C13.0511 21 12.8603 20.921 12.7197 20.7803C12.579 20.6397 12.5 20.4489 12.5 20.25V19.25C12.5 19.0511 12.421 18.8603 12.2803 18.7197C12.1397 18.579 11.9489 18.5 11.75 18.5H8.5C7.90326 18.5 7.33097 18.2629 6.90901 17.841C6.48705 17.419 6.25 16.8467 6.25 16.25V15.948C4.393 15.687 2.892 14.475 1.85 12.956C0.67 11.236 0 9.025 0 7ZM7.92 3.106C7.72682 3.06157 7.52391 3.09542 7.35562 3.20015C7.18733 3.30488 7.06734 3.47198 7.02188 3.66492C6.97642 3.85785 7.00919 4.06094 7.11302 4.22979C7.21686 4.39863 7.38331 4.51951 7.576 4.566C8.02638 4.67319 8.43825 4.9031 8.76588 5.2302C9.09351 5.5573 9.32408 5.96879 9.432 6.419C9.45478 6.51486 9.49623 6.6053 9.55396 6.68515C9.6117 6.765 9.6846 6.83269 9.76849 6.88437C9.85239 6.93605 9.94565 6.97069 10.0429 6.98633C10.1402 7.00196 10.2396 6.99828 10.3355 6.9755C10.4314 6.95272 10.5218 6.91127 10.6017 6.85354C10.6815 6.7958 10.7492 6.7229 10.8009 6.639C10.8525 6.55511 10.8872 6.46185 10.9028 6.36457C10.9185 6.26728 10.9148 6.16786 10.892 6.072C10.7196 5.35099 10.3506 4.69197 9.82584 4.16831C9.30112 3.64464 8.64135 3.27689 7.92 3.106V3.106Z"
                  fill={탭 === 1 ? "#007AFF" : "#959595"}
                />
              </svg>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              onClick={() => {
                탭변경(2);
              }}
              eventKey="link2"
            >
              <svg
                width="17"
                height="21"
                viewBox="0 0 17 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 0C10.3244 0 10.6456 0.0638885 10.9453 0.188018C11.2449 0.312147 11.5172 0.494086 11.7466 0.723446C11.9759 0.952807 12.1579 1.2251 12.282 1.52477C12.4061 1.82445 12.47 2.14563 12.47 2.47L12.469 3H16C16.2652 3 16.5196 3.10536 16.7071 3.29289C16.8947 3.48043 17 3.73478 17 4L16.999 7.499L15.469 7.5C14.8423 7.50016 14.239 7.73858 13.7815 8.16695C13.3239 8.59532 13.0464 9.1816 13.005 9.807L13 9.97V10.03C12.9999 10.6569 13.2382 11.2604 13.6666 11.7182C14.095 12.1759 14.6815 12.4536 15.307 12.495L15.47 12.5L16.999 12.499L17 16.003C17 16.2682 16.8947 16.5226 16.7071 16.7101C16.5196 16.8976 16.2652 17.003 16 17.003L12.469 17.002V17.53C12.4756 17.8585 12.4166 18.185 12.2955 18.4904C12.1744 18.7958 11.9935 19.0739 11.7636 19.3086C11.5336 19.5432 11.2591 19.7296 10.9562 19.8569C10.6533 19.9841 10.3281 20.0497 9.99952 20.0497C9.67098 20.0497 9.34573 19.9841 9.04283 19.8569C8.73993 19.7296 8.46546 19.5432 8.23549 19.3086C8.00552 19.0739 7.82467 18.7958 7.70354 18.4904C7.5824 18.185 7.52341 17.8585 7.53002 17.53V17.002H4.00002C3.73481 17.002 3.48045 16.8966 3.29292 16.7091C3.10538 16.5216 3.00002 16.2672 3.00002 16.002L2.99902 12.471H2.46902C1.81394 12.471 1.18568 12.2108 0.72247 11.7476C0.259255 11.2843 -0.000976562 10.6561 -0.000976562 10.001C-0.000976562 9.34592 0.259255 8.71766 0.72247 8.25445C1.18568 7.79123 1.81394 7.531 2.46902 7.531H3.00002V4C3.00002 3.73478 3.10538 3.48043 3.29292 3.29289C3.48045 3.10536 3.73481 3 4.00002 3H7.53002V2.47C7.53002 1.81492 7.79025 1.18666 8.25347 0.723446C8.71668 0.260232 9.34494 0 10 0Z"
                  fill={탭 === 2 ? "#007AFF" : "#959595"}
                />
              </svg>
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
      <TabContent 탭={탭}  />
    </div>
  );
}

function TabContent(props) {
  return [
    <div>
      <BackgroundContent />
    </div>,
    <div>
      <DecorationContent />
    </div>,
    <div>
      <EffectContent />
    </div>,
  ][props.탭];
}

export default CameraTabs;
