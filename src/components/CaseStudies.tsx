import Image from "next/image";

export default function CaseStudies() {
  return (
    <section id="case-studies" className="py-24 px-6 md:px-16 bg-surface-container-low">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-12">
          <h2 className="text-3xl font-extrabold text-primary">
            Proven Results
            <br />
            <span className="text-secondary text-xl font-medium">成交實績</span>
          </h2>
        </div>
        <div className="bg-white rounded-3xl overflow-hidden shadow-xl flex flex-col lg:flex-row">
          <div className="lg:w-1/2 h-80 lg:h-auto relative">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCvGMYCQuIDR7fTn6eXsnbGY0NXMecq9wvF4eP2vy2JFAvyU4ZX508gnnT3m4iKQoJM7Ebl-ob_KihFOEN-RGRAgEgBNDbQJpI76xcXZQyIaksong0SjX5sOSLfuB4Qj73gGt6tsFqZPaTUALWulBcBHnDpN3n9D4VcrM-tVRx_lUwkyI67ycr7VQVssax1mWkq7V5rh_l_LglGIy5ynw-0l5EXf5BI00cOFDTTxHL1mITmekJigFsAWY2cj7jpuQ5q3kGsiTww-LI"
              alt="Modern luxury condo in San Diego with floor-to-ceiling windows"
              fill
              className="object-cover"
            />
          </div>
          <div className="lg:w-1/2 p-12 flex flex-col justify-center">
            <div className="text-secondary font-bold text-sm mb-4 uppercase tracking-widest">
              San Diego Portfolio #082
            </div>
            <h3 className="text-3xl font-bold mb-6 text-primary">Luxury Coastal Residence</h3>
            <div className="grid grid-cols-2 gap-8 mb-8">
              <div>
                <p className="text-on-surface-variant text-xs uppercase mb-1">Acquisition Price</p>
                <p className="text-2xl font-bold text-primary">$850,000 USD</p>
              </div>
              <div>
                <p className="text-on-surface-variant text-xs uppercase mb-1">Current Valuation</p>
                <p className="text-2xl font-bold text-primary">$1,050,000 USD</p>
              </div>
              <div>
                <p className="text-on-surface-variant text-xs uppercase mb-1">Net Rental Yield</p>
                <p className="text-2xl font-bold text-secondary">6.1% p.a.</p>
              </div>
              <div>
                <p className="text-on-surface-variant text-xs uppercase mb-1">Hold Period</p>
                <p className="text-2xl font-bold text-primary">24 Months</p>
              </div>
            </div>
            <p className="text-on-surface-variant italic leading-relaxed">
              &ldquo;Quality Life, Yours 幫我們在聖地牙哥優質地段找到這間房，從翻修到招租僅花了6週時間，完全不需要我們親自飛過去。&rdquo;
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
