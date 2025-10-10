import Footer from "../Components/Footer";


const Product = () => {
	const tiles = [
		{ key: 'cones', label: 'CONES', color: 'bg-purple-700', icon: 'cone' },
		{ key: 'cups', label: 'CUPS', color: 'bg-amber-400', icon: 'cup' },
		{ key: 'tubs', label: 'TAKEAWAY TUBS', color: 'bg-pink-300', icon: 'tub' },
		{ key: 'packs', label: 'TAKEAWAY PACKS', color: 'bg-rose-500', icon: 'pack' },
		{ key: 'sticks', label: 'STICKS', color: 'bg-amber-800', icon: 'stick' },
		{ key: 'specials', label: 'SPECIALS', color: 'bg-emerald-400', icon: 'special' },
		{ key: 'cakes', label: 'ICE CREAM CAKES', color: 'bg-sky-300', icon: 'cake' },
	];

	const Icon = ({ name }) => {
		switch (name) {
			case 'cone':
				return (
					<svg width="54" height="54" viewBox="0 0 24 24" fill="none"><path d="M6 2l6 12 6-12" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
				);
			case 'cup':
				return (
					<svg width="54" height="54" viewBox="0 0 24 24" fill="none"><rect x="6" y="6" width="12" height="8" rx="2" stroke="white" strokeWidth="1.5"/></svg>
				);
			case 'tub':
				return (
					<svg width="54" height="54" viewBox="0 0 24 24" fill="none"><rect x="5" y="8" width="14" height="8" rx="2" stroke="white" strokeWidth="1.5"/></svg>
				);
			case 'pack':
				return (
					<svg width="54" height="54" viewBox="0 0 24 24" fill="none"><rect x="4" y="7" width="16" height="10" rx="1" stroke="white" strokeWidth="1.5"/></svg>
				);
			case 'stick':
				return (
					<svg width="54" height="54" viewBox="0 0 24 24" fill="none"><rect x="10" y="6" width="4" height="10" rx="1" stroke="white" strokeWidth="1.5"/></svg>
				);
			case 'special':
				return (
					<svg width="54" height="54" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="10" r="4" stroke="white" strokeWidth="1.5"/></svg>
				);
			case 'cake':
				return (
					<svg width="54" height="54" viewBox="0 0 24 24" fill="none"><rect x="6" y="9" width="12" height="8" rx="1" stroke="white" strokeWidth="1.5"/></svg>
				);
			default:
				return null;
		}
	};

	return (
		<div className="bg-amber-50">
			<header className="bg-amber-400 relative">
				<div className="max-w-6xl mx-auto px-6 py-20 flex items-center justify-between">
					<h1 className="text-3xl md:text-4xl font-bold text-white tracking-widest">INTRODUCING HONEY ALMOND ICE CREAM CAKE</h1>
					<div className="w-40 h-40 md:w-56 md:h-56">
						{/* <img src="/product-box.png" alt="product" className="w-full h-full object-contain" /> */}
					</div>
				</div>
			</header>

			<div className="bg-amber-100 py-6">
				<div className="max-w-6xl mx-auto px-6 text-center text-sm text-rose-800 font-semibold">OUR PRODUCTS</div>
			</div>

			<section className="max-w-6xl mx-auto px-6 py-8 grid grid-cols-1 md:grid-cols-4 gap-4">
				{tiles.map((t, idx) => (
					<div key={t.key} className={`${t.color} text-white p-10 flex flex-col items-center justify-center h-40 md:h-44`}> 
						<Icon name={t.icon} />
						<div className="mt-6 text-sm font-semibold tracking-wider">{t.label}</div>
					</div>
				))}
			</section>
            <Footer />
		</div>
	);
};

export default Product;