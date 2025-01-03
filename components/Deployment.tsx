import React from 'react';
import { BentoGridSecondDemo } from './bentogird';

const DeploymentCard: React.FC = () => {
  return (
    <>
    <div className="relative w-fit mx-auto p-4 flex items-center justify-center">
      {/* Border container */}
      <div className="absolute inset-0 h-full border border-neutral-200 dark:border-neutral-800 w-full rounded-lg">
        {/* Border corners */}
        <div className="absolute -top-2 -left-2 h-4 w-4 dark:bg-neutral-800 bg-neutral-200 rounded-full"></div>
        <div className="absolute -top-2 -right-2 h-4 w-4 dark:bg-neutral-800 bg-neutral-200 rounded-full"></div>
        <div className="absolute -bottom-2 -left-2 h-4 w-4 dark:bg-neutral-800 bg-neutral-200 rounded-full"></div>
        <div className="absolute -bottom-2 -right-2 h-4 w-4 dark:bg-neutral-800 bg-neutral-200 rounded-full"></div>
      </div>
      
      {/* Title */}
      <h1 className="font-sans text-bold text-3xl mb-10 text-center md:text-5xl w-fit mx-auto font-bold tracking-tight text-neutral-800 dark:text-neutral-100">
      Effortless Build and Scalable Deployment
      </h1>
    </div>
    <BentoGridSecondDemo/>
    </>
  );
};

export default DeploymentCard;
