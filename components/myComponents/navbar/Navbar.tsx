import NavSearch from './NavSearch'
import LinksDropdown from './LinksDropdown'
import DarkMode from './DarkMode'
import Logo from './Logo'

function Navbar() {
  return (
    <nav className='border-b fixed z-[40]  w-full'

    >
      <div className='container flex  items-center justify-between   w-full 


      py-3 md:py-8  gap-4'>
        <div className='w-2/3 flex items-center justify-between gap-2'>
          <Logo />
          <div className='hidden md:block  ml-12'>
            <NavSearch />
          </div>
        </div>
        <div className='w-1/3  flex items-center justify-end   gap-2 '>
          <DarkMode />
          <LinksDropdown />

        </div>
      </div>
    </nav>
  )
}
export default Navbar


