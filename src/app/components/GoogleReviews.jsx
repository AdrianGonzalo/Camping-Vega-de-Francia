"use client";

import { useEffect } from "react";

export default function GoogleReviews() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://static.elfsight.com/platform/platform.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div className="my-8">
      <div
        className="elfsight-app-8a78d95d-e1b7-4369-aca9-c97978d72f06"
        data-elfsight-app-lazy
      ></div>
    </div>
  );
}
