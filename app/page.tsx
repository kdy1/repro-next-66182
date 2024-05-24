/** Add your relevant code here for the issue to reproduce */
import dynamic from "next/dynamic";

const Map = dynamic(() => import("./map"), {
  ssr: false,
});

const API_KEY = process.env.NEXT_PUBLIC_HERE_API_KEY;

export default function Home() {
  return <Map apikey={API_KEY} />;
}
