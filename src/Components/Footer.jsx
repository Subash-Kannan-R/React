const Footer = () => {
    return (
        <footer className="bg-gray-50 border-t border-gray-200 mt-12">
            <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                <div className="flex-1">
                    <ul className="space-y-4 text-sm text-rose-800">
                        <li>Distributor Enquiry</li>
                        <li>Factory Visit</li>
                        <li>CSR</li>
                    </ul>
                </div>

                <div className="flex-1 flex items-center justify-center gap-4">
                    {/* simple inline SVG icons */}
                    <a href="#" aria-label="youtube" className="text-rose-800 hover:text-rose-900"> 
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="6" width="20" height="12" rx="3" stroke="currentColor" strokeWidth="1.5"/><path d="M10 9l5 3-5 3V9z" fill="currentColor"/></svg>
                    </a>
                    <a href="#" aria-label="linkedin" className="text-rose-800 hover:text-rose-900">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.2"/><path d="M7 10h2v7H7zM8 7a1 1 0 110-2 1 1 0 010 2zM12 10a3 3 0 013 3v4h-2v-4a1 1 0 00-1-1h-1v5h-2v-7h3z" fill="currentColor"/></svg>
                    </a>
                    <a href="#" aria-label="instagram" className="text-rose-800 hover:text-rose-900">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="3" width="18" height="18" rx="4" stroke="currentColor" strokeWidth="1.2"/><circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.2"/><circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/></svg>
                    </a>
                    <a href="#" aria-label="facebook" className="text-rose-800 hover:text-rose-900">
                        <svg width="14" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a4 4 0 00-4 4v3H8v4h3v8h4v-8h3l1-4h-4V6a1 1 0 011-1h3V2z" stroke="currentColor" strokeWidth="1.2" fill="currentColor"/></svg>
                    </a>
                </div>

                <div className="flex-1 text-sm text-right text-gray-600">
                    <div className="flex justify-end gap-6 mb-4">
                        <a href="#">Sitemap</a>
                        <a href="#">Terms</a>
                        <a href="#">Privacy Policy</a>
                    </div>
                    <div className="text-center md:text-right text-xs text-gray-500">All Rights Reserved. 2025 © Dairy Classic Ice Creams Pvt. Ltd.</div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;