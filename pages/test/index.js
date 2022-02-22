import Image from "next/image";
import React from "react";
import s3Image from "../../public/s3.png";

const TestCode = () => {
  return (
    <div>
      <h1> Versioning </h1>

      <div className="versioning">
        <h3> Versioning </h3>
        <ul>
          <li>
            Versioning means keeping multiple variants of an object in the same
            bucket.
          </li>
          <li>
            S3 Versioning helps to preserve, retrieve, and restore every version
            of every object stored in your buckets.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TestCode;
