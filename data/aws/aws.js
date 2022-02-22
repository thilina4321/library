import Image from "next/image";
import s3Image from "../../public/s3.png";

export const aws = [
  {
    name: "iam",
    data: (
      <>
        <h1> How to remove git local and remote branch </h1>
        <h2> Remove remote branch and check remove status </h2>
        <ul>
          <li> git remote remove origin</li>
          <li> git remote -v</li>
        </ul>
        <h2> Remove Local Branch </h2>
        <ul>
          <li> Navigate to the repo root directory </li>
          <li> rm -rf .git </li>
        </ul>
      </>
    ),
  },
  {
    name: "s3-introduction",
    data: (
      <div>
        <h1> AWS S3 Introdcution </h1>

        <Image src={s3Image} alt="s3-bucket" />

        <div className="introduction">
          <h3> Introduction To S3 </h3>
          <ul>
            <li>S3 allows people to store files in the buckets</li>
            <li> Each buckets must have globally unique name </li>
            <li> S3 is global service but buckets are reginal service </li>
          </ul>
        </div>
        <div className="objects">
          <h3> Objects </h3>
          <ul>
            <li> Objects are files</li>
            <li> File have keys </li>
            <li> Key is the full path. </li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    name: "s3-versioning",
    data: (
      <div>
        <h1> Versioning </h1>

        <div className="versioning">
          <h3> Versioning </h3>
          <ul>
            <li>
              Versioning means keeping multiple variants of an object in the
              same bucket.
            </li>
            <li>
              S3 Versioning helps to preserve, retrieve, and restore every
              version of every object stored in your buckets.
            </li>
          </ul>
        </div>
      </div>
    ),
  },
];
