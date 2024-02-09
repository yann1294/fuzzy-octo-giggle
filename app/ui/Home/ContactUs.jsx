import { FaWhatsapp } from 'react-icons/fa';
import Link from 'next/link'

const ContactUs = () => {
  return (
    <div className="bg-cover bg-center py-12 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 relative" style={{ backgroundImage: "url('./background.jpg')"}}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="max-w-4xl mx-auto relative z-10 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
        <p className="text-lg mb-6">Have questions? Reach out to us via WhatsApp for quick assistance.</p>
        <div className="flex items-center justify-center">
          <Link
            href="https://wa.me/your-whatsapp-number"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded-lg focus:outline-none focus:ring focus:ring-green-300"
          >
            <FaWhatsapp className="mr-2" />
            Chat on WhatsApp
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
