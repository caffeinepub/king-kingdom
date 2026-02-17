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
    <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-[10%]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-9">
          <h2 className="section-title">How We Work</h2>
          <p className="section-subtitle">
            Simple and transparent process for every construction project.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
          {steps.map((step, index) => (
            <div key={index} className="premium-card hover:shadow-lg transition-all">
              <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br from-navy to-navy-dark text-white font-extrabold text-base mb-3 shadow-lg">
                {step.number}
              </div>
              <h4 className="text-navy font-bold mb-2">{step.title}</h4>
              <p className="text-muted-foreground text-xs leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
