import * as React from "react";
export const Registry: React.FC = () => {
  return (
    <section className="bg-gray-100 p-4 pb-48">
      <div className="w-full pt-28 flex justify-center flex-col">
        <h4 className="text-secondary font-brush text-5xl sm:text-7xl  font-light text-center">
          Thank You
        </h4>
        <p className="max-w-[700px] text-gray-500 text-center  font-light py-4 self-center text-sm md:text-base tracking-wide">
          The most important thing to us is that you&apos;re able to come and
          celebrate our wedding. However, if you wish to give a gift, we would
          graciously accept a contribution towards our new lives in the form of
          e-transfer.
          <br />
          <br />
          Thank you for your love and support!
        </p>
        {/* <div className="mt-10 self-center w-full flex flex-col md:flex-row space-x-24  max-w-[1000px]">
          <div className="mb-4">
            <img
              src="https://wedsites.s3.amazonaws.com/accounts/843/section/16037/Myer.png"
              alt="registry image 1"
            />
            <a href="https://www.myer.com.au/" target="_blank">
              <Button label="Myer" variant="primary" />
            </a>
          </div>
          <div className="mb-4">
            <img
              src="https://wedsites.s3.amazonaws.com/accounts/843/section/16037/Myer.png"
              alt="registry image 1"
            />
            <Button label="Myer" variant="primary" />
          </div>
          <div className="mb-4">
            <img
              src="https://wedsites.s3.amazonaws.com/accounts/843/section/16037/Myer.png"
              alt="registry image 1"
            />
            <Button label="Myer" variant="primary" />
          </div>
        </div> */}
      </div>
    </section>
  );
};
