export default function ProcessSection() {
  const steps = [
    {
      number: '1',
      title: 'Call / WhatsApp',
      description: 'Contact us and share your requirement for construction or renovation.'
    },
    {
      number: '2',
      title: 'Free Site Visit',
      description: 'We visit your site, discuss requirements, and take proper measurements.'
    },
    {
      number: '3',
      title: 'Quotation & Planning',
      description: 'We provide a clear quotation and project plan with timeline.'
    },
    {
      number: '4',
      title: 'Work Execution',
      description: 'Our team starts the work with supervision and quality checks.'
    },
    {
      number: '5',
      title: 'Quality Inspection',
      description: 'We ensure quality finishing, safety, and final inspection.'
    },
    {
      number: '6',
      title: 'Final Handover',
      description: 'Project handover after completion with customer satisfaction.'
    }
  ];

  return (
    <section className="py-16 md:py-20 px-[10%] bg-accent/20">
      <div className="text-center mb-12">
        <h2 className="section-title">How We Work</h2>
        <p className="section-subtitle">
          Simple and transparent process for every construction project.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {steps.map((step, index) => (
          <div key={index} className="card-white p-6">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-navy to-navy-dark text-white font-bold text-lg mb-4 shadow-lg">
              {step.number}
            </div>
            <h4 className="text-base font-bold text-navy mb-3">{step.title}</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
