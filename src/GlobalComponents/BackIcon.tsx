import { useState } from "react";

export const BackIcon = () => {
  const [Loading, setIsLoading] = useState(false);

  const handleClick = () => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    setIsLoading(true);
  };
  return (
    <nav>
      <div className="voltar-icon-container">
        {Loading ? (
          <div className="loading-icon">
            <svg
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#5E2612"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
            </svg>
          </div>
        ) : (
          <svg
            width="48"
            height="48"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#5E2612"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            onClick={handleClick}
          >
            <path d="M15 19l-7-7 7-7" />
          </svg>
        )}
      </div>
    </nav>
  );
};
