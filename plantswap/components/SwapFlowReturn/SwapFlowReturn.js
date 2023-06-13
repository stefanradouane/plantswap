import Text from "../Text/Text";
import styles from "./swapflowreturn.module.scss";

const SwapFlowReturn = ({ flowData, setFlowData, totalSteps }) => {
  function handleClick() {
    if (flowData.step > 1) {
      setFlowData((prev) => {
        return { ...prev, step: prev.step - 1 };
      });
    }
  }
  return (
    <section className={styles.swapflowreturn}>
      {flowData.step !== 1 ? (
        <section className={styles.swapflowreturn__click} onClick={handleClick}>
          <div className={styles.swapflowreturn__icon}>
            <Svg />
          </div>
          <Text className={styles.swapflowreturn__text}>Keer terug</Text>
        </section>
      ) : (
        <section></section>
      )}
      <section>Step {flowData.step}</section>
    </section>
  );
};

const Svg = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24">
    <g transform="rotate(0 12 12)">
      <g
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2">
        <path strokeDasharray="20" strokeDashoffset="20" d="M21 12H3.5">
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            dur="0.3s"
            values="20;0"
          />
        </path>
        <path
          strokeDasharray="12"
          strokeDashoffset="12"
          d="M3 12L10 19M3 12L10 5">
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            begin="0.3s"
            dur="0.2s"
            values="12;0"
          />
        </path>
      </g>
    </g>
  </svg>
);

export default SwapFlowReturn;
