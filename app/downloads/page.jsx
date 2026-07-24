import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DownloadsExplorer from "@/components/Downloads/DownloadsExplorer";

export const metadata = {
  title: "Download Centre | Radiant International School",
  description:
    "Download syllabus, holiday homework, circulars, date sheets and important academic resources from Radiant International School.",
};

export default function DownloadsPage() {
  return( 
     <>
      <Navbar />
        <DownloadsExplorer />
      <Footer />
    </>
  );
}
