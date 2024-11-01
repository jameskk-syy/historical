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
        {/* <BackgroundSlider
          images={["/one.jpg", "/two.jpg", "/three.jpg"]}
          duration={10}
          transition={2}
          className="h-96"
        /> */}
        {/* <div className="absolute inset-0 bg-black opacity-60 z-10"></div> */}
        <div className="relative h-screen z-20">
          <FarmerNav />
          <div
            className="flex flex-col h-full justify-center md:px-0 px-4 items-center"
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            <h2 className="text-red-500 mb-6 text-2xl lg:text-5xl">
              Special Interest Tourism
            </h2>
            <h2 className="text-black mb-6 lg:text-4xl text-xl ">
              Historical Heritage Tourism
            </h2>
            <p className="text-black md:w-7/12 w-full  lg:text-lg">
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
          <div className="md:pt-48 pb-10 bg-white mb-32 mt-8 text-center w-full h-96 flex md:justify-center md:items-center">
            <div className="w-full md:w-3/4 pb-20">
              <h3
                data-aos="flip-up"
                data-aos-easing="linear"
                data-aos-duration="1500"
                className="text-red-600 text-4xl mb-8"
              >
                Special Interest Tourism (SIT)
              </h3>
              <p
                data-aos="flip-down"
                data-aos-easing="linear"
                data-aos-duration="1500"
                className="leading-loose space-x-4 space-y-5"
              >
                Special Interest Tourism (SIT) represents a specialized segment
                of the travel industry that caters to individuals seeking
                experiences deeply aligned with their personal interests,
                passions, or professional pursuits. Unlike traditional tourism,
                which often revolves around mainstream attractions, SIT focuses
                on delivering highly customized travel experiences that resonate
                on a personal level. This niche encompasses a wide variety of
                categories, including eco-tourism, which prioritizes
                environmental awareness and conservation; cultural heritage
                tourism, which immerses travelers in the history, art, and
                traditions of local communities; adventure tourism, where the
                emphasis is on thrill-seeking activities in nature; culinary
                tourism, inviting travelers to explore regional gastronomy; and
                wellness tourism, aimed at enhancing mental and physical
                well-being. SIT is driven by an increasing desire for
                authenticity and meaningful engagement, reflecting a shift in
                global tourism toward experiences that promote personal growth,
                learning, and a deeper connection to place and culture. As
                travelers seek to contribute positively to the destinations they
                visit, SIT aligns with principles of sustainable and responsible
                tourism, encouraging practices that protect natural and cultural
                resources. This approach not only allows travelers to satisfy
                their unique interests but also benefits local communities
                economically and socially by promoting respect for local
                heritage and supporting small businesses. Additionally, SIT
                often involves smaller, more intimate group sizes or
                individualized experiences, which enhances its appeal in an era
                where travelers prioritize health and safety, particularly in a
                post-pandemic world. For instance, eco-tourism and agritourism
                (which focuses on rural life and farming practices) have seen
                notable growth as travelers become more environmentally
                conscious and eager to support regenerative practices. The
                impact of SIT extends beyond the individual; it actively
                contributes to a sustainable tourism model that balances
                economic growth with social and environmental responsibility
                (Smith, 2022).
              </p>
            </div>
          </div>

          <div className="bg-white w-full mb-32 text-center">
            <h1
              data-aos="flip-up"
              data-aos-easing="linear"
              data-aos-duration="1500"
              className="text-4xl text-red-600"
            >
              Examples of Special Interest Tourism (SIT)
            </h1>
            <div className="grid grid-cols-1 md:mx-24 bg-white md:h-3/6 h-6/6 lg:grid-cols-3 pt-24 md:grid-cols-2 gap-4 p-5">
              <div
                data-aos="flip-up"
                data-aos-easing="linear"
                data-aos-duration="1500"
                className="flex flex-col items-center p-5 h-auto bg-gray-100 rounded-lg shadow-lg"
              >
                <h3 className="text-xl text-red-500 mt-4 font-bold">
                  Historical Heritage Tourism
                </h3>
                <p className="text-black leading-loose  mt-2 text-center">
                  Historical heritage tourism allows travelers to connect with
                  ancient cultures, architecture, and significant historical
                  events by exploring landmarks, museums, and archaeological
                  sites. This form of tourism often emphasizes preserving
                  cultural heritage, showcasing sites like the Pyramids of
                  Egypt, the Great Wall of China, or the Acropolis in Greece.
                  Heritage tourism educates visitors about historical
                  advancements in areas like art, engineering, and governance.
                  Moreover, it stimulates local economies by encouraging job
                  creation and funding preservation efforts, as seen in the
                  UNESCO World Heritage designation program, which aims to
                  protect and promote sites of outstanding cultural and
                  historical significance (Jones & Smith, 2021).
                </p>
              </div>

              <div
                data-aos="flip-down"
                data-aos-easing="linear"
                data-aos-duration="1500"
                className="flex flex-col items-center p-5 h-auto bg-gray-100 rounded-lg shadow-lg"
              >
                <h3 className="text-xl text-red-500 mt-4 font-bold">
                  Dark Tourism
                </h3>
                <p className="text-black leading-loose  mt-2 text-center">
                  Dark tourism involves visiting locations tied to historical
                  trauma or death, offering visitors a chance to reflect on
                  human suffering, resilience, and recovery. Key dark tourism
                  sites include concentration camps like Auschwitz, battlefields
                  such as Normandy in France, and memorials like the Hiroshima
                  Peace Memorial. By experiencing these places firsthand,
                  travelers can gain a more profound understanding of historical
                  tragedies and their ongoing effects on society. Although it
                  can be emotionally challenging, dark tourism often promotes
                  empathy, remembrance, and a commitment to avoiding future
                  atrocities. Additionally, it supports local communities by
                  bringing awareness and funding to places that might otherwise
                  be forgotten (Roberts, 2020).
                </p>
              </div>

              <div
                data-aos="flip-up"
                data-aos-easing="linear"
                data-aos-duration="1500"
                className="flex flex-col items-center p-5 h-auto bg-gray-100 rounded-lg shadow-lg"
              >
                <h3 className="text-xl text-red-500 mt-4 font-bold">
                  Ecotourism
                </h3>
                <p className="text-black leading-loose  mt-2 text-center">
                  Ecotourism promotes sustainable travel focused on experiencing
                  and preserving natural environments. This form of tourism
                  often takes travelers to pristine ecosystems, where they
                  engage in activities like wildlife watching, nature
                  photography, and conservation volunteering. Popular ecotourism
                  destinations, such as the Galápagos Islands or Costa Rica’s
                  Monteverde Cloud Forest, highlight biodiversity and
                  conservation efforts. Ecotourism aims to minimize the
                  environmental impact by educating tourists on ecological
                  preservation and often works directly with local communities
                  to ensure that tourism benefits them economically. As such, it
                  plays a vital role in the global movement toward
                  environmentally responsible tourism (Green & Turner, 2022).
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
              <div
                data-aos="flip-up"
                data-aos-easing="linear"
                data-aos-duration="1500"
                className="flex flex-col items-center p-5 h-auto bg-gray-100 rounded-lg shadow-lg"
              >
                <h3 className="text-xl text-red-500 mt-4 font-bold mb-6">
                  Historical Heritage Tourism
                </h3>
                <p className="text-black mt-2 text-center mb-6">
                  <span className="font-semibold">Target Market:</span> History
                  buffs, cultural enthusiasts, and educational travelers,
                  especially those from regions with strong cultural tourism
                  infrastructure, like Europe and Asia.
                </p>
                <p className="text-black mt-2 text-center mb-6">
                  <span className="font-semibold">Trend:</span> Increasing
                  interest in preserving and experiencing historical sites, with
                  over 1.4 billion international tourist arrivals in 2019, and a
                  significant portion visiting UNESCO World Heritage sites
                  (UNWTO, 2020).
                </p>
                <p className="text-black mt-2 text-center mb-6">
                  <span className="font-semibold">Demand:</span> A 23% increase
                  in cultural heritage travel interest since 2016, with global
                  spending on heritage tourism forecasted to reach $9.2 billion
                  by 2025 (Smith & Lopez, 2022). Many visitors are motivated by
                  a desire to connect with and support local historical
                  narratives.
                </p>
              </div>

              <div
                data-aos="flip-down"
                data-aos-easing="linear"
                data-aos-duration="1500"
                className="flex flex-col items-center p-5 h-auto bg-gray-100 rounded-lg shadow-lg"
              >
                <h3 className="text-xl text-red-500 mt-4 font-bold mb-6">
                  Dark Tourism
                </h3>
                <p className="text-black mt-2 text-center mb-6">
                  <span className="font-semibold">Target Market:</span>{" "}
                  Travelers interested in history, human resilience, and
                  reflective experiences, particularly Millennials and Gen Z,
                  who value meaningful travel.
                </p>
                <p className="text-black mt-2 text-center mb-6">
                  <span className="font-semibold">Trend:</span> Visitors are
                  increasingly drawn to dark tourism sites, with an estimated
                  5.5 million annual visitors to Auschwitz and 2.3 million
                  visitors to Hiroshima Peace Memorial (World Dark Tourism
                  Association, 2021).
                </p>
                <p className="text-black mt-2 text-center mb-6">
                  <span className="font-semibold">Demand:</span> Studies report
                  a 20% year-over-year growth in demand for dark tourism
                  experiences as travelers seek out experiences that acknowledge
                  historical tragedies and foster empathy (Green, 2023). This
                  growing interest reflects a desire for deeper,
                  thought-provoking travel.
                </p>
              </div>

              <div
                data-aos="flip-up"
                data-aos-easing="linear"
                data-aos-duration="1500"
                className="flex flex-col items-center p-5 h-auto bg-gray-100 rounded-lg shadow-lg"
              >
                <h3 className="text-xl text-red-500 mt-4 font-bold mb-6">
                  Ecotourism
                </h3>
                <p className="text-black mt-2 text-center mb-6">
                  <span className="font-semibold">Target Market:</span> Nature
                  enthusiasts, eco-conscious travelers, and families. This group
                  includes over 50 million travelers who consider environmental
                  sustainability a priority when making travel decisions.
                </p>
                <p className="text-black mt-2 text-center mb-6">
                  <span className="font-semibold">Trend:</span> The ecotourism
                  industry has seen consistent growth, with an estimated 10%
                  annual increase in demand. For example, Costa Rica, a popular
                  ecotourism destination, hosted over 3 million eco-tourists in
                  2019 (World Tourism Organization, 2021).
                </p>
                <p className="text-black mt-2 text-center mb-6">
                  <span className="font-semibold">Demand:</span> Growing
                  awareness of environmental issues, with market projections
                  indicating the global ecotourism sector could reach $340
                  billion by 2027. This reflects an increased demand for
                  eco-friendly accommodations, carbon-offset programs, and
                  sustainable tour practices (Turner, 2023).
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

            <div className="grid grid-cols-1 md:mx-24 bg-white lg:grid-cols-3 pt-24 md:grid-cols-2 gap-4 p-5">
              {/* Historical Heritage Tourism */}
              <div
                data-aos="flip-up"
                data-aos-easing="linear"
                data-aos-duration="1500"
                className="flex flex-col items-center p-5 h-auto bg-gray-100 rounded-lg shadow-lg"
              >
                <h3 className="text-xl text-red-500 mt-4 font-bold mb-6">
                  Historical Heritage Tourism
                </h3>
                <p className="text-black mt-2 text-center mb-6">
                  Focusing on historical landmarks and ancient cultures, this
                  tourism type appeals to travelers seeking cultural enrichment.
                  Successful examples include UNESCO World Heritage site tours,
                  which draw over 30 million tourists annually worldwide
                  (UNESCO, 2021). Companies like *Context Travel* and
                  *GetYourGuide* curate tours that offer in-depth historical
                  narratives, connecting visitors with experts who provide
                  authentic historical insights (Denzon, 2023).
                </p>
              </div>

              {/* Dark Tourism */}
              <div
                data-aos="flip-down"
                data-aos-easing="linear"
                data-aos-duration="1500"
                className="flex flex-col items-center p-5 h-auto bg-gray-100 rounded-lg shadow-lg"
              >
                <h3 className="text-xl text-red-500 mt-4 font-bold mb-6">
                  Dark Tourism
                </h3>
                <p className="text-black mt-2 text-center mb-6">
                  Dark tourism is increasingly popular, attracting travelers
                  interested in historical events and reflective experiences.
                  Iconic sites, such as Auschwitz and Chernobyl, host over 2
                  million visitors annually (World Dark Tourism Association,
                  2021). Companies like *Dark Rome Tours* and *Intrepid Travel*
                  provide guided experiences that explore both the historical
                  significance and emotional impact of these sites, fostering
                  awareness and empathy (Foley & Lennon, 1996).
                </p>
              </div>

              {/* Ecotourism */}
              <div
                data-aos="flip-up"
                data-aos-easing="linear"
                data-aos-duration="1500"
                className="flex flex-col items-center p-5 h-auto bg-gray-100 rounded-lg shadow-lg"
              >
                <h3 className="text-xl text-red-500 mt-4 font-bold mb-6">
                  Ecotourism
                </h3>
                <p className="text-black mt-2 text-center mb-6">
                  Aimed at preserving natural habitats, ecotourism attracts
                  millions of travelers annually. Companies like *G Adventures*
                  and *EcoCamp Patagonia* are successful due to their commitment
                  to sustainable travel, offering eco-friendly tours that
                  minimize environmental impact and support conservation
                  efforts. Costa Rica’s eco-friendly resorts receive around 3
                  million visitors per year, showcasing the strong demand for
                  responsible tourism options (The International Ecotourism
                  Society, 2015).
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

            <div className="grid grid-cols-1 md:mx-24 bg-white md:h-3/6 h-6/6 lg:grid-cols-3 pt-24 md:grid-cols-2 gap-4 p-5">
              {/* Historical Heritage Tourism */}
              <div
                data-aos="flip-up"
                data-aos-easing="linear"
                data-aos-duration="1500"
                className="flex flex-col items-center p-5 md:h-96 h-96 bg-gray-100 rounded-lg shadow-lg"
              >
                <h3 className="text-xl text-red-500 mt-4 font-bold mb-6">
                  Historical Heritage Tourism
                </h3>
                <p className="text-black mt-2 text-center mb-6">
                  **Niche Targeting:** Focuses on history enthusiasts who value
                  cultural heritage, attracting a loyal customer base.
                </p>
                <p className="text-black mt-2 text-center mb-6">
                  **Authentic Experiences:** Offers an authentic dive into
                  ancient landmarks and historical sites, creating strong
                  emotional connections.
                </p>
                <p className="text-black mt-2 text-center mb-6">
                  **Knowledgeable Guides:** Guided tours are often led by
                  history experts, enhancing the educational value of the
                  experience.
                </p>
              </div>

              {/* Dark Tourism */}
              <div
                data-aos="flip-down"
                data-aos-easing="linear"
                data-aos-duration="1500"
                className="flex flex-col items-center p-5 md:h-96 h-96 bg-gray-100 rounded-lg shadow-lg"
              >
                <h3 className="text-xl text-red-500 mt-4 font-bold mb-6">
                  Dark Tourism
                </h3>
                <p className="text-black mt-2 text-center mb-6">
                  **Reflective Experiences:** Provides visitors with
                  thought-provoking experiences that acknowledge historical
                  tragedies.
                </p>
                <p className="text-black mt-2 text-center mb-6">
                  **Targeted Audience:** Appeals to travelers interested in
                  resilience and human history, creating a unique customer
                  niche.
                </p>
                <p className="text-black mt-2 text-center mb-6">
                  **Preservation Support:** By raising awareness of tragic
                  events, it encourages preservation and memorial efforts.
                </p>
              </div>

              {/* Ecotourism */}
              <div
                data-aos="flip-up"
                data-aos-easing="linear"
                data-aos-duration="1500"
                className="flex flex-col items-center p-5 md:h-96 h-96 bg-gray-100 rounded-lg shadow-lg"
              >
                <h3 className="text-xl text-red-500 mt-4 font-bold mb-6">
                  Ecotourism
                </h3>
                <p className="text-black mt-2 text-center mb-6">
                  **Sustainability Focus:** Appeals to eco-conscious travelers
                  by promoting environmental awareness and preservation.
                </p>
                <p className="text-black mt-2 text-center mb-6">
                  **Local Impact:** Supports local economies and helps in the
                  conservation of ecosystems, providing economic benefits to
                  communities.
                </p>
                <p className="text-black mt-2 text-center mb-6">
                  **Educative Guides:** Led by environmental experts who educate
                  tourists on ecological conservation and respect for nature.
                </p>
              </div>
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
                audience (Denzon, 2023).
              </p>
              <p className="text-gray-700 leading-loose mb-4">
                This niche tourism sector offers unique experiences through
                visits to ancient landmarks, historical sites, and museums,
                which foster strong emotional connections to the past (Smith &
                Jones, 2021).
              </p>
              <p className="text-gray-700 leading-loose mb-4">
                Guided tours are often led by knowledgeable experts, providing
                visitors with a deeper understanding of the historical
                significance and cultural context of each site, enhancing both
                educational and personal experiences (Johnson, 2022).
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

          <div className="bg-white m  w-full text-center">
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
                className="flex flex-col items-center p-5 h-auto bg-gray-100 rounded-lg shadow-lg"
              >
                <h3 className="text-xl text-red-500 mt-4 font-bold mb-6">
                  Target Market
                </h3>
                <p className="text-black mt-2 text-center mb-6">
                  <span className="font-semibold">
                    Historical Heritage Tourists:
                  </span>{" "}
                  Primarily, individuals who are fascinated by the cultural and
                  historical legacy of various regions. This includes history
                  enthusiasts, academics, and tourists seeking meaningful
                  connections to the past (Smith & Johnson, 2022).
                </p>
                <p className="text-black mt-2 text-center mb-6">
                  Many within this target group are drawn to authentic and
                  educational travel experiences, where they can explore
                  preserved architecture, participate in reenactments, and learn
                  about the lives of people in different eras (Denzon, 2023).
                </p>
              </div>

              {/* Trend */}
              <div
                data-aos="flip-up"
                data-aos-easing="linear"
                data-aos-duration="1500"
                className="flex flex-col items-center p-5 h-auto bg-gray-100 rounded-lg shadow-lg"
              >
                <h3 className="text-xl text-red-500 mt-4 font-bold mb-6">
                  Trend
                </h3>
                <p className="text-black mt-2 text-center mb-6">
                  <span className="font-semibold">
                    Growing Interest in Cultural Preservation:
                  </span>{" "}
                  There is an increasing global awareness of the importance of
                  preserving cultural heritage sites, making historical tourism
                  popular among travelers of all ages (Thompson, 2021).
                </p>
                <p className="text-black mt-2 text-center mb-6">
                  This trend is supported by initiatives that aim to protect
                  historical landmarks and traditions. Many tourists now seek
                  destinations that offer not only relaxation but also
                  enrichment through immersion in the history and legacy of the
                  region (Baker, 2022).
                </p>
              </div>

              {/* Demand */}
              <div
                data-aos="flip-up"
                data-aos-easing="linear"
                data-aos-duration="1500"
                className="flex flex-col items-center p-5 h-auto bg-gray-100 rounded-lg shadow-lg"
              >
                <h3 className="text-xl text-red-500 mt-4 font-bold mb-6">
                  Demand
                </h3>
                <p className="text-black mt-2 text-center mb-6">
                  <span className="font-semibold">
                    Enhanced Interest in Heritage Preservation:
                  </span>{" "}
                  The demand for heritage tourism is on the rise as more people
                  seek to understand and celebrate cultural and historical
                  identities (Jones & Lee, 2023).
                </p>
                <p className="text-black mt-2 text-center mb-6">
                  This demand is fueled by the educational appeal and the unique
                  opportunity to experience living history through preserved
                  sites, museums, and cultural practices. Local communities are
                  also increasingly recognizing the value in promoting their
                  historical assets to support tourism (Denzon, 2023).
                </p>
              </div>
            </div>
          </div>
          <div
            id="forum"
            className="grid grid-cols-1 pb-48 bg-white md:h-4/6 h-6/6 pt-24 md:grid-cols-2 gap-4 p-5"
          >
            {/* Column for existing image */}
            <div
              data-aos="flip-up"
              data-aos-easing="linear"
              data-aos-duration="1500"
              className="flex flex-col justify-center md:h-3/6 h-6/6 pt-10 items-center bg-white bg-opacity-75 p-5 rounded-lg shadow-lg"
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
              className="flex flex-col md:h-4/6 h-6/6 justify-center items-center pt-10 pb-1 bg-[#cardfa] bg-opacity-75 px-8 rounded-lg shadow-lg"
            >
              <h3 className="text-2xl text-red-500 mb-10 font-bold">
                References
              </h3>
              <ul className="text-gray-700 list-none pl-5 leading-loose mb-4">
                <li className="mb-4">
                  Baker, J., Green, H., & Turner, L. (2023). Exploring Special
                  Interest Tourism: Opportunities and Trends. Journal of Tourism
                  Research.
                </li>
                <li className="mb-4">
                  Denzon, A. (2023). Historical Heritage Tourism. Retrieved from
                  <a
                    href="https://tourismteacher.com/special-interest-tourism/#google_vignette"
                    className="text-blue-500 hover:underline"
                  >
                    https://tourismteacher.com/special-interest-tourism/#google_vignette
                  </a>
                </li>
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
                  Foley, M., & Lennon, J. (1996). Dark Tourism: A Conceptual
                  Framework. International Journal of Culture, Tourism and
                  Hospitality Research.
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
                  The International Ecotourism Society. (2015). Ecotourism:
                  Principles, Practices, and Policies.
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
                  Hjalager, A.-M. (2002). A Notice of Culinary Tourism: A New
                  Destination for Tourists. The Journal of Tourism Studies,
                  13(1), 29-38.
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
