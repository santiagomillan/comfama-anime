const Footer = () => {
    return (
      <footer className="flex justify-between items-center fixed bottom-0 w-full py-5 px-8 text-sm font-light bg-sky-600">
        <ul className="flex items-center gap-3 lg:px-8">
          <li className="font-semibold text-lg  text-white hover:text-white">ComAnime</li>
        </ul>
        <ul className="md:flex  items-center gap-3  text-white hover:text-white lg:px-8">
          <li>Contacto</li>
          <li>Sobre nosotros</li>
          <li>Política de privacidad</li>
        </ul>
      </footer>
    );
  };
  
  export default Footer;