import { Sparkles, Code, Palette } from 'lucide-react'
import { JSX } from 'react'

interface Feature {
  id: number
  name: string
  description: string
  icon: JSX.Element
}

const iconSize = 18

const FeaturesData: Feature[] = [
  {
    id: 1,
    name: 'Easy to Use',
    description:
      'We specialize in building web apps that are discoverable, fast, and scalable, using the latest technologies to optimize performance. Whether you’re looking for a cutting-edge design or seamless functionality, we ensure your web app stands out.',
    icon: <Sparkles size={iconSize} />,
  },
  {
    id: 2,
    name: 'Customizable',
    description:
      'Every design we create is unique and customized to suit your specific needs. You’ll receive a fully navigable Figma file that’s intuitive and easy to work with, empowering you to make adjustments and decisions with ease.',
    icon: <Palette size={iconSize} />,
  },
  {
    id: 3,
    name: 'Built by Experts',
    description:
      'At Ascension Wave, our team consists of Senior Software Engineers with extensive experience in building high-performance web apps at scale. You can trust us to deliver top-notch solutions, backed by expertise and a commitment to excellence.',
    icon: <Code size={iconSize} />,
  },
]

const FeaturesGrid = () => {
  return (
    <div>
      <div className="mt-8 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3 w-full">
        {FeaturesData.map((feature) => {
          return (
            <div key={feature.id} className="text-left flex flex-col items-center justify-center">
              <div className="mb-2 w-fit rounded-lg bg-primary p-4 text-center text-white">
                {feature.icon}
              </div>
              <div className="text-lg mb-1 font-semibold text-gray-900 dark:text-gray-100 text-center">
                {feature.name}
              </div>
              <div className="font-regular max-w-sm text-sm text-white text-center">
                {feature.description}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

const FeaturesWithHeading = () => {
  return (
    <div className="my-12 flex w-full flex-col items-center justify-center px-4 sm:px-8">
      <h1 className="mb-2 max-w-3xl text-center text-3xl font-semibold tracking-tighter text-gray-900 md:text-4xl dark:text-gray-100">
        Ascension Wave: Crafting Exceptional Web Experiences
      </h1>
      <p className="max-w-sm text-center text-base text-white">
        At Ascension Wave, we build modern, scalable, and customizable web apps to help your business thrive online.
      </p>
      <FeaturesGrid />
    </div>
  )
}

export default FeaturesWithHeading
