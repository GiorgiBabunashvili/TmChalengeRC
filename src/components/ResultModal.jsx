import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

const ResultModal = forwardRef(
  ({ targetTime, remainingTime, onReset }, ref) => {
    const modal = useRef();

    const userLost = remainingTime <= 0;
    const formatetRemainingTime = (remainingTime / 1000).toFixed(2);
    const score = Math.floor((1 - remainingTime / (targetTime * 1000)) * 100);

    useImperativeHandle(ref, () => {
      return {
        open() {
          modal.current.showModal();
        },
      };
    });

    return createPortal(
      <dialog className="result-modal" ref={modal}>
        {userLost && <h2>You Lost!</h2>}
        {!userLost && <h2>You Score {score}</h2>}
        <p>
          The target time was <strong>{targetTime} seconds</strong>
        </p>
        <p>
          You stopped the timer with{" "}
          <strong>{formatetRemainingTime} seconds left</strong>
        </p>
        <form method="dialog" onSubmit={onReset}>
          <button>Close</button>
        </form>
      </dialog>,
      document.getElementById("modal")
    );
  }
);

export default ResultModal;
