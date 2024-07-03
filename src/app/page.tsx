import { MaxWidthWrapper } from "@/components/MaxWidthWrapper";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <MaxWidthWrapper
        className={
          "mb-12 mt-28 flex flex-col justify-center items-center text-center space-y-4"
        }
      >
        <div
          className={
            "mx-auto mb-4 flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full border border-b-gray-200 bg-white px-7 py-2 shadow-md backdrop-blur hover:border-violet-300 hover:bg-violet-50"
          }
        >
          <h1 className="text-sm font-semibold text-gray-700">
            <span className={"font-bold text-violet-500"}>Arnica</span> is now
            public!
          </h1>
        </div>
        <h1 className={"max-w-4xl text-5xl font-bold lg:text-7xl md:text-6xl"}>
          Chat with your{" "}
          <span className={"text-violet-500 font-light font-sans"}>
            Document
          </span>{" "}
          in seconds.
        </h1>
        <p className={"mt-5 text-lg text-zinc-700 max-w-prose sm:text-lg"}>
          Arnica allows you to chat with your document in real-time. Simply
          upload a document and start chatting with it. No need to switch
          between apps or tabs. Arnica is here to help you focus on your work.
        </p>
        <Link
          className={buttonVariants({
            size: "lg",
            className: "mt-5",
          })}
          href={"/dashboard"}
          target={"_blank"}
        >
          Get Started <ArrowRight className={"w-5 h-5 ml-2"} />
        </Link>
      </MaxWidthWrapper>
      {/*value proposition section*/}
      <div>
        <div className={"relative isolate"}>
          <div
            aria-hidden={"true"}
            className={
              "pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            }
          >
            <div
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
              className={
                "relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
              }
            />
          </div>
          <div>
            <div className={"mx-auto max-w-6xl px-6 lg:px-8"}>
              <div className={"mt-16 flow-root sm:mt-24"}>
                <div
                  className={
                    "rounded-xl -m-2 bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4"
                  }
                >
                  <Image
                    src={"/dashboard-preview.jpg"}
                    alt={"dashboard-preview"}
                    height={1364}
                    width={1364}
                    quality={100}
                    className={
                      "rounded-md bg-white p-2 sm:p-8 md:p-20 shadow-2xl ring-1 ring-gray-900/10"
                    }
                  />
                </div>
              </div>
            </div>
          </div>
          <div
            aria-hidden={"true"}
            className={
              "pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            }
          >
            <div
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
              className={
                "relative left-[calc(50%-13rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-36rem)] sm:w-[72.1875rem]"
              }
            />
          </div>
        </div>
      </div>

      {/*feature section*/}
      <div className={"mx-auto mt-32 mb-32 max-w-5xl sm:mt-56"}>
        <div className={"mb-12 px-6 lg:px-8"}>
          <div className={"mx-auto max-w-2xl sm:text-center"}>
            <h2 className={"mt-2 font-bold text-4xl text-gray-900 sm:text-5xl"}>
              Start chatting with your document in seconds.
            </h2>
            <p className={"mt-4 text-lg text-gray-600"}>
              Chatting with your document has never been easier. Arnica allows
              you to chat with your document in real-time.
            </p>
          </div>
        </div>
        <ol
          className={
            "my-8 space-y-4 pt-8 md:flex md:space-x-12 md:space-y-0 justify-center items-center"
          }
        >
          <li className={"md:flex"}>
            <div
              className={
                "flex items-center lg:md:space-x-4 space-y-2 lg:flex-col md:flex-col"
              }
            >
              <div className={"flex-shrink-0"}>
                <div
                  className={
                    "mx-5 flex items-center justify-center w-10 h-10 rounded-full bg-violet-400 text-white hover:bg-violet-500"
                  }
                >
                  1
                </div>
              </div>
              <div>
                <h3
                  className={
                    "font-bold text-lg text-gray-900 lg:text-center lg:items-center lg:justify-center md:text-center md:items-center md:justify-center"
                  }
                >
                  <span className={"text-xl font-semibold"}>
                    Sign Up for an account
                  </span>
                </h3>
                <p
                  className={
                    "mt-2 text-gray-600 lg:text-center lg:items-center lg:justify-center md:text-center md:items-center md:justify-center"
                  }
                >
                  Either start out with a free plan or choose a{" "}
                  <Link
                    href={"/pricing"}
                    className={"underline underline-offset-2 text-blue-500"}
                  >
                    plan
                  </Link>{" "}
                  that suits you!.
                </p>
              </div>
            </div>
          </li>
          <li className={"md:flex"}>
            <div
              className={
                "flex items-center lg:md:space-x-4 space-y-2 lg:flex-col md:flex-col"
              }
            >
              <div className={"flex-shrink-0"}>
                <div
                  className={
                    "mx-5 flex items-center justify-center w-10 h-10 rounded-full bg-violet-400 text-white hover:bg-violet-500"
                  }
                >
                  2
                </div>
              </div>
              <div>
                <h3
                  className={
                    "font-bold text-lg text-gray-900 lg:text-center lg:items-center lg:justify-center md:text-center md:items-center md:justify-center"
                  }
                >
                  Upload your PDF file
                </h3>
                <p
                  className={
                    "mt-2 text-gray-600 lg:text-center lg:items-center lg:justify-center md:text-center md:items-center md:justify-center"
                  }
                >
                  We&apos;ll process your PDF file and make it ready for
                  chatting.
                </p>
              </div>
            </div>
          </li>
          <li className={"md:flex"}>
            <div
              className={
                "flex items-center lg:md:space-x-4 space-y-2 lg:flex-col md:flex-col"
              }
            >
              <div className={"flex-shrink-0"}>
                <div
                  className={
                    "mx-5 flex items-center justify-center w-10 h-10 rounded-full bg-violet-400 text-white hover:bg-violet-500"
                  }
                >
                  3
                </div>
              </div>
              <div>
                <h3
                  className={
                    "font-bold text-lg text-gray-900 lg:text-center lg:items-center lg:justify-center md:text-center md:items-center md:justify-center"
                  }
                >
                  Start asking questions
                </h3>
                <p
                  className={
                    "mt-2 text-gray-600 lg:text-center lg:items-center lg:justify-center md:text-center md:items-center md:justify-center"
                  }
                >
                  It&apos;s that simple! Start asking questions and get answers
                  from your document.
                </p>
              </div>
            </div>
          </li>
        </ol>
        <div>
          <div className={"mx-auto max-w-6xl px-6 lg:px-8"}>
            <div className={"mt-16 flow-root sm:mt-24"}>
              <div
                className={
                  "rounded-xl -m-2 bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4"
                }
              >
                <Image
                  src={"/file-upload-preview.jpg"}
                  alt={"file-upload-preview"}
                  height={1364}
                  width={1364}
                  quality={100}
                  className={
                    "rounded-md bg-white p-2 sm:p-8 md:p-20 shadow-2xl ring-1 ring-gray-900/10"
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
