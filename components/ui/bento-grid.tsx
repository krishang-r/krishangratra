import { cn } from "@/lib/utils";
import Link from 'next/link';

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "mx-auto grid max-w-7xl grid-cols-1 gap-6 md:grid-cols-3 auto-rows-auto"
,
        className,
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  link,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  link: string;
}) => {
  return (
    <div
      className={cn(
        "group/bento shadow-input row-span-1 flex flex-col justify-between space-y-4 rounded-xl border-2 border-secondary bg-white p-4 transition duration-200 hover:shadow-xl",
        className,
      )}
    >
      {/* <div className="flex flex-1 w-full h-48 overflow-hidden rounded-xl bg-gradient-to-br from-neutral-200 to-neutral-100">
        {header && (
          <Image
            src={header}
            alt="bento image"
            width={500}
            height={600}
            className="object-cover w-full h-full rounded-xl"
          />
        )}
      </div> */}

      

            <Link
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className="block"
    >
    <div className="relative group cursor-pointer overflow-hidden rounded-xl">
        {/* Content Box */}
        <div className="transition duration-200 group-hover:translate-x-2 p-4">
        <div className="mt-2 mb-2 text-3xl font-sans font-bold text-secondary">
            {title}
        </div>
        <div className="font-sans text-secondary text-base break-words whitespace-normal leading-snug">
          {description}
        </div>

        </div>

        
    </div>
    </Link>

    </div>
  );
};
