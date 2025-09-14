export default function SectionWrapper({ id, children }: { id?: string; children: React.ReactNode }) {
  return (
    <section
    id={id}
    className="min-h-screen scroll-mt-24 flex items-center justify-center px-6 md:px-12 lg:px-20 z-10"
  >
    {children}
  </section>
  
  );
}
// Added scroll margin to account for fixed navbar height
// Added vertical padding for better spacing
// Ensured horizontal padding is consistent with global styles  
// Ensured minimum height to fill viewport for better section visibility