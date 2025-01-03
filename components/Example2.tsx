import { Space_Grotesk } from 'next/font/google'
import { PricingWrapper } from './pricingcomponent'

const grotesk = Space_Grotesk({ subsets: ['latin'] })

export const Example2 = () => (
  <div className={grotesk.className + ' h-[800px] w-full flex gap-12 items-center justify-center'}>
    <PricingWrapper contactHref={'/'} type={'crosses'} className={'bg-white'}>
      {/* Embed Calendly Inline Widget */}
      <div className="mt-6 w-full flex justify-center items-center">
        <iframe
          src="https://calendly.com/ascensionwave2025"
          width="600" // Increased width
          height="600" // Increased height
          frameBorder="0"
          className="rounded-lg shadow-lg"
        ></iframe>
      </div>
    </PricingWrapper>
  </div>
)
