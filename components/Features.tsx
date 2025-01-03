import React from "react";
import { useId } from "react";

export function FeaturesSectionDemo() {
  return (
    <div className="py-20 lg:py-40">
      {/* Heading Section */}
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-neutral-800 dark:text-white">
          We handle just about everything!
        </h2>
        <p className="text-neutral-600 dark:text-neutral-400 mt-4 text-lg">
          We handle everything from design to deployment to get your website shipped and ready to go!
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {grid.map((feature, index) => (
          <div
            key={feature.title}
            className="relative bg-gradient-to-b dark:from-neutral-900 from-neutral-100 dark:to-neutral-950 to-white p-6 rounded-3xl overflow-hidden flex flex-col"
          >
            <Grid size={20} />
            <p className="text-base font-bold text-neutral-800 dark:text-white relative z-20">
              {feature.title}
            </p>
            <p className="text-neutral-600 dark:text-neutral-400 mt-4 text-base font-normal relative z-20">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

const grid = [
  {
    title: "Web Application Development",
    description:
      "🚀 We deliver tailored web applications optimized for functionality and performance. Whether you're building a robust business platform or a dynamic web app, your project will stand out in the competitive market.",
  },
  {
    title: "Web Design",
    description:
      "🎨 Your website will blend beauty and functionality. We create designs that are visually appealing, user-friendly, and aligned with your brand identity, leaving a lasting impression.",
  },
  {
    title: "Deployment and Hosting",
    description:
      "📡 Your website deserves a smooth launch. With secure, scalable, and high-speed hosting solutions, we ensure your platform is accessible anytime, anywhere.",
  },
  {
    title: "Website Maintenance",
    description:
      "🔧 Keep your website running like clockwork! We provide comprehensive support, including performance optimization, regular updates, and top-notch security.",
  },
  {
    title: "Full-Stack Development",
    description:
      "💻 From sleek front-end interfaces to powerful back-end systems, our full-stack development expertise ensures your project is scalable, efficient, and future-ready.",
  },
  {
    title: "Comprehensive Solutions",
    description:
      "📈 E-commerce platforms, high-converting landing pages, feature-rich dashboards – you name it, we build it. Let’s turn your vision into a reality.",
  },
];

export const Grid = ({
  pattern,
  size,
}: {
  pattern?: number[][];
  size?: number;
}) => {
  const p = pattern ?? [
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
  ];
  return (
    <div className="pointer-events-none absolute left-1/2 top-0 -ml-20 -mt-2 h-full w-full [mask-image:linear-gradient(white,transparent)]">
      <div className="absolute inset-0 bg-gradient-to-r [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] dark:from-zinc-900/30 from-zinc-100/30 to-zinc-300/30 dark:to-zinc-900/30 opacity-100">
        <GridPattern
          width={size ?? 20}
          height={size ?? 20}
          x="-12"
          y="4"
          squares={p}
          className="absolute inset-0 h-full w-full mix-blend-overlay dark:fill-white/10 dark:stroke-white/10 stroke-black/10 fill-black/10"
        />
      </div>
    </div>
  );
};

export function GridPattern({ width, height, x, y, squares, ...props }: any) {
  const patternId = useId();

  return (
    <svg aria-hidden="true" {...props}>
      <defs>
        <pattern
          id={patternId}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          <path d={`M.5 ${height}V.5H${width}`} fill="none" />
        </pattern>
      </defs>
      <rect
        width="100%"
        height="100%"
        strokeWidth={0}
        fill={`url(#${patternId})`}
      />
      {squares && (
        <svg x={x} y={y} className="overflow-visible">
          {squares.map(([sx, sy], index) => (
            <rect
              strokeWidth="0"
              key={`${sx}-${sy}-${index}`} // Unique key by combining x, y, and index
              width={width + 1}
              height={height + 1}
              x={sx * width}
              y={sy * height}
            />
          ))}
        </svg>
      )}
    </svg>
  );
}
