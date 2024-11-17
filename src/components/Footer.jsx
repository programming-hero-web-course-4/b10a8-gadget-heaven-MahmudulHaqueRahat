

const Footer = () => {
    return (
        <div className="bg-base-200 p-10 mt-56">
        <footer className="text-center max-w-4xl mx-auto ">
            <div className="mb-6">
                <h2 className="text-2xl font-bold">Gadget Heaven</h2>
                <p className="text-gray-600">Leading the way in cutting-edge technology and innovation.</p>
            </div>

            <div className="border-t border-gray-300 my-6"></div>

            <div className="grid grid-cols-3 gap-8">
                <nav className="flex flex-col items-center">
                    <h6 className="footer-title font-semibold mb-2">Services</h6>
                    <a className="link link-hover">Product Support</a>
                    <a className="link link-hover">Order Tracking</a>
                    <a className="link link-hover">Shipping & Delivery</a>
                    <a className="link link-hover">Returns</a>
                </nav>
                <nav className="flex flex-col items-center">
                    <h6 className="footer-title font-semibold mb-2">Company</h6>
                    <a className="link link-hover">About Us</a>
                    <a className="link link-hover">Careers</a>
                    <a className="link link-hover">Contact</a>
                </nav>
                <nav className="flex flex-col items-center">
                    <h6 className="footer-title font-semibold mb-2">Legal</h6>
                    <a className="link link-hover">Terms of Service</a>
                    <a className="link link-hover">Privacy Policy</a>
                    <a className="link link-hover">Cookie Policy</a>
                </nav>
            </div>
        </footer>
    </div>
    );
};

export default Footer;