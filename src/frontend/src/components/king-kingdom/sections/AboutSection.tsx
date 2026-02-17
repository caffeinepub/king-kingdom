export default function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-20 px-4 sm:px-6 lg:px-[10%]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-9">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-2.5">About King Kingdom</h2>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            A trusted construction company delivering modern, strong, and affordable building solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-4.5">
          <div className="bg-white border border-border rounded-2xl p-6.5 shadow-sm">
            <h3 className="text-navy font-bold text-xl mb-2.5">Who We Are</h3>
            <p className="text-muted-foreground leading-relaxed text-[15px] mb-2.5">
              King Kingdom is a professional construction solutions company based in Sujangarh, Rajasthan.
              We provide complete construction, renovation, interior & exterior finishing, and material supply
              services for residential and commercial projects.
            </p>
            <p className="text-muted-foreground leading-relaxed text-[15px]">
              Our focus is simple: <strong className="text-navy">quality, safety, transparency, and customer satisfaction</strong>.
            </p>
          </div>

          <div className="bg-white border border-border rounded-2xl p-6.5 shadow-sm">
            <h3 className="text-navy font-bold text-xl mb-2.5">Our Promise</h3>
            <p className="text-muted-foreground leading-relaxed text-[15px] mb-4">
              We believe construction is not only about buildings — it is about building trust.
              We ensure proper supervision, clean finishing, and on-time delivery with fair pricing.
            </p>

            <div className="grid sm:grid-cols-3 gap-3.5">
              <div className="bg-white border border-border rounded-2xl p-4.5 shadow-sm">
                <h4 className="text-navy font-bold text-base mb-1.5">Vision</h4>
                <p className="text-muted-foreground text-xs leading-relaxed">To become the most trusted construction solutions provider in Rajasthan.</p>
              </div>
              <div className="bg-white border border-border rounded-2xl p-4.5 shadow-sm">
                <h4 className="text-navy font-bold text-base mb-1.5">Mission</h4>
                <p className="text-muted-foreground text-xs leading-relaxed">To deliver high-quality construction services with integrity, safety and commitment.</p>
              </div>
              <div className="bg-white border border-border rounded-2xl p-4.5 shadow-sm">
                <h4 className="text-navy font-bold text-base mb-1.5">Core Values</h4>
                <p className="text-muted-foreground text-xs leading-relaxed">Quality • Integrity • Safety • Commitment • Customer First</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
