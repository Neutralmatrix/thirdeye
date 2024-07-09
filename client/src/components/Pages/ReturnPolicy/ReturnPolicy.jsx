import React from "react";
import "./ReturnPolicy.scss";

const ReturnPolicy = () => {
  return (
    <div className="return-policy-main-content">
      <div className="layout">
        <h1>Return Policy</h1>
        <p>
          At ThirdEye, we want you to be completely satisfied with your
          purchase. If you are not entirely satisfied, we're here to help.
        </p>
        <h2>Returns</h2>
        <p>
          We accept returns within 30 days of the purchase date. To be eligible
          for a return, your item must be unused and in the same condition that
          you received it. It must also be in the original packaging.
        </p>
        <p>
          Please note that certain types of items are exempt from being
          returned, such as personalized items or perishable goods.
        </p>
        <h2>Refunds</h2>
        <p>
          Once we receive your item, we will inspect it and notify you that we
          have received your returned item. We will immediately notify you on
          the status of your refund after inspecting the item.
        </p>
        <p>
          If your return is approved, we will initiate a refund to your original
          method of payment. You will receive the credit within a certain amount
          of days, depending on your card issuer's policies.
        </p>
        <h2>Contact Us</h2>
        <p>
          If you have any questions on how to return your item to us, contact us
          at{" "}
          <a href="mailto:thirdeye041122@gmail.com" className="email-link">
            thirdeye041122@gmail.com
          </a>{" "}
          or call us at <span className="phone-number">7982977125</span>.
        </p>
      </div>
    </div>
  );
};

export default ReturnPolicy;
