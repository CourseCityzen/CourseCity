import { Send, Phone, Mail, MapPin, ExternalLink } from 'lucide-react';
import logoImg from '../../assets/images/Logo.png';

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        {
            name: 'Facebook',
            icon: 'https://cdn-icons-png.flaticon.com/512/124/124010.png',
            href: '#'
        },
        {
            name: 'WhatsApp',
            icon: 'https://cdn-icons-png.flaticon.com/512/733/733585.png',
            href: '#'
        },
        {
            name: 'TikTok',
            icon: 'https://cdn-icons-png.flaticon.com/512/3046/3046121.png',
            href: '#'
        },
        {
            name: 'Instagram',
            icon: 'https://cdn-icons-png.flaticon.com/512/2111/2111463.png',
            href: '#'
        }
    ];

    return (
        <footer className="bg-slate-950 text-slate-300 pt-20 pb-10 px-4 md:px-8 border-t border-slate-900 transition-colors duration-500">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand Info */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-2">
                            <img
                                src={logoImg}
                                alt="CourseCity Logo"
                                className="h-10 w-auto object-contain"
                            />
                            <span className="text-2xl font-bold text-white">
                                CourseCity
                            </span>
                        </div>
                        <p className="text-slate-400 leading-loose">
                            Now learning from anywhere, and build your bright career. We provide high-quality courses to help you acquire new skills.
                        </p>
                        <div className="flex items-center gap-3">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.href}
                                    className="w-10 h-10 bg-slate-900 rounded-full flex items-center justify-center hover:bg-primary transition-all duration-300 transform hover:-translate-y-1"
                                >
                                    <img src={social.icon} alt={social.name} className="w-5 h-5 object-contain filter " />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-6 md:ml-10">
                        <h3 className="text-white text-xl font-bold relative inline-block pb-2">
                            Quick Links
                            <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-primary rounded-full"></span>
                        </h3>
                        <ul className="space-y-4">
                            {['Home', 'About Us', 'All Courses', 'Our Blog', 'Contact Us'].map((item) => (
                                <li key={item}>
                                    <a href="#" className="hover:text-primary transition-colors flex items-center group">
                                        <ExternalLink className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all font-medium" />
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Popular Categories */}
                    <div className="space-y-6">
                        <h3 className="text-white text-xl font-bold relative inline-block pb-2">
                            Popular Categories
                            <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-primary rounded-full"></span>
                        </h3>
                        <ul className="space-y-4">
                            {['Web Development', 'Digital Marketing', 'Graphic Design', 'Business Analysis', 'Data Science'].map((item) => (
                                <li key={item}>
                                    <a href="#" className="hover:text-primary transition-colors font-medium">{item}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div className="space-y-6">
                        <h3 className="text-white text-xl font-bold relative inline-block pb-2">
                            Stay Updated
                            <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-primary rounded-full"></span>
                        </h3>
                        <p className="text-slate-400">Subscribe to get the latest news and course updates.</p>
                        <div className="relative">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full bg-slate-900 border border-slate-800 rounded-full py-3.5 px-6 focus:ring-2 focus:ring-primary outline-none text-white placeholder:text-slate-500"
                            />
                            <button className="absolute right-1.5 top-1.5 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center hover:bg-primary-dark transition-colors">
                                <Send className="w-5 h-5" />
                            </button>
                        </div>
                        <div className="space-y-3 pt-4">
                            <div className="flex items-center gap-3">
                                <Mail className="w-4 h-4 text-primary" />
                                <span className="text-sm">hello@coursecity.com</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Phone className="w-4 h-4 text-primary" />
                                <span className="text-sm">+1 (234) 567-890</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500">
                    <p>© {currentYear} <span className="text-primary font-bold">CourseCity</span>. All rights reserved.</p>
                    <div className="flex items-center gap-6">
                        <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
                        <a href="#" className="hover:text-primary transition-colors">Cookies Settings</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
