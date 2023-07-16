
export default function Intro({ heading, subHeading}) {
  return (
    <section className="flex-col md:flex-col flex items-center md:justify-between pt-16 mb-16 md:mb-12 text-center">
      <h1 className="text-center text-4xl sm:text-6xl font-bold tracking-tighter leading-tight">
        {heading}
      </h1>
      <h4 className="text-center text-md sm:text-2xl mt-5 md:pl-8 ">
       {subHeading}
      </h4>
    </section>
  )
}
