"use client";

import createClassnames from "../../utils/createClassnames";
import Icon from "../Icon/Icon";
import styles from "./button.module.scss";

const Button = ({
  rotateIcon,
  disabled,
  next,
  children,
  className,
  modifier,
  type,
  noIcon,
}) => {
  return (
    <button
      type={type ? type : "button"}
      className={createClassnames(styles, "button", className, modifier)}
      onClick={(e) => {
        if (!next) return;
        e.preventDefault();
        next ? next(e) : null;
      }}
      disabled={disabled}>
      {children}
      {!noIcon && <Icon iconName={"arrowCircle"} rotate={rotateIcon} />}
      {/* <svg
        xmlns="http://www.w3.org/2000/svg"
        width="31.999"
        height="31.999"
        viewBox="0 0 31.999 31.999">
        <path
          id="Subtraction_6"
          data-name="Subtraction 6"
          d="M11803,3828a16,16,0,1,1,11.313-4.686A15.9,15.9,0,0,1,11803,3828Zm-.608-20.7v10.515a.679.679,0,1,0,1.358,0V3807.3l4.233,4.236a.686.686,0,0,0,.483.2.68.68,0,0,0,.478-1.16l-5.39-5.393-.106-.086-.036-.027-.068-.036a.517.517,0,0,0-.068-.021h-.059a.669.669,0,0,0-.131-.013.7.7,0,0,0-.134.013h-.063a.428.428,0,0,0-.061.019l-.068.036-.051.027-.106.086-5.4,5.393a.681.681,0,0,0,.481,1.161.67.67,0,0,0,.479-.2l4.23-4.234Z"
          transform="translate(-11787.001 -3796)"
          fill="#d8dfec"
        />
      </svg> */}
    </button>
  );
};

export default Button;
