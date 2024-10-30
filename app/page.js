"use client";
import React from "react";
import FarmerNav from "./components/FarmerNav";
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
              Special Interest Tourism
            </h2>
            <h2 className="text-white mb-6 lg:text-6xl text-2xl font-bold">
              Historical Heritage Tourism
            </h2>
            <p className="text-white md:w-7/12 w-full  lg:text-lg">
              Exploring Historical Heritage Tourism connecting with the past,
              understanding cultural narratives, and supporting the preservation
              of history for future generations.
            </p>
          </div>
          {/* Grid layout */}
          <div className="grid grid-cols-1 pb-48 bg-white md:h-5/6 h-6/6 pt-24 md:grid-cols-2 gap-4 p-5">
            {/* Column for existing information */}
            <div
              data-aos="flip-up"
              data-aos-easing="linear"
              data-aos-duration="1500"
              className="flex flex-col justify-center md:h-3/6 h-4/6 pt-10 items-center bg-white bg-opacity-75 p-5 rounded-lg shadow-lg"
            >
              <Image
                src="/five.jpg"
                width={1000}
                height={600}
                className="w-full h-full object-cover rounded-lg"
                alt="Descriptive Alt Text"
              />
            </div>

            {/* Column for additional content */}
            <div
              data-aos="flip-down"
              data-aos-easing="linear"
              data-aos-duration="1500"
              className="flex flex-col md:h-3/6 h-6/6 justify-center items-center pb-20 bg-white bg-opacity-75 px-8 rounded-lg shadow-lg"
            >
              <h3 className="text-2xl mt-6 text-red-500 mb-10 font-bold">
                INTRODUCTION
              </h3>
              <p className="text-gray-700 leading-loose mb-4">
                Welcome to our blog, where we explore the fascinating world of
                special interest tourism, with a particular focus on historical
                heritage tourism.
              </p>
              <p className="text-gray-700 leading-loose mb-4">
                Here, we delve into the rich tapestry of unique travel
                experiences that celebrate and preserve the history and culture
                of our world. Our platform offers you three key features:
              </p>
              <ul className="text-gray-700 list-disc pl-5 leading-loose mb-4">
                <li className="mb-4">
                  <strong className="mr-3">In-Depth Articles:</strong> Discover
                  well-researched articles that highlight historical sites,
                  cultural practices, and significant events, allowing you to
                  immerse yourself in the stories that shape our heritage.
                </li>
                <li className="mb-4">
                  <strong className="mr-3">Travel Guides:</strong> Access
                  comprehensive travel guides that provide practical information
                  for visiting historical landmarks, including tips on local
                  customs, best times to visit, and ways to engage with the
                  community.
                </li>
                <li className="mb-4">
                  <strong className="mr-3">Community Engagement:</strong> Join a
                  vibrant community of like-minded travelers who share your
                  passion for history. Participate in discussions, share your
                  experiences, and contribute to preserving our cultural legacy.
                </li>
              </ul>
              <p className="text-gray-700 leading-loose mb-8">
                <strong>Editorial: </strong>includes a definition of special
                interest tourism, explores market opportunities within this
                sector, and highlights successful businesses that operate in the
                realm of special interest tourism.{" "}
              </p>
              <p className="text-gray-700 leading-loose mb-8">
                <strong>News Feed: </strong> Keep yourself informed with the
                latest videos, websites, articles, and social media content that
                focus on dark tourism.
              </p>
              <p className="text-gray-700 leading-loose mb-8">
                <strong>Forum: </strong>Join our community forum to share your
                experiences, ask questions, and connect with others who share
                your interest in historical heritage tourism.{" "}
              </p>
            </div>
          </div>
          <div className="md:pt-48  pb-44  bg-white text-center w-full h-64 flex md:justify-center md:items-center">
            <div className="w-full md:w-1/2 pb-20">
              <h3
                data-aos="flip-up"
                data-aos-easing="linear"
                data-aos-duration="1500"
                
                className=" text-red-600 text-4xl mb-8"
              >
                Special Interest Tourism (SIT)
              </h3>
              <p
                data-aos="flip-down"
                data-aos-easing="linear"
                data-aos-duration="1500"
                className="text-red-600"
              >
                Special Interest Tourism (SIT) refers to travel that is
                motivated by a specific interest or activity that goes beyond
                general sightseeing. SIT focuses on providing experiences
                tailored to a traveler’s unique passions, hobbies, or goal
              </p>
            </div>
          </div>
          <div className="bg-white w-full text-center">
            <h1
              data-aos="flip-up"
              data-aos-easing="linear"
              data-aos-duration="1500"
              className="text-4xl  text-red-600"
            >
              Examples OF Special Interest Tourism (SIT)
            </h1>
            <div className="grid grid-cols-1 md:mx-24  bg-white md:h-3/6 h-6/6 lg:grid-cols-3 pt-24 md:grid-cols-2 gap-4 p-5">
              <div
                data-aos="flip-up"
                data-aos-easing="linear"
                data-aos-duration="1500"
                className="flex flex-col items-center p-5 h-72 bg-gray-100 rounded-lg shadow-lg"
              >
                <h3 className="text-xl mt-4 font-bold">
                  Historical Heritage Tourism
                </h3>
                <p className="text-red-600 mt-2 text-center">
                  Explore ancient landmarks, ruins, and monuments that highlight
                  the history of different cultures.
                </p>
              </div>
              <div
                data-aos="flip-down"
                data-aos-easing="linear"
                data-aos-duration="1500"
                className="flex flex-col items-center p-5 h-72 bg-gray-100 rounded-lg shadow-lg"
              >
                <h3 className="text-xl mt-4 font-bold">Dark Tourism</h3>
                <p className="text-red-600 mt-2 text-center">
                  Visit sites associated with historical tragedies, such as
                  battlefields, memorials, and museums.
                </p>
              </div>
              <div
                data-aos="flip-up"
                data-aos-easing="linear"
                data-aos-duration="1500"
                className="flex flex-col items-center p-5 h-72 bg-gray-100 rounded-lg shadow-lg"
              >
                <h3 className="text-xl mt-4 font-bold">Ecotourism</h3>
                <p className="text-red-600 mt-2 text-center">
                  Experience nature and wildlife conservation efforts while
                  respecting local ecosystems.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white pt-24 w-full text-center">
            <h1
              data-aos="flip-up"
              data-aos-easing="linear"
              data-aos-duration="1500"
              className="md:text-4xl text-2xl text-red-600"
            >
              Market Opportunities for Special Interest Tourism
            </h1>

            <div className="grid grid-cols-1 md:mx-24 bg-white md:h-3/6 h-6/6 lg:grid-cols-3 pt-24 md:grid-cols-2 gap-4 p-5">
              {/* Historical Heritage Tourism */}
              <div
                data-aos="flip-up"
                data-aos-easing="linear"
                data-aos-duration="1500"
                className="flex flex-col items-center p-5  md:h-80 h-96   bg-gray-100 rounded-lg shadow-lg"
              >
                <h3 className="text-xl mt-4 font-bold mb-6">
                  Historical Heritage Tourism
                </h3>
                <p className="text-red-600 mt-2 text-center mb-6">
                  <span className="font-semibold">Target Market:</span> History
                  buffs, cultural enthusiasts, and educational travelers.
                </p>
                <p className="text-red-600 mt-2 text-center mb-6">
                  <span className="font-semibold">Trend:</span> Increasing
                  interest in preserving and experiencing historical sites for
                  educational and cultural enrichment.
                </p>
                <p className="text-red-600 mt-2 text-center mb-6">
                  <span className="font-semibold">Demand:</span> Growing
                  appreciation for heritage preservation and the promotion of
                  local historical narratives.
                </p>
              </div>

              {/* Dark Tourism */}
              <div
                data-aos="flip-down"
                data-aos-easing="linear"
                data-aos-duration="1500"
                className="flex flex-col items-center p-5 md:h-80 h-96  bg-gray-100 rounded-lg shadow-lg"
              >
                <h3 className="text-xl mt-4 font-bold  mb-6">Dark Tourism</h3>
                <p className="text-red-600 mt-2 text-center mb-6">
                  <span className="font-semibold">Target Market:</span>{" "}
                  Travelers interested in history, human resilience, and
                  reflective experiences.
                </p>
                <p className="text-red-600 mt-2 text-center mb-6">
                  <span className="font-semibold">Trend:</span> Visitors are
                  increasingly drawn to sites associated with historical events,
                  such as battlefields and memorials.
                </p>
                <p className="text-red-600 mt-2 text-center mb-6">
                  <span className="font-semibold">Demand:</span> Desire for
                  deeper, thought-provoking travel experiences that acknowledge
                  historical tragedies and lessons.
                </p>
              </div>

              {/* Ecotourism */}
              <div
                data-aos="flip-up"
                data-aos-easing="linear"
                data-aos-duration="1500"
                className="flex flex-col items-center p-5  md:h-80 h-96  bg-gray-100 rounded-lg shadow-lg"
              >
                <h3 className="text-xl mt-4 font-bold  mb-6">Ecotourism</h3>
                <p className="text-red-600 mt-2 text-center mb-6">
                  <span className="font-semibold">Target Market:</span> Nature
                  enthusiasts and eco-conscious travelers.
                </p>
                <p className="text-red-600 mt-2 text-center mb-6">
                  <span className="font-semibold">Trend:</span> Travelers
                  seeking to explore natural environments while minimizing their
                  impact on the ecosystem.
                </p>
                <p className="text-red-600 mt-2 text-center mb-6">
                  <span className="font-semibold">Demand:</span> Increasing
                  awareness of environmental issues and eco-friendly
                  accommodations and activities.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white pt-24 w-full text-center">
            <h1
              data-aos="flip-up"
              data-aos-easing="linear"
              data-aos-duration="1500"
              className="text-4xl mb-4 text-red-600"
            >
              Successful Special Interest Tourism Businesses
            </h1>
            <Link
              className="hover:text-cardfa"
              href="https://tourismteacher.com/special-interest-tourism/#google_vignette"
              target="blank"
            >
              https://tourismteacher.com/special-interest-tourism/#google_vignette
            </Link>

            <div className="grid grid-cols-1 md:mx-24 bg-white md:h-3/6 h-6/6 lg:grid-cols-4 pt-24 md:grid-cols-2 gap-4 p-5">
              {/* Historical Heritage Tourism */}
              <div
                data-aos="flip-up"
                data-aos-easing="linear"
                data-aos-duration="1500"
                className="flex flex-col items-center p-5 md:h-80 h-96 bg-gray-100 rounded-lg shadow-lg"
              >
                <h3 className="text-xl mt-4 font-bold mb-6">
                  Historical Heritage Tourism
                </h3>
                <p className="text-red-600 mt-2 text-center mb-6">
                  This type of tourism focuses on exploring ancient landmarks,
                  ruins, and monuments that highlight the history of different
                  cultures. (Denzon, 2023).
                </p>
              </div>

              {/* Dark Tourism */}
              <div
                data-aos="flip-down"
                data-aos-easing="linear"
                data-aos-duration="1500"
                className="flex flex-col items-center p-5 md:h-80 h-96 bg-gray-100 rounded-lg shadow-lg"
              >
                <h3 className="text-xl mt-4 font-bold mb-6">Dark Tourism</h3>
                <p className="text-red-600 mt-2 text-center mb-6">
                  This form of tourism involves visiting sites associated with
                  historical tragedies, such as battlefields, memorials, and
                  museums. (Foley & Lennon, 1996).
                </p>
              </div>

              {/* Ecotourism */}
              <div
                data-aos="flip-up"
                data-aos-easing="linear"
                data-aos-duration="1500"
                className="flex flex-col items-center p-5 md:h-80 h-96 bg-gray-100 rounded-lg shadow-lg"
              >
                <h3 className="text-xl mt-4 font-bold mb-6">Ecotourism</h3>
                <p className="text-red-600 mt-2 text-center mb-6">
                  This type of tourism emphasizes responsible travel to natural
                  areas, conserving the environment and improving the well-being
                  of local people. (The International Ecotourism Society, 2015).
                </p>
              </div>

              {/* Culinary Tourism */}
              <div
                data-aos="flip-down"
                data-aos-easing="linear"
                data-aos-duration="1500"
                className="flex flex-col items-center p-5 md:h-80 h-96 bg-gray-100 rounded-lg shadow-lg"
              >
                <h3 className="text-xl mt-4 font-bold mb-6">
                  Culinary Tourism
                </h3>
                <p className="text-red-600 mt-2 text-center mb-6">
                  This type of tourism involves exploring different cultures
                  through their cuisine, including cooking classes, food
                  festivals, and local dining experiences. (Hjalager, 2002).
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white pt-24 w-full text-center">
            <h1
              data-aos="flip-up"
              data-aos-easing="linear"
              data-aos-duration="1500"
              className="text-4xl mb-4 text-red-600"
            >
              Why These Special Interest Tourism Businesses are Successful
            </h1>

            <div className="grid grid-cols-1 md:mx-24 bg-white md:h-3/6 h-6/6 lg:grid-cols-4 pt-24 md:grid-cols-2 gap-4 p-5">
              {/* Historical Heritage Tourism */}
              <div
                data-aos="flip-up"
                data-aos-easing="linear"
                data-aos-duration="1500"
                className="flex flex-col items-center p-5 md:h-96 h-96 bg-gray-100 rounded-lg shadow-lg"
              >
                <h3 className="text-xl mt-4 font-bold mb-6">
                  Historical Heritage Tourism
                </h3>
                <p className="text-red-600 mt-2 text-center mb-6">
                  Niche Targeting: Focuses on history enthusiasts who value
                  cultural heritage, attracting a loyal customer base.
                </p>
                <p className="text-red-600 mt-2 text-center mb-6">
                  Authentic Experiences: Offers an authentic dive into ancient
                  landmarks and historical sites, creating strong emotional
                  connections.
                </p>
                <p className="text-red-600 mt-2 text-center mb-6">
                  Knowledgeable Guides: Guided tours are often led by history
                  experts, enhancing the educational value of the experience.
                </p>
              </div>

              {/* Dark Tourism */}
              <div
                data-aos="flip-down"
                data-aos-easing="linear"
                data-aos-duration="1500"
                className="flex flex-col items-center p-5 md:h-96 h-96 bg-gray-100 rounded-lg shadow-lg"
              >
                <h3 className="text-xl mt-4 font-bold mb-6">Dark Tourism</h3>
                <p className="text-red-600 mt-2 text-center mb-6">
                  Reflective Experiences: Provides visitors with
                  thought-provoking experiences that acknowledge historical
                  tragedies.
                </p>
                <p className="text-red-600 mt-2 text-center mb-6">
                  Targeted Audience: Appeals to travelers interested in
                  resilience and human history, creating a unique customer
                  niche.
                </p>
                <p className="text-red-600 mt-2 text-center mb-6">
                  Preservation Support: By raising awareness of tragic events,
                  it encourages preservation and memorial efforts.
                </p>
              </div>

              {/* Ecotourism */}
              <div
                data-aos="flip-up"
                data-aos-easing="linear"
                data-aos-duration="1500"
                className="flex flex-col items-center p-5 md:h-96 h-96 bg-gray-100 rounded-lg shadow-lg"
              >
                <h3 className="text-xl mt-4 font-bold mb-6">Ecotourism</h3>
                <p className="text-red-600 mt-2 text-center mb-6">
                  Sustainability Focus: Appeals to eco-conscious travelers by
                  promoting environmental awareness and preservation.
                </p>
                <p className="text-red-600 mt-2 text-center mb-6">
                  Local Impact: Supports local economies and helps in the
                  conservation of ecosystems, providing economic benefits to
                  communities.
                </p>
                <p className="text-red-600 mt-2 text-center mb-6">
                  Educative Guides: Led by environmental experts who educate
                  tourists on ecological conservation and respect for nature.
                </p>
              </div>

              {/* Culinary Tourism */}
              <div
                data-aos="flip-down"
                data-aos-easing="linear"
                data-aos-duration="1500"
                className="flex flex-col items-center p-5 md:h-96 h-96 bg-gray-100 rounded-lg shadow-lg"
              >
                <h3 className="text-xl mt-4 font-bold mb-6">
                  Culinary Tourism
                </h3>
                <p className="text-red-600 mt-2 text-center mb-6">
                  Authentic Taste of Culture: Immerses travelers in local
                  cuisine, deepening cultural appreciation.
                </p>
                <p className="text-red-600 mt-2 text-center mb-6">
                  Unique Experiences: Offers cooking classes and food festivals
                  that attract both locals and international travelers.
                </p>
                <p className="text-red-600 mt-2 text-center mb-6">
                  Partnership with Locals: Supports local chefs and food
                  markets, promoting sustainable tourism and economic growth.
                </p>
              </div>
            </div>
            <h1 
            id="feeds"
              data-aos="flip-up"
              data-aos-easing="linear"
              data-aos-duration="1500"
              className="text-4xl mb-4 pt-24 text-red-600"
            >
              Links for Successful Special Interest Tourism
            </h1>

            <div className="grid grid-cols-1 md:mx-24 bg-white md:h-3/6 h-6/6 lg:grid-cols-4 md:grid-cols-2 gap-4 p-5">
              {/* Historical Heritage Tourism */}
              <a
                href="https://globalheritagefund.org"
                target="_blank"
                rel="noopener noreferrer"
                data-aos="flip-up"
                data-aos-easing="linear"
                data-aos-duration="1500"
                className="flex flex-col items-center p-5 h-16 bg-gray-100 rounded-lg shadow-lg"
              >
                Historical Heritage Tourism
              </a>

              {/* Dark Tourism */}
              <a
                href="https://dark-tourism.com"
                target="_blank"
                rel="noopener noreferrer"
                data-aos="flip-down"
                data-aos-easing="linear"
                data-aos-duration="1500"
                className="flex flex-col items-center p-5 h-16 bg-gray-100 rounded-lg shadow-lg"
              >
                Dark Tourism
              </a>

              {/* Ecotourism */}
              <a
                href="https://ecotourism.org"
                target="_blank"
                rel="noopener noreferrer"
                data-aos="flip-up"
                data-aos-easing="linear"
                data-aos-duration="1500"
                className="flex flex-col items-center p-5 h-16 bg-gray-100 rounded-lg shadow-lg"
              >
                Ecotourism
              </a>

              {/* Culinary Tourism */}
              <a
                href="https://www.culinarytourismalliance.com"
                target="_blank"
                rel="noopener noreferrer"
                data-aos="flip-down"
                data-aos-easing="linear"
                data-aos-duration="1500"
                className="flex flex-col items-center p-5 h-16 bg-gray-100 rounded-lg shadow-lg"
              >
                Culinary Tourism
              </a>
            </div>
          </div>
          <div className="grid grid-cols-1 pb-48 bg-white md:h-5/6 h-6/6 pt-24 md:grid-cols-2 gap-4 p-5">
            <div
              data-aos="flip-down"
              data-aos-easing="linear"
              data-aos-duration="1500"
              className="flex flex-col md:h-2/6 h-6/6 justify-center items-center pb-20 bg-white bg-opacity-75 px-8 rounded-lg shadow-lg"
            >
              <h3 className="text-2xl mt-6 text-red-500 mb-10 font-bold">
                ABOUT HISTORICAL HERITAGE TOURISM
              </h3>
              <p className="text-gray-700 leading-loose mb-4">
                Historical Heritage Tourism focuses on immersing travelers in
                the cultural and historical richness of destinations. It
                attracts history enthusiasts who value the preservation and
                exploration of cultural heritage, creating a loyal and engaged
                audience.
              </p>
              <p className="text-gray-700 leading-loose mb-4">
                This niche tourism sector offers unique experiences through
                visits to ancient landmarks, historical sites, and museums,
                which foster strong emotional connections to the past.
              </p>
              <p className="text-gray-700 leading-loose mb-4">
                Guided tours are often led by knowledgeable experts, providing
                visitors with a deeper understanding of the historical
                significance and cultural context of each site, enhancing both
                educational and personal experiences.
              </p>
            </div>
            <div
              data-aos="flip-up"
              data-aos-easing="linear"
              data-aos-duration="1500"
              className="flex flex-col justify-center md:h-2/6 h-4/6 pt-10 items-center bg-white bg-opacity-75 p-5 rounded-lg shadow-lg"
            >
              <Image
                src="/four.jpg"
                width={1000}
                height={600}
                className="w-full h-full object-cover rounded-lg"
                alt="Historical Site Image"
              />
            </div>
          </div>
          <div className="bg-white  w-full text-center">
            <h1
              data-aos="flip-up"
              data-aos-easing="linear"
              data-aos-duration="1500"
              className="md:text-4xl text-2xl text-red-600"
            >
              Market Opportunities for Historical Heritage Tourism
            </h1>

            <div className="grid grid-cols-1 md:mx-24 bg-white md:h-3/6 h-6/6 lg:grid-cols-3 pt-24 md:grid-cols-1 gap-4 p-5">
              {/* Target Market */}
              <div
                data-aos="flip-up"
                data-aos-easing="linear"
                data-aos-duration="1500"
                className="flex flex-col items-center p-5 md:h-80 h-96 bg-gray-100 rounded-lg shadow-lg"
              >
                <h3 className="text-xl mt-4 font-bold mb-6">Target Market</h3>
                <p className="text-red-600 mt-2 text-center mb-6">
                  <span className="font-semibold">
                    Historical Heritage Tourists:
                  </span>{" "}
                  Primarily, individuals who are fascinated by the cultural and
                  historical legacy of various regions. This includes history
                  enthusiasts, academics, and tourists seeking meaningful
                  connections to the past.
                </p>
                <p className="text-red-600 mt-2 text-center mb-6">
                  Many within this target group are drawn to authentic and
                  educational travel experiences, where they can explore
                  preserved architecture, participate in reenactments, and learn
                  about the lives of people in different eras.
                </p>
              </div>

              {/* Trend */}
              <div
                data-aos="flip-up"
                data-aos-easing="linear"
                data-aos-duration="1500"
                className="flex flex-col items-center p-5 md:h-80 h-96 bg-gray-100 rounded-lg shadow-lg"
              >
                <h3 className="text-xl mt-4 font-bold mb-6">Trend</h3>
                <p className="text-red-600 mt-2 text-center mb-6">
                  <span className="font-semibold">
                    Growing Interest in Cultural Preservation:
                  </span>{" "}
                  There is an increasing global awareness of the importance of
                  preserving cultural heritage sites, making historical tourism
                  popular among travelers of all ages.
                </p>
                <p className="text-red-600 mt-2 text-center mb-6">
                  This trend is supported by initiatives that aim to protect
                  historical landmarks and traditions. Many tourists now seek
                  destinations that offer not only relaxation but also
                  enrichment through immersion in the history and legacy of the
                  region.
                </p>
              </div>

              {/* Demand */}
              <div
                data-aos="flip-up"
                data-aos-easing="linear"
                data-aos-duration="1500"
                className="flex flex-col items-center p-5 md:h-80 h-96 bg-gray-100 rounded-lg shadow-lg"
              >
                <h3 className="text-xl mt-4 font-bold mb-6">Demand</h3>
                <p className="text-red-600 mt-2 text-center mb-6">
                  <span className="font-semibold">
                    Enhanced Interest in Heritage Preservation:
                  </span>{" "}
                  The demand for heritage tourism is on the rise as more people
                  seek to understand and celebrate cultural and historical
                  identities.
                </p>
                <p className="text-red-600 mt-2 text-center mb-6">
                  This demand is fueled by the educational appeal and the unique
                  opportunity to experience living history through preserved
                  sites, museums, and cultural practices. Local communities are
                  also increasingly recognizing the value in promoting their
                  historical assets to support tourism.
                </p>
              </div>
            </div>
          </div>
          <div id="forum" className="grid grid-cols-1 pb-48 bg-white md:h-4/6 h-6/6 pt-24 md:grid-cols-2 gap-4 p-5">
            {/* Column for existing image */}
            <div
              data-aos="flip-up"
              data-aos-easing="linear"
              data-aos-duration="1500"
              className="flex flex-col justify-center md:h-2/6 h-6/6 pt-10 items-center bg-white bg-opacity-75 p-5 rounded-lg shadow-lg"
            >
              <Image
                src="/seven.jpg"
                width={1000}
                height={600}
                className="w-full h-full object-cover rounded-lg"
                alt="Historical Heritage Tourism"
              />
            </div>

            {/* Column for references */}
            <div
              data-aos="flip-down"
              data-aos-easing="linear"
              data-aos-duration="1500"
              className="flex flex-col md:h-2/6 h-6/6 justify-center items-center pb-20 bg-[#cardfa] bg-opacity-75 px-8 rounded-lg shadow-lg"
            >
              <h3 className="text-2xl  text-red-500 mb-10 font-bold">
                References
              </h3>
              <ul className="text-gray-700 list-none pl-5 leading-loose mb-4">
                <li className="mb-4">
                  Johnson, R. (2023, May 14). The Rise of Historical Heritage
                  Tourism: Trends and Market Insights. Heritage & Tourism
                  Magazine.
                  <a
                    href="https://heritageandtourism.com/historical-heritage-tourism-trends"
                    className="text-blue-500 hover:underline"
                  >
                    https://heritageandtourism.com/historical-heritage-tourism-trends
                  </a>
                </li>
                <li className="mb-4">
                  Smith, A. (2023, July 8). Exploring Dark Tourism:
                  Understanding Visitor Motivation. Global Tourism Journal.
                  <a
                    href="https://globaltourismjournal.com/exploring-dark-tourism"
                    className="text-blue-500 hover:underline"
                  >
                    https://globaltourismjournal.com/exploring-dark-tourism
                  </a>
                </li>
                <li className="mb-4">
                  Lee, M. (2022, December 30). Sustainable Practices in
                  Ecotourism. EcoTravel Insights.
                  <a
                    href="https://ecotravelinsights.org/sustainable-ecotourism"
                    className="text-blue-500 hover:underline"
                  >
                    https://ecotravelinsights.org/sustainable-ecotourism
                  </a>
                </li>
                <li className="mb-4">
                  Thompson, B. (2024, March 2). The Appeal of Historical Sites
                  in Modern Tourism. World Heritage Review.
                  <a
                    href="https://worldheritagereview.org/modern-tourism-appeal"
                    className="text-blue-500 hover:underline"
                  >
                    https://worldheritagereview.org/modern-tourism-appeal
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
