import Image from 'next/image';

const navigation = {
  connect: [
    { name: 'Twitter', href: 'https://x.com/Ascensionw61543' },
    { name: 'GitHub', href: 'https://github.com/Amaljiththedev' },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/company/ascension-wave' },
    { name: 'Whatsapp', href: "https://wa.me/917025765018" },
  ],
  company: [
    { name: 'About Us', href: '/about' },

  ],
};

const TwoColumnFooter = () => {
  return (
    <footer
      aria-labelledby="footer-heading"
      className="font-inter w-full text-white"
    >
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center lg:flex-row lg:justify-between lg:space-x-16">
          <div className="space-y-8 text-center lg:text-left lg:w-1/3">
            <Image
              priority={true}
              unoptimized={true}
              width={100}
              height={40}
              src="/assets/logo-dark.png" // Replace with your logo
              alt="Ascension Wave Logo"
              className="h-7 w-auto mx-auto lg:mx-0"
            />
            <p className="text-md max-w-xs leading-6 mx-auto lg:mx-0">
              Crafting the future of the web, one project at a time — Ascension Wave.
            </p>
          </div>

          {/* Navigation */}
          <div className="mt-16 lg:mt-0 flex flex-col lg:flex-row lg:space-x-32 text-center lg:text-left">
            <div className="md:w-1/2 mb-8 lg:mb-0">
              <h3 className="text-sm font-semibold leading-6">Connect</h3>
              <div className="mt-6 space-y-4">
                {navigation.connect.map((item) => (
                  <div key={item.name}>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm leading-6 text-gray-400 hover:text-gray-200"
                    >
                      {item.name}
                    </a>
                  </div>
                ))}
              </div>
            </div>
            <div className="md:w-1/2">
              <h3 className="text-sm font-semibold leading-6">Company</h3>
              <div className="mt-6 space-y-4">
                {navigation.company.map((item) => (
                  <div key={item.name}>
                    <a
                      href={item.href}
                      className="text-sm leading-6 text-gray-400 hover:text-gray-200"
                    >
                      {item.name}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <p className="text-center mt-20 text-5xl md:text-9xl lg:text-[12rem] xl:text-[13rem] font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 dark:from-red-950 to-red-200 dark:to-neutral-800 inset-x-0">Ascension wave</p>
        <div className="mt-16 border-t border-gray-700 pt-8 flex justify-center items-center">
          <p className="text-xs leading-5 text-gray-400 text-center">
            &copy; 2025 Ascension Wave. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default TwoColumnFooter;
