import NavbarItem from "./NavbarItem";


export default function Navbar() {
  return (
    <div className="flex justify-center space-x-4 p-4 dark:bg-amber-600 bg-amber-500 lg:text-lg"> 
      <NavbarItem title="Trending" param="fetchTrending" />
      <NavbarItem title="Top Rated" param="fetchTopRated" />
    </div>
  )
}
