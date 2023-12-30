import React, { Suspense } from "react";
import ReactLoading from "react-loading";

const LazyLoader = ({ children }) => {
  return <Suspense fallback={<SectionLoader />}>{children}</Suspense>;
};

const SectionLoader = () => {
  return (
    <div className="react-loading-div">
      <ReactLoading
        className="react-loading"
        type={"spinningBubbles"}
        color={"#FF0BA3"}
        height={"15%"}
        width={"15%"}
      />
    </div>
  );
};

export default LazyLoader;
