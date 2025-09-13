// components/Section.tsx
export default function SectionWrapper({ children, id }: { children: React.ReactNode, id: string }) {
  return (
    <section id={id} className="mw-full py-10 px-6 md:px-12 lg:px-20 b border-gray-300 dark:border-gray-700">
      {children}
    </section>
  )
}
