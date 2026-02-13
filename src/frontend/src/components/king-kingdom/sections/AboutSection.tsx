import { Target, Heart, Shield } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-20 px-[10%]">
      <div className="text-center mb-12">
        <h2 className="section-title">About King Kingdom</h2>
        <p className="section-subtitle">
          A trusted construction company delivering modern, strong, and affordable building solutions.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Who We Are */}
        <div className="card-white p-7 space-y-4">
          <h3 className="text-xl font-bold text-navy">Who We Are</h3>
          <p className="text-muted-foreground leading-relaxed">
            King Kingdom is a professional construction solutions company based in Sujangarh, Rajasthan.
            We provide complete construction, renovation, interior & exterior finishing, and material supply
            services for residential and commercial projects.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Our focus is simple: <strong className="text-navy">quality, safety, transparency, and customer satisfaction</strong>.
          </p>
        </div>

        {/* Our Promise */}
        <div className="card-white p-7 space-y-4">
          <h3 className="text-xl font-bold text-navy">Our Promise</h3>
          <p className="text-muted-foreground leading-relaxed">
            We believe construction is not only about buildings — it is about building trust.
            We ensure proper supervision, clean finishing, and on-time delivery with fair pricing.
          </p>

          <div className="grid sm:grid-cols-3 gap-4 pt-2">
            <div className="card-white p-4 border-2 border-navy/10">
              <Target className="w-6 h-6 text-navy mb-2" />
              <h4 className="text-sm font-bold text-navy mb-1">Vision</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                To become the most trusted construction solutions provider in Rajasthan.
              </p>
            </div>
            <div className="card-white p-4 border-2 border-navy/10">
              <Heart className="w-6 h-6 text-navy mb-2" />
              <h4 className="text-sm font-bold text-navy mb-1">Mission</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                To deliver high-quality construction services with integrity, safety and commitment.
              </p>
            </div>
            <div className="card-white p-4 border-2 border-navy/10">
              <Shield className="w-6 h-6 text-navy mb-2" />
              <h4 className="text-sm font-bold text-navy mb-1">Core Values</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Quality • Integrity • Safety • Commitment • Customer First
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
