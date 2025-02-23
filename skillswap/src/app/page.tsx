"use client";
export default function Homepage() {
  return (
    <>
      <div className="min-h-screen flex flex-col justify-center w-full mx-auto px-8 lg:px-8 xl:px-[90px] pt-20">
        <div className="flex flex-col lg:flex-row justify-between items-center w-full">
          <div className="text-center lg:text-left">
            <h1 className="text-6xl lg:text-8xl pb-6">Swap Skills</h1>
            <p className="text-xl lg:text-2xl">Learn & teach - some text here</p>
          </div>
          <div className="flex flex-row gap-4 lg:gap-6 mt-12 lg:mt-0">
            <img src="/images/homepage/people.PNG" alt="people in a meeting" className="rounded-[50px] w-[300px] lg:w-[350px] h-auto" />
            <img src="/images/homepage/man.PNG" alt="man in front of laptop" className="rounded-[50px] w-[300px] lg:w-[350px] h-auto" />
          </div>
        </div>
      </div>
    </>
  );
}
