import Head from "next/head";
import Appointment from "../components/home/Appointment";
import BloodDetails from "../components/home/BloodDetails";
import UsePrompt from "../components/home/UsePrompt";
import Locations from "../components/home/Locations";

const details = [
  { title: "Title 1", shortDescription: "This is the des 1" },
  { title: "Title 2", shortDescription: "This is the des 2" },
  { title: "Title 3", shortDescription: "This is the des 3" },
  { title: "Title 4", shortDescription: "This is the des 4" },
  { title: "Title 5", shortDescription: "This is the des 5" },
];

const locations = [
  { district: "Colombo", province: "Western", city: "biyagama" },
  { district: "Wayaba", province: "Nuwara", city: "daraniyagla" },
  { district: "Colombo", province: "Western", city: "biyagama" },
];

export default function Home() {
  return (
    <div>
      <Head>
        <title> Thilina Dilshan </title>
      </Head>
      <UsePrompt />
     
    </div>
  );
}
