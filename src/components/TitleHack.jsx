import React, { useState, useEffect } from "react";

const TitleHack = (title) => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  console.log("title", title);
  if (title.title == "sindhol") {
    if (screenWidth >= 1024) {
      return (
        <>
          <span className="whitespace-nowrap">From the lambanis</span>
          <span className="lg:block">of Sindhol</span>
        </>
      );
    } else {
      return <span>From the lambanis of Sindhol</span>;
    }
  } else if (title.title == "small-web") {
    if (screenWidth >= 1024) {
      return (
        <>
          <span className="whitespace-nowrap">The Small</span>
          <span className="lg:block">Social Web</span>
        </>
      );
    } else {
      return <span>The Small Social Web</span>;
    }
  } else if (title.title == "thrift-it") {
    return <>Thrift It</>;
  } else if (title.title == "browser-project") {
    return <>The Browser Project</>;
  } else if (title.title == "digital-book") {
    if (screenWidth >= 1024) {
      return (
        <>
          <span className="whitespace-nowrap">The Dysfunctional</span>
          <span className="block">Digital Book</span>
        </>
      );
    } else {
      return <span>The Dysfunctional digital book</span>;
    }
  }
};

export default TitleHack;
