import Link from 'next/link'

export default function Header() {
  return (
    <h2 className="text-2xl mt-4 ml-4 mb-4 md:text-4xl font-bold tracking-tight  md:tracking-tighter leading-tight dark:bg-black bg-[140px] bg-[url('https://de.scalable.capital/theme/images/scalable-logo-regular-small-white-text-b389978c88c8f7989034.c.svg')] bg-no-repeat bg-left h-12 ">
      <Link href="/" className="hover:underline ">
        
      </Link>
      
    </h2>
  )
}
