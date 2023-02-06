import { PageProps } from "@/models";
import { useEffect } from "react";
const Groups: PageProps = () => {
  useEffect(() => {
    document.title = "Nhóm | Facebook";
  }, []);
  return (
    <div className="w-screen h-notHeader bg-space dark:bg-spaceDark text-primaryText dark:text-primaryTextDark">
      <div className="w-full h-full flex items-center justify-center">
        <h1 className="font-bold text-2428">Page not develop</h1>
      </div>
    </div>
  );
};
export default Groups;
