import React from "react";
import Navbar from "../components/Navbar";
import Testimonials from "../components/Testimonials";
import Blog from "../components/Blog";
import Footer from "../components/Footer";
import dobaImage from "/src/assets/DOBA Intelligence Logo 3 - Placement.jpg";

export default function AboutUs() {
  return (
    <>
      <div className="bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] text-white">
        <Navbar />
        <div className="relative isolate overflow-hidden px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <svg
              className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-neutral-800"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="e813992c-7d03-4cc4-a2bd-151760b470a0"
                  width={200}
                  height={200}
                  x="50%"
                  y={-1}
                  patternUnits="userSpaceOnUse"
                >
                  <path d="M100 200V.5M.5 .5H200" fill="none" />
                </pattern>
              </defs>

              <rect
                width="100%"
                height="100%"
                strokeWidth={0}
                fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
              />
            </svg>
          </div>

          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
            <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
              <div className="lg:pr-4">
                <div className="lg:max-w-lg">
                  <p className="text-lg font-semibold leading-7 text-blue-400">
                    Innovative Solutions
                  </p>
                  <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-5xl">
                    DOBA Intelligence Mission and Vision
                  </h1>
                  <p className="mt-6 text-xl leading-8 text-gray-300">
                    At DOBA Intelligence, we leverage cutting-edge AI technology
                    to drive your marketing strategy forward. Our solutions are
                    designed to enhance efficiency, boost engagement, and
                    deliver measurable results.
                  </p>
                </div>
              </div>
            </div>
            <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
              <img
                className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] bg-cover"
                src={dobaImage}
                alt="AI Marketing Dashboard"
              />
            </div>
            <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
              <div className="lg:pr-4">
                <div className="max-w-xl text-base leading-7 text-gray-300 lg:max-w-lg">
                  <p className="text-lg"> 
                    Our team of experts combines deep marketing knowledge with
                    advanced AI tools to create tailored strategies that meet
                    your unique needs. From predictive analytics to personalized
                    campaigns, we cover all aspects of AI-driven marketing.
                  </p>
                  <ul role="list" className="mt-8 space-y-8 text-gray-400">
                    <li className="flex gap-x-3">
                      <i className="fas fa-flag text-blue-400"></i>
                      <span className="text-lg">
                        <strong className="font-semibold text-white text-lg">
                          Mission.
                        </strong>{" "}
                        To empower businesses of all sizes by delivering
                        high-quality, engaging content quickly and affordably,
                        enabling them to thrive in the digital world.
                      </span>
                    </li>
                    <li className="flex gap-x-3">
                      <i className="fas fa-bullseye text-blue-400"></i>
                      <span className="text-lg">
                        <strong className="font-semibold text-white text-lg">
                          Vision
                        </strong>{" "}
                        To be the leading AI-driven content marketing agency
                        globally, recognized for our speed, quality, and
                        innovative approach, ensuring every business has access
                        to top-tier content marketing services.
                      </span>
                    </li>

                    <div>
                      <strong className=" text-xl italic">Core Values</strong>
                      <li className="flex gap-x-3 mt-5">
                        <i className="fas fa-award text-blue-400"></i>
                        <span className="text-lg">
                          <strong className="font-semibold text-white text-lg">
                            Excellence :
                          </strong>{" "}
                          We strive for perfection in every piece of content we
                          create.
                        </span>
                      </li>
                      <li className="flex gap-x-3 mt-5">
                        <i className="fas fa-lightbulb text-blue-400"></i>
                        <span className="text-lg">
                          <strong className="font-semibold text-white text-lg">
                            Innovation :
                          </strong>{" "}
                          We leverage the latest technologies and trends to stay
                          ahead of the curve.
                        </span>
                      </li>
                      <li className="flex gap-x-3 mt-5">
                        <i className="fas fa-shield-alt text-blue-400"></i>
                        <span className="text-lg">
                          <strong className="font-semibold text-white text-lg">
                          Integrity :
                          </strong>{" "}
                          We operate with transparency and honesty in all our
                          dealings.
                        </span>
                      </li>
                      <li className="flex gap-x-3 mt-5">
                        <i className="fas fa-user-friends text-blue-400"></i>
                        <span className="text-lg">
                          <strong className="font-semibold text-white text-lg">
                            Customer-Centricity :
                          </strong>{" "}
                          Our clients’ success is our success, and we are
                          dedicated to meeting their unique needs.
                        </span>
                      </li>
                    </div>
                  </ul>
                  <p className="mt-8">
                    Partner with DOBA Intelligence and transform your marketing
                    strategy with the power of AI. Our dedicated team is here to
                    support you every step of the way, ensuring your success in
                    the digital landscape.
                  </p>

                 
                  <div>

                  <div className="mt-16">
                    <h1 className="text-2xl font-semibold italic">Why we Stand out</h1>
                  </div>

                  
                    <h2 className="mt-10 text-2xl font-bold tracking-tight text-white">
                      Speed and Efficiency
                    </h2>
                    <p className="mt-6">
                      DOBA Intelligence guarantees new content every 8 hours,
                      allowing businesses to maintain a consistent and timely
                      content flow. Our streamlined processes and advanced AI
                      tools enable us to deliver high-quality content quickly,
                      meeting the fast-paced demands of today's digital world.
                    </p>
                  </div>
                  <div>
                    <h2 className="mt-16 text-2xl font-bold tracking-tight text-white">
                      Quality and Customization
                    </h2>
                    <p className="mt-6">
                      We prioritize quality in every piece of content we
                      produce. Our team of experienced writers, editors, and AI
                      tools ensures that each article is well-researched,
                      engaging, and aligned with the client's brand voice.
                      Additionally, our customized content strategies and
                      recommendations help businesses stay relevant and
                      competitive.
                    </p>
                  </div>
                  <div>
                    <h2 className="mt-16 text-2xl font-bold tracking-tight text-white">
                      Flexibility and Affordability
                    </h2>
                    <p className="mt-6">
                      Our flexible pricing plans cater to various business sizes
                      and budgets. With options for one-off payments and
                      unlimited content pieces for a flat fee, we offer a
                      cost-effective solution for businesses looking to scale
                      their content marketing efforts without breaking the bank.
                    </p>
                  </div>
                  <div>
                    <h2 className="mt-16 text-2xl font-bold tracking-tight text-white">
                      Comprehensive Support
                    </h2>
                    <p className="mt-6">
                      From initial strategy development to ongoing content
                      creation and refinement, DOBA Intelligence provides
                      comprehensive support. Our monthly check-ins and unlimited
                      revisions ensure that our clients receive the guidance and
                      adjustments they need to achieve their content marketing
                      goals.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Testimonials />
        <Blog />
        <Footer />
      </div>
    </>
  );
}
