import React from 'react';
import { FaFacebook, FaInstagram, FaPinterest, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white py-12 border-t border-gray-300">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Client Care */}
        <div>
          <h4 className="font-bold mb-4">Client Care</h4>
          <ul className="space-y-2">
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Track Your Order</a></li>
            <li><a href="#">Product Care & Repair</a></li>
            <li><a href="#">Book an Appointment</a></li>
            <li><a href="#">Frequently Asked Questions</a></li>
            <li><a href="#">Shipping & Returns</a></li>
            <li><a href="#">Tiffany Select Financing</a></li>
            <li><a href="#">Gift Cards</a></li>
            <li><a href="#">Website Accessibility</a></li>
          </ul>
        </div>

        {/* Our Company */}
        <div>
          <h4 className="font-bold mb-4">Our Company</h4>
          <ul className="space-y-2">
            <li><a href="#">World of Tiffany</a></li>
            <li><a href="#">Sustainability</a></li>
            <li><a href="#">California Supply Chains Act</a></li>
            <li><a href="#">California Privacy</a></li>
            <li><a href="#">Tiffany Careers</a></li>
            <li><a href="#">Privacy and Other Website Policies</a></li>
            <li><a href="#">Transparency in Coverage</a></li>
            <li><a href="#">Do Not Sell or Share My Personal Information</a></li>
            <li><a href="#">Opt-Out of Targeted Advertising</a></li>
          </ul>
        </div>

        {/* Related Tiffany Sites */}
        <div>
          <h4 className="font-bold mb-4">Related Tiffany Sites</h4>
          <ul className="space-y-2">
            <li><a href="#">Wedding & Gift Registry</a></li>
            <li><a href="#">Business Accounts</a></li>
            <li><a href="#">Tiffany for the Press</a></li>
            <li><a href="#">The Tiffany & Co. Foundation</a></li>
            <li><a href="#">Tiffany Alertline</a></li>
            <li><a href="#">Site Index</a></li>
          </ul>
        </div>

        {/* Latest from Tiffany */}
        <div>
          <h4 className="font-bold mb-4">Latest from Tiffany</h4>
          <p className="mb-4">
            Be the first to know about exciting new designs, special events, store openings and much more.
          </p>
          <form className="mb-4">
            <input
              type="email"
              placeholder="Email"
              className="w-full mb-4 p-2 border border-gray-300 rounded"
            />
            <button
              type="submit"
              className="w-full bg-black text-white py-2 uppercase tracking-wide text-sm"
            >
              Sign Up
            </button>
          </form>
          <div className="flex space-x-4 mt-4">
            <a href="#"><FaInstagram className="text-2xl" /></a>
            <a href="#"><FaFacebook className="text-2xl" /></a>
            <a href="#"><FaPinterest className="text-2xl" /></a>
            <a href="#"><FaTwitter className="text-2xl" /></a>
            <a href="#"><FaYoutube className="text-2xl" /></a>
          </div>
        </div>
      </div>

      <div className="text-center mt-12 text-sm border-t border-gray-200 pt-4">
        <a href="#" className="block mb-4">Change Location: United States</a>
        <p>© Tiffany & Co. 2024</p>
      </div>
    </footer>
  );
};

export default Footer;
