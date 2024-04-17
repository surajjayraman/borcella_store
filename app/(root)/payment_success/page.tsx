import Link from "next/link";
import React from "react";

const SuccessfulPayment = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center gap-5">
      <p className="text-heading4-bold text-red-1">Payment Successful</p>
      <p>Thank You for your purchase</p>
      <Link href="/" className="p-4 border text-base-bold">
        CONTINUE TO SHOPPING
      </Link>
    </div>
  );
};

export default SuccessfulPayment;
