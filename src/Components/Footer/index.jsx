import { NavLink } from "react-router-dom"
const Footer = () => {
  return (
    <footer className="mt-20 xl:mt-32 mx-auto w-full relative text-center bg-sky-600 text-white">
    <div className="px-6 py-8 md:py-14 xl:pt-20 xl:pb-12">
    {/* <div className="flex items-center justify-center">
    <NavLink to='/'>
      <img className="h-full" src="https://img.icons8.com/fluent/30/000000/cloud-akatsuki.png" />
      <h2 className="font-bold text-3xl xl:text-4xl leading-snug">
        ComAnime 
      </h2>
      <img className="h-full" src="https://img.icons8.com/fluent/30/000000/cloud-akatsuki.png" />
      </NavLink>
    </div> */}
    <div className="flex items-center justify-center lg:pl-40 flex-shrink-0 text-white mr-6 sticky z-1">
            <NavLink to='/' className="flex items-center font-semibold text-xl tracking-tight cursor-pointer">
                <img className="h-full" src="https://img.icons8.com/fluent/30/000000/cloud-akatsuki.png" />
                <h2 className="font-bold text-3xl xl:text-4xl leading-snug">
                  ComAnime 
                </h2>
                <img className="h-full" src="https://img.icons8.com/fluent/30/000000/cloud-akatsuki.png" />
            </NavLink>
        </div>

        <div className=" xl:mt-20">
            <nav className="flex flex-wrap justify-center text-lg font-medium">
                <div className="px-5 py-2">
                  <a href="https://www.linkedin.com/in/santiago-andres-millan-pardo/" target="_blank" rel="noopener noreferrer">
                      <img src="https://img.icons8.com/fluent/30/000000/linkedin.png" />
                  </a>
                </div>
                <div className="px-5 py-2">
                  <a href="https://github.com/santiagomillan" target="_blank" rel="noopener noreferrer">
                    <img src="https://img.icons8.com/fluent/30/000000/github.png" />
                  </a>
                </div>
            </nav>
            <p className="mt-7 text-base">© 2024  <a href="https://www.linkedin.com/in/santiago-andres-millan-pardo/"> Santiago Millan</a> - All rights reserved</p>
        </div>
    </div>
</footer>

  )
}

export default Footer;