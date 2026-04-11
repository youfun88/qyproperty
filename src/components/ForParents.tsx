import Image from "next/image";

export default function ForParents() {
  return (
    <section className="py-24 px-6 md:px-16 bg-primary text-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
        <div className="md:w-1/2">
          <div className="inline-block px-4 py-1 rounded-full border border-secondary text-secondary text-xs font-bold mb-6 tracking-widest uppercase">
            The Legacy Foundation
          </div>
          <h2 className="text-4xl font-extrabold mb-8 leading-tight">
            Securing the Future of Your Children.
            <br />
            <span className="text-secondary-fixed-dim">為您的下一代鋪路。</span>
          </h2>
          <div className="space-y-6">
            <div className="flex gap-4">
              <span className="material-symbols-outlined text-secondary">school</span>
              <div>
                <h5 className="font-bold text-lg">Top-Tier School Access</h5>
                <p className="text-surface-variant/70 text-sm">
                  選購 UC San Diego 等名校圈內的優質地產。
                  <br />
                  Housing located in the heart of elite educational hubs.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="material-symbols-outlined text-secondary">home_pin</span>
              <div>
                <h5 className="font-bold text-lg">Safe Haven Assets</h5>
                <p className="text-surface-variant/70 text-sm">
                  在穩定的加州市場，為孩子準備第一份海外資產。
                  <br />
                  Stable asset appreciation for the next generation.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 relative">
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDNYML5E3iErIZlSE1Kk1Pktx-CCZxw3_wFkTbp-GFxk9lcee1EfD4hPPrB7tIhvG23n-nJYPYaNJzXF6ADyCqrRG9jnnmHMW7PUU2yHX2Dz-saktzFo5PQFAu4xfah803pyfR2K8i3Svp_lKEpHozssKJKTexT4PAKb9uyt_K2LLw4U9nbEamvmGVxLY0un6HX-pTgJGbA9FlolK2zoycndnZ94o4lIPwea4jg1aaessjzHUZzjQMUIZYpdionII5P1_kovYk7qvU"
            alt="Prestigious university campus library"
            width={600}
            height={400}
            className="rounded-2xl shadow-2xl w-full"
          />
          <div className="absolute -bottom-8 -left-8 bg-secondary p-8 rounded-xl hidden md:block">
            <p className="text-primary font-bold text-2xl italic">
              &ldquo;Education is the best legacy.&rdquo;
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
