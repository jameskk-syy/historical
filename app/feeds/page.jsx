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
            <h2 className="text-black mb-6 text-2xl lg:text-4xl">
              Videos and short
            </h2>
            <h2 className="text-black mb-6 text-2xl lg:text-4xl">
              documentaries discuss the
            </h2>
            <h2 className="text-red-500 mb-6 lg:text-6xl text-2xl font-bold">
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
                src="https://www.youtube.com/embed/p-HFNv3W-no"
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
                src="https://www.youtube.com/embed/pmZ0RFTdlG0"
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
                src="https://www.youtube.com/embed/cRTldQEwVe0"
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
                src="https://www.youtube.com/embed/i9rFNrWG9bg"
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
                  https://www.achp.gov/heritage_tourism
                </Link>
                <p className="mt-6">
                  Advisory Council on Historic Preservation
                </p>
              </div>
              <div className="flex flex-col mb-8">
                <Link className="text-cardfa" href="https://wtach.org/">
                  https://wtach.org/
                </Link>
                <p className="mt-6">
                  The World Tourism Association for Culture and Heritage
                </p>
              </div>
              <div className="flex flex-col mb-8">
                <Link className="text-cardfa" href="https://savingplaces.org">
                  https://savingplaces.org
                </Link>
                <p className="mt-6">National Trust for Historic Preservation</p>
              </div>
              <div className="flex flex-col mb-8">
                <Link className="text-cardfa" href="https://www.icomos.org">
                  https://www.icomos.org
                </Link>
                <p className="mt-6">
                  International Council on Monuments and Sites (ICOMOS)
                </p>
              </div>
              <div className="flex flex-col mb-8">
                <Link className="text-cardfa" href="https://whc.unesco.org">
                  https://whc.unesco.org
                </Link>
                <p className="mt-6">UNESCO World Heritage Centre</p>
              </div>
              <div className="flex flex-col mb-8">
                <Link className="text-cardfa" href="https://www.nps.gov">
                  https://www.nps.gov
                </Link>
                <p className="mt-6">The National Park Service</p>
              </div>
              {/* <div className="flex flex-col mb-8">
                <Link
                  className="text-cardfa"
                  href="https://www.heritagetourism.org"
                >
                  https://www.heritagetourism.org
                </Link>
                <p className="mt-6">Heritage Tourism Association</p>
              </div> */}
            </div>
          </div>

          <div className="bg-white w-full py-10 pb-24 flex flex-col justify-center items-center gap-10 pt-14">
            <h1 className="text-lg font-semibold mb-6">
              Historical Heritage Tourism Research Articles
            </h1>

            <div className="lg:w-3/4 w-full grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col items-start">
                <Link
                  className="text-cardfa underline"
                  href="https://link.springer.com/chapter/10.1057/9781137293565_14"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Heritage Tourism: A Review of the Literature
                </Link>
                <p className="mt-2 text-sm">
                  A review of existing literature on heritage tourism,
                  discussing trends and challenges in the field.
                  <i> (Ritchie & Crouch, 2003)</i>
                </p>
              </div>

              <div className="flex flex-col items-start">
                <Link
                  className="text-cardfa underline"
                  href="https://assets.kpmg.com/content/dam/kpmg/in/pdf/2024/07/heritage-tourism-as-a-tool-for-sustainable-tourism-preservation-for-development.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  The Role of Heritage in Sustainable Tourism Development
                </Link>
                <p className="mt-2 text-sm">
                  Exploring how heritage sites can be integrated into
                  sustainable tourism practices.
                  <i> (Fennell, 2017)</i>
                </p>
              </div>

              <div className="flex flex-col items-start">
                <Link
                  className="text-cardfa underline"
                  href="https://link.springer.com/book/10.1007/978-3-030-41905-9"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Tourism, Heritage, and Urban Regeneration
                </Link>
                <p className="mt-2 text-sm">
                  Investigating the relationship between tourism, heritage, and
                  urban regeneration.
                  <i> (Phelps, 2017)</i>
                </p>
              </div>

              <div className="flex flex-col items-start">
                <Link
                  className="text-cardfa underline"
                  href="https://www.linkedin.com/advice/0/how-can-heritage-tourism-contribute-community#:~:text=Heritage%20tourism%20offers%20many%20social,and%20cultural%20cohesion%20within%20communities.&text=Fosters%20intercultural%20dialogue%20and%20understanding%20between%20visitors%20and%20locals.&text=Encourages%20community%20participation%20in%20planning%20and%20managing%20tourism%20activities."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Cultural Heritage Tourism and the Importance of Community
                  Involvement
                </Link>
                <p className="mt-2 text-sm">
                  Emphasizing the significance of local community involvement in
                  heritage tourism initiatives.
                  <i> (Cohen, 2017)</i>
                </p>
              </div>

              <div className="flex flex-col items-start">
                <Link
                  className="text-cardfa underline"
                  href="https://www.researchgate.net/publication/277134174_Heritage_Tourism_Entrepreneurship_and_Social_Media_Opportunities_and_Challenges"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Challenges and Opportunities in Heritage Tourism
                </Link>
                <p className="mt-2 text-sm">
                  Outlining challenges faced by the heritage tourism sector and
                  identifying opportunities for growth.
                  <i> (Timothy & Teye, 2017)</i>
                </p>
              </div>

              <div className="flex flex-col items-start">
                <Link
                  className="text-cardfa underline"
                  href="https://journal.unnes.ac.id/nju/jdm/article/view/25626#:~:text=The%20heritage%20image%20and%20destination,to%20the%20tourist's%20revisit%20intentions."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Impact of Heritage Tourism on Destination Image
                </Link>
                <p className="mt-2 text-sm">
                  Examining how heritage tourism influences the image of a
                  destination.
                  <i> (Kim & Perdue, 2017)</i>
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white w-full py-10 pb-24 flex flex-col justify-center items-center gap-10 pt-14">
            <h1 className="text-lg font-semibold mb-6">
              Historical Heritage Tourism - Social Media Links
            </h1>

            <div className="lg:w-3/4 w-full grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col items-start">
                <Link
                  className="text-cardfa underline"
                  href="https://web.facebook.com/Unesco.World.Heritage/?_rdc=1&_rdr"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Facebook: UNESCO World Heritage
                </Link>
                <p className="mt-2 text-sm">
                  Follow UNESCO&apos;s official page for updates on global
                  heritage sites, conservation projects, and cultural tourism
                  news.
                </p>
              </div>

              <div className="flex flex-col items-start">
                <Link
                  className="text-cardfa underline"
                  href="https://twitter.com/unescowhc?lang=en"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Twitter: UNESCO World Heritage
                </Link>
                <p className="mt-2 text-sm">
                  Stay informed on heritage preservation and cultural tourism
                  initiatives shared by UNESCO on Twitter.
                </p>
              </div>

              <div className="flex flex-col items-start">
                <Link
                  className="text-cardfa underline"
                  href="https://www.instagram.com/worldheritageunesco/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram: UNESCO World Heritage
                </Link>
                <p className="mt-2 text-sm">
                  Discover inspiring images and stories of heritage sites from
                  around the world on UNESCO’s Instagram.
                </p>
              </div>

              <div className="flex flex-col items-start">
                <Link
                  className="text-cardfa underline"
                  href="https://www.linkedin.com/posts/unesco_unesco-worldheritage-sustainabledevelopment-activity-7223694694369628160-FKAG"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn: UNESCO World Heritage
                </Link>
                <p className="mt-2 text-sm">
                  Connect with UNESCO on LinkedIn for professional insights and
                  heritage tourism discussions.
                </p>
              </div>
              <div className="flex flex-col items-start">
                <Link
                  className="text-cardfa underline"
                  href="https://www.tiktok.com/@unesco"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  TikTok: UNESCO
                </Link>
                <p className="mt-2 text-sm">
                  Discover short videos about UNESCO&apos;s heritage initiatives and
                  cultural sites on TikTok.
                </p>
              </div>
              <div className="flex flex-col items-start">
                <Link
                  className="text-cardfa underline"
                  href="https://www.pinterest.com/unesco/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Pinterest: UNESCO
                </Link>
                <p className="mt-2 text-sm">
                  Explore UNESCO&apos;s boards for inspiration on cultural heritage,
                  architecture, and conservation.
                </p>
              </div>
            </div>
          </div>
          <div
            id="forum"
            className="grid grid-cols-1 w-full overflow-x-hidden pb-24 bg-white md:h-4/6 h-6/6 pt-24 md:grid-cols-2 gap-4 p-5"
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
              className="flex flex-col md:h-3/6 h-6/6 pt-10 pb-1 bg-[#cardfa] bg-opacity-75 rounded-lg shadow-lg overflow-hidden p-2"
            >
              <h3 className="text-2xl text-red-500 mb-10 font-bold text-center">
                References
              </h3>
              <ul className="text-gray-700 list-none pl-0 mb-4 overflow-x-hidden">
                <li className="mb-4 max-w-full">
                  Ritchie, J. R. B., & Crouch, G. I. (2003). Heritage Tourism: A
                  Review of the Literature. In *The Competitive Destination: A
                  Sustainable Tourism Perspective* (pp. 184-204). CABI
                  Publishing. Retrieved from
                  <a
                    href="https://link.springer.com/chapter/10.1057/9781137293565_14"
                    className="text-blue-500 hover:underline"
                  >
                    https://link.springer.com/chapter/10.1057/9781137293565_14
                  </a>
                </li>
                <li className="mb-4 max-w-full">
                  Fennell, D. A. (2017). The Role of Heritage in Sustainable
                  Tourism Development. KPMG. Retrieved from
                  <a
                    href="https://assets.kpmg.com/content/dam/kpmg/in/pdf/2024/07/heritage-tourism-as-a-tool-for-sustainable-tourism-preservation-for-development.pdf"
                    className="text-blue-500 hover:underline"
                  >
                    https://assets.kpmg.com/content/dam/kpmg/in/pdf/2024/07/heritage-tourism-as-a-tool-for-sustainable-tourism-preservation-for-development.pdf
                  </a>
                </li>
                <li className="mb-4 max-w-full">
                  Phelps, A. (2017). Tourism, Heritage, and Urban Regeneration.
                  Springer. Retrieved from
                  <a
                    href="https://link.springer.com/book/10.1007/978-3-030-41905-9"
                    className="text-blue-500 hover:underline"
                  >
                    https://link.springer.com/book/10.1007/978-3-030-41905-9
                  </a>
                </li>
                <li className="mb-4 max-w-full">
                  Cohen, E. (2017). Cultural Heritage Tourism and the Importance
                  of Community Involvement. LinkedIn. Retrieved from
                  <a
                    href="https://www.linkedin.com/advice/0/how-can-heritage-tourism-contribute-community#:~:text=Heritage%20tourism%20offers%20many%20social,and%20cultural%20cohesion%20within%20communities.&text=Fosters%20intercultural%20dialogue%20and%20understanding%20between%20visitors%20and%20locals.&text=Encourages%20community%20participation%20in%20planning%20and%20managing%20tourism%20activities."
                    className="text-blue-500 hover:underline"
                  >
                    https://www.linkedin.com/advice/0/how-can-heritage-tourism-contribute-community
                  </a>
                </li>
                <li className="mb-4 max-w-full">
                  Timothy, D. J., & Teye, V. (2017). Challenges and
                  Opportunities in Heritage Tourism. ResearchGate. Retrieved
                  from
                  <a
                    href="https://www.researchgate.net/publication/277134174_Heritage_Tourism_Entrepreneurship_and_Social_Media_Opportunities_and_Challenges"
                    className="text-blue-500 hover:underline"
                  >
                    https://www.researchgate.net/publication/277134174_Heritage_Tourism_Entrepreneurship_and_Social_Media_Opportunities_and_Challenges
                  </a>
                </li>
                <li className="mb-4 max-w-full">
                  Kim, S., & Perdue, R. (2017). Impact of Heritage Tourism on
                  Destination Image. UNNES Journal of Tourism Development
                  Management. Retrieved from
                  <a
                    href="https://journal.unnes.ac.id/nju/jdm/article/view/25626#:~:text=The%20heritage%20image%20and%20destination,to%20the%20tourist's%20revisit%20intentions."
                    className="text-blue-500 hover:underline"
                  >
                    https://journal.unnes.ac.id/nju/jdm/article/view/25626
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
