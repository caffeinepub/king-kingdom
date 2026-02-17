export default function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-20 px-4 sm:px-6 lg:px-[10%]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-3">About Complete Construction Solutions</h2>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            A trusted construction company under Group of King Kingdom delivering modern, strong, and affordable building solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 mb-8">
          <div className="premium-card p-6 md:p-8">
            <h3 className="text-navy font-bold text-xl md:text-2xl mb-4">Who We Are</h3>
            <p className="text-muted-foreground leading-relaxed text-[15px] mb-4">
              Complete Construction Solutions (CCS) is a professional construction solutions company under Group of King Kingdom, based in Sujangarh, Rajasthan.
              We provide complete construction, renovation, interior & exterior finishing, and material supply
              services for residential and commercial projects.
            </p>
            <p className="text-muted-foreground leading-relaxed text-[15px]">
              Our focus is simple: <strong className="text-navy">quality, safety, transparency, and customer satisfaction</strong>.
            </p>
          </div>

          <div className="premium-card p-6 md:p-8">
            <h3 className="text-navy font-bold text-xl md:text-2xl mb-4">Our Promise</h3>
            <p className="text-muted-foreground leading-relaxed text-[15px] mb-6">
              We believe construction is not only about buildings — it is about building trust.
              We ensure proper supervision, clean finishing, and on-time delivery with fair pricing.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="premium-card p-5">
                <h4 className="text-navy font-bold text-base mb-2">Vision</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">To become the most trusted construction solutions provider in Rajasthan.</p>
              </div>
              <div className="premium-card p-5">
                <h4 className="text-navy font-bold text-base mb-2">Mission</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">To deliver high-quality construction services with integrity, safety and commitment.</p>
              </div>
              <div className="premium-card p-5">
                <h4 className="text-navy font-bold text-base mb-2">Core Values</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">Quality • Integrity • Safety • Commitment • Customer First</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
