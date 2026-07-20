import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoGalleryClient from "@/components/VideoGallery/VideoGalleryClient";

export default function VideosPage() {
  return (
    <>
      <Navbar />

      <main className="pt-24">
        <VideoGalleryClient />
      </main>

      <Footer />
    </>
  );
}