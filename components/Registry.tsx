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
          celebrate our wedding. We are incredibly grateful for your love and
          support as we begin this new chapter of our lives together. If you
          would like to honor us with a gift, we kindly request cash or an
          e-transfer, as it will help us start our journey in the most
          meaningful way. This flexibility will allow us to put your generous
          contribution towards our future adventures and experiences. Please
          message either Kurt or Cecile for e-transfer information.
          <br />
          <br />
          Thank you for making our day even more special!
          <br />
          <br />
          Love Kurt and Cecile
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
