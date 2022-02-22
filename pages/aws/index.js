import PageLayout from "../../page_layout/PageLayout";

export default function Aws() {
  const data = [
    { path: "/aws/iam", title: "IAM" },
    { path: "/aws/s3-introduction", title: "S3 Introduction" },
    { path: "/aws/s3-versioning", title: "S3 Versioning" },
  ];
  return (
    <div>
      <PageLayout title={"AWS"} data={data} />
    </div>
  );
}
