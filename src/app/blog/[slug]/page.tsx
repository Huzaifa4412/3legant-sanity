import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Home-Page/Navbar";
import NewsLetter from "@/app/components/Home-Page/NewsLetter";
import Link from "next/link";
import React from "react";

const page = ({ params }: { params: { slug: string } }) => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-12">
        {/* Breadcrumb Navigation */}
        <div className="mb-8 flex items-center gap-2 text-sm text-gray-500">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <span>/</span>
          <Link href="/blog" className="hover:underline">
            Blog
          </Link>
          <span>/</span>
          <span className="font-medium text-gray-900">{params.slug}</span>
        </div>
      </div>
      <NewsLetter />
      <Footer />
    </>
  );
};

export default page;
