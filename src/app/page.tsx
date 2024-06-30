import { MaxWidthWrapper } from "@/components/MaxWidthWrapper";

export default function Home() {
  return (
    <MaxWidthWrapper
      className={
        "mb-12 mt-28 flex flex-col justify-center items-center text-center"
      }
    >
      <div
        className={
          "mx-auto mb-4 flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full border border-b-gray-200 bg-white px-7 py-2 shadow-md backdrop-blur hover:border-yellow-300 hover:bg-yellow-50"
        }
      >
        <h1 className="text-sm font-semibold text-gray-700">
          <span className={'font-bold text-yellow-500'}>Arnica</span> is now public!
        </h1>
      </div>
      <h1 className={"max-w-4xl text-5xl font-bold lg:text-7xl md:text-6xl"}>
        Chat with your{" "}
        <span className={"text-yellow-500 font-light font-sans"}>Document</span>{" "}
        in seconds.
      </h1>
      <p className={"mt-5 text-lg text-zinc-700 max-w-prose sm:text-lg"}>
        Arnica allows you to chat with your document in real-time. Simply upload
        a document and start chatting with it. No need to switch between apps or
        tabs. Arnica is here to help you focus on your work.
      </p>
    </MaxWidthWrapper>
  );
}
