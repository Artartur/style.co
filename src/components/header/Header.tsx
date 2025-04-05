import HeaderActions from "./HeaderActions"
import HeaderBrand from "./HeaderBrand"
import Navbar from "./Navbar"
import Search from "../Search"

export default function Header() {
  return (
    <header className="flex-center h-14 bg-white xl:h-20">
      <div className="flex justify-between w-[90%] xl:w-[70%]">
        <HeaderBrand />
        <Navbar />
        <Search />
        <HeaderActions />
      </div>
    </header >
  )
}
