import React, { useState, forwardRef } from "react";
import Nav from "react-bootstrap/Nav";
import styles from "./GroupPage.module.css";
import BackgroundContent from "./BackgroundContent";
// import SelfUploadBgContent from "./SelfUploadBgContent";
import WithStar from "./WithStar";

const CameraTabs = forwardRef((props, ref) => {
  let [tab, setTab] = useState(0);

  return (
    <>
      {props.roomname === props.token ? (
        <div>
          <div className={styles.tab_container}>
            <Nav
              variant="tabs"
              defaultActiveKey="link0"
              className="chooses"
              style={{ paddingTop: "6px" }}
            >
              <Nav.Item>
                <Nav.Link
                  onClick={() => {
                    setTab(0);
                  }}
                  eventKey="link0"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="100"
                    height="25"
                    fill="currentColor"
                    className="bi bi-card-image"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"
                      fill={tab === 0 ? "#fc8da1" : "#959595"}
                    />
                    <path
                      d="M1.5 2A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13zm13 1a.5.5 0 0 1 .5.5v6l-3.775-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12v.54A.505.505 0 0 1 1 12.5v-9a.5.5 0 0 1 .5-.5h13z"
                      fill={tab === 0 ? "#fc8da1" : "#959595"}
                    />
                  </svg>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  onClick={() => {
                    setTab(1);
                  }}
                  eventKey="link2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="100"
                    height="25"
                    fill="currentColor"
                    className="bi bi-stars"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M7.657 6.247c.11-.33.576-.33.686 0l.645 1.937a2.89 2.89 0 0 0 1.829 1.828l1.936.645c.33.11.33.576 0 .686l-1.937.645a2.89 2.89 0 0 0-1.828 1.829l-.645 1.936a.361.361 0 0 1-.686 0l-.645-1.937a2.89 2.89 0 0 0-1.828-1.828l-1.937-.645a.361.361 0 0 1 0-.686l1.937-.645a2.89 2.89 0 0 0 1.828-1.828l.645-1.937zM3.794 1.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387A1.734 1.734 0 0 0 4.593 5.69l-.387 1.162a.217.217 0 0 1-.412 0L3.407 5.69A1.734 1.734 0 0 0 2.31 4.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387A1.734 1.734 0 0 0 3.407 2.31l.387-1.162zM10.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732L9.1 2.137a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L10.863.1z"
                      fill={tab === 1 ? "#fc8da1" : "#959595"}
                    />
                  </svg>
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </div>
          <TabContent
            tab={tab}
            ImgBase64={props.ImgBase64}
            setImgBase64={props.setImgBase64}
            ref={ref}
            // starImg={props.setImage}
          />
        </div>
      ) : (
        <div className={styles.tab_contents_container}>
          <WithStar ref={ref} />
        </div>
      )}
    </>
  );
});

const TabContent = forwardRef((props, ref) => {
  return [
    <div className={styles.tab_contents_container}>
      <BackgroundContent
        ImgBase64={props.ImgBase64}
        setImgBase64={props.setImgBase64}
        ref={ref}
      />
    </div>,
    <div className={styles.tab_contents_container}>
      <WithStar
        ref={ref}
        // starImg={props.setImage}
      />
    </div>,
  ][props.tab];
});

export default CameraTabs;
