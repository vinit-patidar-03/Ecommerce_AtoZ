import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-[#0284c7] text-white py-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap justify-between">
                    <div className="w-full md:w-1/4 mb-6 md:mb-0">
                        <h3 className="text-xl font-bold mb-4">AtoZ Store</h3>
                        <p className="text-sm">Your one-stop shop for all your needs.</p>
                    </div>
                    <div className="w-full md:w-1/4 mb-6 md:mb-0">
                        <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
                        <p className="text-sm mb-2">123 Main Street, City, Country</p>
                        <p className="text-sm mb-2">Phone: +1 234 567 890</p>
                        <p className="text-sm">Email: info@atozstore.com</p>
                    </div>
                    <div className="w-full md:w-1/4">
                        <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
                        <div className="flex space-x-4">
                            <span className="cursor-pointer text-white hover:text-gray-300"><FaFacebook size={20} /></span>
                            <span className="cursor-pointer text-white hover:text-gray-300"><FaTwitter size={20} /></span>
                            <span className="cursor-pointer text-white hover:text-gray-300"><FaInstagram size={20} /></span>
                            <span className="cursor-pointer text-white hover:text-gray-300"><FaLinkedin size={20} /></span>
                        </div>
                    </div>
                </div>
                <div className="border-t border-gray-700 mt-8 pt-6 text-sm text-center">
                    <p>&copy; {new Date().getFullYear()} AtoZ Store. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
