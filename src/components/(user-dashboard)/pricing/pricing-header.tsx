import React from "react";
import SummaryHeaderTitle from "../summary/summary-header-title";

const PricingTopHeader = () => {
  return (
    <div className="md:max-w-4xl mx-auto flex justify-center flex-col items-center text-center px-4">
      <SummaryHeaderTitle text= "Transparent Pricing" />
      <p className="mt-4 text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl">
        Choose a plan that fits your needs. Whether you’re just getting started
        or scaling up, our flexible pricing ensures you only pay for what you
        use — no hidden fees, no surprises.
      </p>
    </div>
  );
};

export default PricingTopHeader;
