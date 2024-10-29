"use client";
import React from "react";
import FarmerNav from "../components/FarmerNav";
import BackgroundSlider from "react-background-slider";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative min-h-screen h-screen ">
      <div id="editorial" className="w-full h-screen mb-72">
        {/* Background images slider */}
        <BackgroundSlider
          images={["/one.jpg", "/two.jpg", "/three.jpg"]}
          duration={10}
          transition={2}
          className="h-96"
        />
        <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
        <div className="relative h-screen z-20">
          <FarmerNav />
          <div
            className="flex flex-col h-full justify-center md:px-0 px-4 items-center"
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            <h2 className="text-white mb-6 text-2xl lg:text-4xl">
              Videos and short
            </h2>
            <h2 className="text-white mb-6 text-2xl lg:text-4xl">
              documentaries discuss the
            </h2>
            <h2 className="text-white mb-6 lg:text-6xl text-2xl font-bold">
              Historical Heritage Tourism
            </h2>
          </div>
          {/* Grid layout */}
          <div className="grid grid-cols-1 pb-8 bg-white md:h-5/6 h-6/6 pt-24 md:grid-cols-2 gap-4 p-5">
            {/* Column for existing information */}
            <div
              data-aos="flip-up"
              data-aos-easing="linear"
              data-aos-duration="1500"
              className="flex flex-col justify-center md:h-6/6 h-6/6 pt-10 items-center bg-white bg-opacity-75 p-5 rounded-lg shadow-lg"
            >
              <iframe
                width="300"
                height="300"
                src="https://www.youtube.com/embed/HOt72eJiW6E"
                title="Video 1"
                className="w-full h-5/6 rounded-lg"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            {/* Column for additional content */}
            <div
              data-aos="flip-down"
              data-aos-easing="linear"
              data-aos-duration="1500"
              className="flex flex-col md:h-6/6 h-6/6 justify-center items-center pb-20 bg-white bg-opacity-75 px-8 rounded-lg shadow-lg"
            >
              <iframe
                width="300"
                height="300"
                src="https://www.youtube.com/embed/fq70UHD8DrM"
                title="Video 1"
                className="w-full h-5/6 rounded-lg"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          <div className="grid grid-cols-1 pb-8 bg-white md:h-5/6 h-6/6 pt-4 md:grid-cols-2 gap-4 p-5">
            {/* Column for existing information */}
            <div
              data-aos="flip-up"
              data-aos-easing="linear"
              data-aos-duration="1500"
              className="flex flex-col justify-center md:h-6/6 h-6/6 pt-10 items-center bg-white bg-opacity-75 p-5 rounded-lg shadow-lg"
            >
              <iframe
                width="300"
                height="300"
                src="https://www.youtube.com/embed/LVfxYfQhZAE"
                title="Video 1"
                className="w-full h-5/6 rounded-lg"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            {/* Column for additional content */}
            <div
              data-aos="flip-down"
              data-aos-easing="linear"
              data-aos-duration="1500"
              className="flex flex-col md:h-6/6 h-6/6 justify-center items-center pb-20 bg-white bg-opacity-75 px-8 rounded-lg shadow-lg"
            >
              <iframe
                width="300"
                height="300"
                src="https://www.youtube.com/embed/olboi3ttUi8"
                title="Video 1"
                className="w-full h-5/6 rounded-lg"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          <div className="bg-white w-full py-10 pb-24 flex flex-col justify-center items-center gap-10 pt-14">
            <h1 className="text-lg">
              Official websites and relevant industry associations and
              organizations for historical heritage tourism
            </h1>
            <div className="lg:w-3/4 w-full justify-center lg:pl-32 items-center mx-auto grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2">
              <div className="flex flex-col mb-8">
                <Link
                  className="text-cardfa"
                  href="https://www.achp.gov/heritage_tourism"
                >
                  {" "}
                  https://www.achp.gov/heritage_tourism
                </Link>
                <p className="mt-6">
                  Advisory Council on Historic Preservation
                </p>
              </div>
              <div className="flex flex-col  mb-8">
                <Link className="text-cardfa" href="https://wtach.org/">
                  {" "}
                  https://wtach.org/
                </Link>
                <p className="mt-6">
                  The World Tourism Association for Culture and Heritage
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white w-full py-10 pb-24 flex flex-col justify-center items-center gap-10 pt-14">
            <h1 className="text-lg font-semibold mb-6">
              Historical Heritage Tourism Articles and News
            </h1>

            <div className="lg:w-3/4 w-full grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col items-start">
                <Link
                  className="text-cardfa underline"
                  href="https://skift.com/2023/10/24/shaping-the-future-of-heritage-tourism"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Shaping the Future of Heritage Tourism in AlUla, Saudi Arabia
                </Link>
                <p className="mt-2 text-sm">
                  AlUla&apos;s Forever Revitalizing campaign promotes global
                  interest in heritage tourism while ensuring sustainability and
                  conservation of its historical sites, such as Hegra and Dadan,
                  through responsible visitor limits.
                </p>
              </div>

              <div className="flex flex-col items-start">
                <Link
                  className="text-cardfa underline"
                  href="https://www.cntraveler.com/story/unesco-world-heritage-sites-protect-status"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Efforts to Protect UNESCO World Heritage Sites
                </Link>
                <p className="mt-2 text-sm">
                  UNESCO World Heritage Sites like Notre Dame in Paris are
                  implementing new conservation efforts to balance tourism and
                  preservation, improving the visitor experience while
                  protecting these invaluable locations.
                </p>
              </div>

              <div className="flex flex-col items-start">
                <Link
                  className="text-cardfa underline"
                  href="https://www.smithsonianmag.com/travel/25-most-endangered-cultural-heritage-sites-2023"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  World&abpo;s 25 Most Endangered Cultural Heritage Sites
                </Link>
                <p className="mt-2 text-sm">
                  Climate change and other threats are putting heritage sites,
                  like the Nubian pyramids in Sudan, at risk, raising awareness
                  of the urgent need for protection and adaptation strategies to
                  preserve these landmarks.
                </p>
              </div>

              <div className="flex flex-col items-start">
                <Link
                  className="text-cardfa underline"
                  href="https://theconversation.com/heritage-tourism"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Global Challenges in Heritage Tourism
                </Link>
                <p className="mt-2 text-sm">
                  The Conversation examines the unique challenges faced by
                  countries like Tunisia and Ghana in leveraging heritage
                  tourism for economic growth, highlighting the need for
                  sustainable tourism models.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white w-full py-10 pb-24 flex flex-col justify-center items-center gap-10 pt-14">
  <h1 className="text-lg font-semibold mb-6">Historical Heritage Tourism - Social Media Links</h1>

  <div className="lg:w-3/4 w-full grid grid-cols-1 md:grid-cols-2 gap-8">
    <div className="flex flex-col items-start">
      <Link className="text-cardfa underline" href="https://www.facebook.com/UNESCO" target="_blank" rel="noopener noreferrer">
        Facebook: UNESCO World Heritage
      </Link>
      <p className="mt-2 text-sm">
        Follow UNESCO&apos;s official page for updates on global heritage sites, conservation projects, and cultural tourism news.
      </p>
    </div>

    <div className="flex flex-col items-start">
      <Link className="text-cardfa underline" href="https://twitter.com/UNESCO" target="_blank" rel="noopener noreferrer">
        Twitter: UNESCO World Heritage
      </Link>
      <p className="mt-2 text-sm">
        Stay informed on heritage preservation and cultural tourism initiatives shared by UNESCO on Twitter.
      </p>
    </div>

    <div className="flex flex-col items-start">
      <Link className="text-cardfa underline" href="https://www.instagram.com/unesco/" target="_blank" rel="noopener noreferrer">
        Instagram: UNESCO World Heritage
      </Link>
      <p className="mt-2 text-sm">
        Discover inspiring images and stories of heritage sites from around the world on UNESCO’s Instagram.
      </p>
    </div>

    <div className="flex flex-col items-start">
      <Link className="text-cardfa underline" href="https://www.linkedin.com/company/unesco" target="_blank" rel="noopener noreferrer">
        LinkedIn: UNESCO World Heritage
      </Link>
      <p className="mt-2 text-sm">
        Connect with UNESCO on LinkedIn for professional insights and heritage tourism discussions.
      </p>
    </div>
  </div>
</div>

        </div>
      </div>
    </div>
  );
}
