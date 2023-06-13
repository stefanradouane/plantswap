import styles from "./loader.module.scss";

const bloomCenter = "rgb(255, 255, 255)";
const bloomLine = "rgb(51, 52, 53)";
const bloomLeaf = "rgb(248, 175, 180)";
const bloomBackLeaf = "rgb(225, 93, 100)";

const duration = "1.11111s";
const ease = "linear";

/**
 * Returns the animation string
 * @param {string} delay
 * @returns {string} animation
 */
const animation = (delay) =>
  `1.11111s linear ${delay} infinite normal forwards running beating`;

const Loader = ({ disabled }) => {
  if (disabled) return null;
  return (
    <svg
      viewBox="0 0 100 100"
      y="0px"
      x="0px"
      xmlns="http://www.w3.org/2000/svg"
      className={styles.loader}>
      <g
        className="ldl-scale"
        style={{
          transformOrigin: "50% 50%",
          transform: "rotate(0deg) scale(0.93, 0.93)",
        }}>
        <g className="ldl-ani">
          <g className="ldl-layer">
            <g
              className="ldl-ani"
              style={{
                transformOrigin: "50px 50px",
                animation: animation("-0.598291s"),
              }}>
              <path
                d="M73.93,38.34c6.65-9.16,5.76-17.45,0.17-21.51c-5.59-4.06-13.74-2.35-20.4,6.81c-1.96,2.7-3.09,6.11-3.7,9.56 c-0.61-3.46-1.74-6.86-3.7-9.56c-6.65-9.16-14.81-10.87-20.4-6.81s-6.48,12.35,0.17,21.51c1.96,2.7,4.86,4.82,7.95,6.47 c-3.48-0.49-7.06-0.47-10.24,0.56c-10.77,3.5-14.91,10.73-12.78,17.3c2.13,6.57,9.74,9.98,20.51,6.48c3.18-1.03,6.09-3.13,8.62-5.56 c-1.54,3.16-2.63,6.57-2.63,9.91C37.5,84.82,43.1,91,50,91s12.5-6.18,12.5-17.5c0-3.34-1.09-6.76-2.63-9.91 c2.53,2.44,5.44,4.53,8.62,5.56c10.77,3.5,18.37,0.09,20.51-6.48c2.13-6.57-2.01-13.8-12.78-17.3c-3.18-1.03-6.76-1.05-10.24-0.56 C69.07,43.16,71.96,41.04,73.93,38.34z"
                strokeMiterlimit="10"
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="3.5"
                style={{
                  fill: bloomBackLeaf,
                  stroke: bloomLine,
                }}></path>
            </g>
          </g>
          <g className="ldl-layer">
            <g
              className="ldl-ani"
              style={{
                transformOrigin: "50px 50px",
                animation: animation("-0.641026s"),
              }}>
              <path
                d="M76.21,54.63c10.77-3.5,12.78-17.3,12.78-17.3s-9.74-9.98-20.51-6.48c-3.18,1.03-6.09,3.13-8.62,5.56c1.54-3.16,2.63-6.57,2.63-9.91 C62.5,15.18,50,9,50,9s-12.5,6.18-12.5,17.5c0,3.34,1.09,6.76,2.63,9.91c-2.53-2.44-5.44-4.53-8.62-5.56 c-10.77-3.5-20.51,6.48-20.51,6.48s2.01,13.8,12.78,17.3c3.18,1.03,6.76,1.05,10.24,0.56c-3.1,1.65-5.99,3.77-7.95,6.47 c-6.65,9.16-0.17,21.51-0.17,21.51s13.74,2.35,20.4-6.81c1.96-2.7,3.09-6.11,3.7-9.56c0.61,3.46,1.74,6.86,3.7,9.56 c6.65,9.16,20.4,6.81,20.4,6.81s6.48-12.35-0.17-21.51c-1.96-2.7-4.86-4.82-7.95-6.47C69.45,55.67,73.03,55.66,76.21,54.63z"
                strokeMiterlimit="10"
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="3.5"
                style={{
                  fill: bloomLeaf,
                  stroke: bloomLine,
                }}></path>
            </g>
          </g>
          <g className="ldl-layer">
            <g className="ldl-ani">
              <g>
                <g className="ldl-layer">
                  <g
                    className="ldl-ani"
                    style={{
                      transformOrigin: "50px 50px",
                      animation: animation("-0.683761s"),
                    }}>
                    <circle
                      r="6"
                      cy="50"
                      cx="50"
                      strokeMiterlimit="10"
                      strokeLinejoin="round"
                      strokeLinecap="round"
                      strokeWidth="3.5"
                      fill="#FFFFFF"
                      style={{
                        fill: bloomCenter,
                        stroke: bloomLine,
                      }}></circle>
                  </g>
                </g>
                <g className="ldl-layer">
                  <g
                    className="ldl-ani"
                    style={{
                      transformOrigin: "50px 50px",
                      animation: animation("-0.726496s"),
                    }}>
                    <line
                      y2="29"
                      x2="50"
                      y1="44"
                      x1="50"
                      strokeMiterlimit="10"
                      strokeLinejoin="round"
                      strokeLinecap="round"
                      strokeWidth="3.5"
                      fill="none"
                      style={{ stroke: bloomLine }}></line>
                  </g>
                </g>
                <g className="ldl-layer">
                  <g
                    className="ldl-ani"
                    style={{
                      transformOrigin: "50px 50px",
                      animation: animation("-0.769231s"),
                    }}>
                    <line
                      y2="42"
                      x2="44"
                      y1="45.15"
                      x1="46.47"
                      strokeMiterlimit="10"
                      strokeLinejoin="round"
                      strokeLinecap="round"
                      strokeWidth="3.5"
                      fill="none"
                      style={{ stroke: bloomLine }}></line>
                  </g>
                </g>
                <g className="ldl-layer">
                  <g
                    className="ldl-ani"
                    style={{
                      transformOrigin: "50px 50px",
                      animation: animation("-0.811966s"),
                    }}>
                    <line
                      y2="53.23"
                      x2="40.54"
                      y1="51.85"
                      x1="44.29"
                      strokeMiterlimit="10"
                      strokeLinejoin="round"
                      strokeLinecap="round"
                      strokeWidth="3.5"
                      fill="none"
                      style={{ stroke: bloomLine }}></line>
                  </g>
                </g>
                <g className="ldl-layer">
                  <g
                    className="ldl-ani"
                    style={{
                      transformOrigin: "50px 50px",
                      animation: animation("-0.854701s"),
                    }}>
                    <line
                      y2="60"
                      x2="50.15"
                      y1="56"
                      x1="50"
                      strokeMiterlimit="10"
                      strokeLinejoin="round"
                      strokeLinecap="round"
                      strokeWidth="3.5"
                      fill="none"
                      style={{ stroke: bloomLine }}></line>
                  </g>
                </g>
                <g className="ldl-layer">
                  <g
                    className="ldl-ani"
                    style={{
                      transformOrigin: "50px 50px",
                      animation: animation("-0.897436s"),
                    }}>
                    <line
                      y2="52.95"
                      x2="59.56"
                      y1="51.85"
                      x1="55.71"
                      strokeMiterlimit="10"
                      strokeLinejoin="round"
                      strokeLinecap="round"
                      strokeWidth="3.5"
                      fill="none"
                      style={{ stroke: bloomLine }}></line>
                  </g>
                </g>
                <g className="ldl-layer">
                  <g
                    className="ldl-ani"
                    style={{
                      transformOrigin: "50px 50px",
                      animation: animation("-0.940171s"),
                    }}>
                    <line
                      y2="41.82"
                      x2="55.75"
                      y1="45.15"
                      x1="53.53"
                      strokeMiterlimit="10"
                      strokeLinejoin="round"
                      strokeLinecap="round"
                      strokeWidth="3.5"
                      fill="none"
                      style={{ stroke: bloomLine }}></line>
                  </g>
                </g>
                <g className="ldl-layer">
                  <g
                    className="ldl-ani"
                    style={{
                      transformOrigin: "50px 50px",
                      animation: animation("-0.982906s"),
                    }}>
                    <line
                      y2="43.51"
                      x2="30.03"
                      y1="48.15"
                      x1="44.29"
                      strokeMiterlimit="10"
                      strokeLinejoin="round"
                      strokeLinecap="round"
                      strokeWidth="3.5"
                      fill="none"
                      style={{ stroke: bloomLine }}></line>
                  </g>
                </g>
                <g className="ldl-layer">
                  <g
                    className="ldl-ani"
                    style={{
                      transformOrigin: "50px 50px",
                      animation: animation("-1.02564s"),
                    }}>
                    <line
                      y2="66.99"
                      x2="37.66"
                      y1="54.85"
                      x1="46.47"
                      strokeMiterlimit="10"
                      strokeLinejoin="round"
                      strokeLinecap="round"
                      strokeWidth="3.5"
                      fill="none"
                      style={{ stroke: bloomLine }}></line>
                  </g>
                </g>
                <g className="ldl-layer">
                  <g
                    className="ldl-ani"
                    style={{
                      transformOrigin: "50px 50px",
                      animation: animation("-1.06838s"),
                    }}>
                    <line
                      y2="66.99"
                      x2="62.34"
                      y1="54.85"
                      x1="53.53"
                      strokeMiterlimit="10"
                      strokeLinejoin="round"
                      strokeLinecap="round"
                      strokeWidth="3.5"
                      fill="none"
                      style={{ stroke: bloomLine }}></line>
                  </g>
                </g>
                <g className="ldl-layer">
                  <g
                    className="ldl-ani"
                    style={{
                      transformOrigin: "50px 50px",
                      animation: animation("-1.11111s"),
                    }}>
                    <line
                      y2="43.51"
                      x2="69.97"
                      y1="48.15"
                      x1="55.71"
                      strokeMiterlimit="10"
                      strokeLinejoin="round"
                      strokeLinecap="round"
                      strokeWidth="3.5"
                      fill="none"
                      style={{ stroke: bloomLine }}></line>
                  </g>
                </g>
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
};

export default Loader;
