import { useRef } from "react";
import "../Styles/TransitionToPage.css";

const TransitionToPage = ({ veil = false, setFinish = null }) => {
  const blocks = Array.from({ length: 4 }, (_, i) => i);
  const veilClass = veil ? 'veil' : '';
  const resolveBlocks = useRef(0);

  const handleAnimationEnd = () => {
    if (veil && typeof setFinish === 'function') {
      const totalBlocks = blocks.length * 2;
      resolveBlocks.current += 1;

      if (resolveBlocks.current >= totalBlocks) {
        setFinish(true);
      }
    }
  };

  return (
    <div className="TransitionToPage" style={{ ["--total"]: 4 }} onAnimationEnd={handleAnimationEnd}>
      <div className="row top">
        {blocks.map((idx) => (
          <div key={idx} className={`block ${veilClass}`} style={{ ["--idx"]: idx }}></div>
        ))}
      </div>
      <div className="row bottom">
        {blocks.map((idx) => (
          <div key={idx} className={`block ${veilClass}`} style={{ ["--idx"]: idx }}></div>
        ))}
      </div>
    </div>
  );
};

export default TransitionToPage;
