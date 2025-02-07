import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="mx-auto w-full max-w-screen-xl p-6 sm:p-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* First Column */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase">Find a Store</h3>
            <ul className="space-y-2">
              <li className="hover:underline">Become a Member</li>
              <li className="hover:underline">Sign Up for Email</li>
              <li className="hover:underline">Send Us Feedback</li>
              <li className="hover:underline">Student Discounts</li>
            </ul>
          </div>

          {/* Second Column */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase">Get Help</h3>
            <ul className="space-y-2">
              <li className="hover:underline">Order Status</li>
              <li className="hover:underline">Delivery</li>
              <li className="hover:underline">Returns</li>
              <li className="hover:underline">Payment Options</li>
              <li className="hover:underline">Contact Us</li>
            </ul>
          </div>

          {/* Third Column */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase">About Us</h3>
            <ul className="space-y-2">
              <li className="hover:underline">News</li>
              <li className="hover:underline">Careers</li>
              <li className="hover:underline">Investors</li>
              <li className="hover:underline">Sustainability</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-6 border-gray-700" />

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 space-y-4 md:space-y-0">
          <span className="text-center">© 2023 Nike, Inc. All Rights Reserved.</span>
          <div className="flex flex-wrap justify-center md:justify-end space-x-4">
            <a href="#" className="hover:text-white">Guides</a>
            <a href="#" className="hover:text-white">Terms of Sale</a>
            <a href="#" className="hover:text-white">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
