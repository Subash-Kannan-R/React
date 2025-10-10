import Footer from "../Components/Footer";

const About = () => {
    return (
       <div className="bg-amber-50">
			<div className="bg-amber-400 relative">
				<div className="max-w-6xl mx-auto px-6 py-20 flex items-center justify-between">
					<h1 className="text-3xl md:text-4xl font-bold text-white tracking-widest">CLASSIC DAIRY  ICE CREAM </h1>
					<div className="w-40 h-40 md:w-56 md:h-56">
						{/* <img src="/product-box.png" alt="product" className="w-full h-full object-contain" /> */}
					</div>
				</div>
                </div>

            <div className="py-12 px-6 max-w-4xl mx-auto leading-relaxed text-gray-800">
                <section className="mb-12">
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-rose-800 mb-6">INTRODUCTION</h2>
                    <p className="mb-4">The Classic Dairy  story began in 2002 when industry veterans having 20-25 years of experience in the Ice Cream Industry decided to quit their MNC jobs and nurture a brand with their passion. They saw a market opportunity which no one else did. They believed that flavours had feelings and that taste buds can party.</p>
                    <p className="mb-4">And so began the Classic Dairy  journey in a modest 2000 square foot factory. But fueled by the founder’s passion and expertise, Dairy Day quickly evolved to become one of the leading brands in India.</p>
                    <p className="mb-0">Classic Dairy is currently present across South India, Maharashtra and Odisha.</p>
                </section>

                <section className="mb-12">
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-rose-800 mb-6">INFRASTRUCTURE</h2>
                    <p className="mb-4">Classic Dairy manufactures and supplies 150+ products across a variety of cups, cones, sticks, tubs and other specials, with over 30 flavours. All products are made in ultra-modern facilities built to international standards. The company has state-of-the-art manufacturing facilities in Karnataka, spread over 4 lakh square feet and having a production capacity of 3.6 lakh litres per day. The company also has one of the largest candy and cone making capacity in India.</p>
                    <p className="mb-0">The entire manufacturing process is ISO compliant (ISO-22000- 2018 (FSMS)). The facilities are supervised every day by an expert team of Dairy Technologists, Food Technologists and Microbiologists.</p>
                </section>

                <section>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-rose-800 mb-6">VALUES</h2>
                    <p>At Classic Dairy , our fundamental values can be summarized in one word – ‘Goodness’. Goodness in our products, goodness towards our customers, and goodness in the way we deal with all stakeholders – from our factory team to office team to distributors, dealers and business associates.</p>
                </section>
            </div>
            <Footer />
        </div>
    );
};

export default About;
