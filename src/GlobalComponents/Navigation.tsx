import React from "react";

interface Props {
  children: React.ReactNode;
}
const Navigation: React.FC<Props> = ({ children }) => {
  const handleScroll = (id: string): void => {
    window.scrollTo({
      top: document.getElementById(id)
        ? document.getElementById(id)!.offsetTop
        : 0,
      behavior: "smooth",
    });
  };

  const handleClickId = (e: React.MouseEvent<HTMLDivElement>): void => {
    const id = (e.target as HTMLElement).id;
    if (id) {
      handleScroll(id);
    }
  };

  return <div onClick={handleClickId}>{children}</div>;
};

export default Navigation;
