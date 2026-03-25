import { motion, useInView } from "motion/react";
import { useRef } from "react";
import svgPaths from "../imports/svg-3bzn97b2k7";

function AnimatedHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="absolute bg-white h-[47px] left-[17px] overflow-clip rounded-[32px] shadow-[2px_2px_7px_0px_rgba(65,74,83,0.1)] top-[22px] w-[216px]"
      data-name="."
    >
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[36px] left-[53px] not-italic opacity-70 text-[12px] text-black top-[9px] w-[130px]">
        Problem & Solutions
      </p>
      <div className="absolute flex h-[43.563px] items-center justify-center left-[4.2px] top-[3.04px] w-[213.477px]">
        <div className="-scale-y-100 flex-none rotate-[179.86deg]">
          <div
            className="h-[43.055px] opacity-30 rounded-[88.716px] w-[213.375px]"
            data-name="Mesh"
            style={{
              backgroundImage:
                "linear-gradient(179.582deg, rgb(42, 111, 243) 1.7394%, rgba(42, 111, 243, 0) 98.261%)",
            }}
          />
        </div>
      </div>
    </motion.div>
  );
}

function AnimatedPathSegment({
  children,
  delay,
}: {
  children: React.ReactNode;
  delay: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, pathLength: 0 }}
      animate={isInView ? { opacity: 1, pathLength: 1 } : {}}
      transition={{ duration: 1.5, delay, ease: "easeInOut" }}
      className="size-full"
    >
      {children}
    </motion.div>
  );
}

function ContentSection({
  title,
  description,
  delay,
  className,
}: {
  title: string;
  description: string;
  delay: number;
  className?: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -30 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
      className={`absolute content-stretch flex flex-col items-start not-italic pb-[19px] ${className}`}
    >
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[78px] min-w-full relative shrink-0 text-[#0d0d0d] text-[24px] w-[min-content]">
        {title}
      </p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[30px] opacity-70 relative shrink-0 text-[#5e5e5e] text-[15px] w-[245px]">
        {description}
      </p>
    </motion.div>
  );
}

function AnimatedIcon({
  children,
  delay,
  className,
}: {
  children: React.ReactNode;
  delay: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.5,
        delay,
        type: "spring",
        stiffness: 200,
        damping: 15,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function App() {
  return (
    <div className="relative w-[510px] h-[1387px] bg-white overflow-hidden mx-auto">
      <div className="absolute bg-white h-[1387px] left-[40px] overflow-clip top-0 w-[430px]">
        {/* Animated Red Path - Series 9 */}
        <div
          className="absolute flex h-[452.562px] items-center justify-center left-[51.24px] top-[49.16px] w-[453.479px]"
          style={
            {
              "--transform-inner-width": "1200",
              "--transform-inner-height": "21",
            } as React.CSSProperties
          }
        >
          <div className="flex-none rotate-[-66.13deg] skew-x-[0.01deg]">
            <div
              className="h-[344.252px] relative w-[342.624px]"
              data-name="Series 9"
            >
              <div className="absolute inset-[-0.77%_1.42%_46.26%_-0.77%]">
                <svg
                  className="block size-full"
                  fill="none"
                  preserveAspectRatio="none"
                  viewBox="0 0 340.404 187.65"
                >
                  <g id="Series 9">
                    <mask
                      fill="black"
                      height="189"
                      id="path-1-outside-1_1_62"
                      maskUnits="userSpaceOnUse"
                      width="341"
                      x="-0.357709"
                      y="-0.35747"
                    >
                      <rect
                        fill="white"
                        height="189"
                        width="341"
                        x="-0.357709"
                        y="-0.35747"
                      />
                      <path d={svgPaths.p224b3680} />
                    </mask>
                    <motion.path
                      d={svgPaths.p224b3680}
                      fill="var(--fill-0, #F31705)"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 1.5, ease: "easeInOut" }}
                    />
                    <motion.path
                      d={svgPaths.p224b3680}
                      mask="url(#path-1-outside-1_1_62)"
                      stroke="var(--stroke-0, white)"
                      strokeWidth="5.28421"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 1.5, ease: "easeInOut" }}
                    />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Header Badge */}
        <AnimatedHeader />

        {/* Problem Section */}
        <ContentSection
          title="Problem"
          description="Manual Instagram outreach is time-consuming, inconsistent, and hard to scale."
          delay={0.3}
          className="h-[140px] left-[171px] top-[190px] w-[237px]"
        />

        {/* Problem Icon */}
        <AnimatedIcon delay={0.5} className="absolute inset-[13.42%_77.67%_84.19%_13.02%]">
          <svg
            className="absolute block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 40 33.1213"
          >
            <path
              clipRule="evenodd"
              d={svgPaths.p2f45d870}
              fill="var(--fill-0, #EB4335)"
              fillRule="evenodd"
              id="Vector"
            />
          </svg>
        </AnimatedIcon>

        {/* Solution 1 Section */}
        <ContentSection
          title="Solution 1"
          description="Identify ideal prospects from followers, likers, and hashtags."
          delay={0.6}
          className="left-[76px] top-[491px] w-[339px]"
        />

        {/* Solution 2 Section */}
        <ContentSection
          title="Solution 2"
          description="Monitor campaign activity and response rates instantly."
          delay={1.2}
          className="left-[171px] top-[796px] w-[334px]"
        />

        {/* Solution 3 Section */}
        <ContentSection
          title="Solution 3"
          description="Automate personalized DMs with smart follow-ups"
          delay={1.8}
          className="left-[76px] top-[1074px] w-[339px]"
        />

        {/* Solution 1 Icon */}
        <AnimatedIcon
          delay={0.8}
          className="absolute inset-[35.88%_6.43%_62.02%_84.19%]"
        >
          <svg
            className="absolute block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 40.3333 29.1164"
          >
            <g id="Group 2461">
              <path
                d={svgPaths.p35a66d80}
                fill="var(--fill-0, #2196F3)"
                id="Vector"
              />
              <path
                d={svgPaths.p366f5300}
                fill="var(--fill-0, #2196F3)"
                id="Vector_2"
              />
            </g>
          </svg>
        </AnimatedIcon>

        {/* Solution 2 Icon */}
        <AnimatedIcon
          delay={1.4}
          className="absolute inset-[53.12%_83.95%_44.85%_7.91%]"
        >
          <svg
            className="absolute block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 35 28.2341"
          >
            <path
              d={svgPaths.p2ab70e40}
              fill="var(--fill-0, #2196F3)"
              id="Vector"
            />
          </svg>
        </AnimatedIcon>

        {/* Solution 3 Icon */}
        <AnimatedIcon
          delay={2.0}
          className="absolute h-[35px] left-[360px] top-[1146px] w-[39px]"
        >
          <svg
            className="absolute block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 39 35"
          >
            <path
              d={svgPaths.p915dd00}
              fill="var(--fill-0, #2196F3)"
              id="Vector"
            />
          </svg>
        </AnimatedIcon>
      </div>

      {/* Blue Animated Paths - Series 10, 11, 12 */}
      <div
        className="absolute flex h-[434.843px] items-center justify-center left-[3.57px] top-[355.61px] w-[435.449px]"
        style={
          {
            "--transform-inner-width": "1200",
            "--transform-inner-height": "21",
          } as React.CSSProperties
        }
      >
        <div className="flex-none rotate-[120.76deg] skew-x-[0.01deg]">
          <div
            className="h-[318.202px] relative w-[316.697px]"
            data-name="Series 10"
          >
            <div className="absolute inset-[-0.83%_14.34%_35.48%_-0.83%]">
              <svg
                className="block size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 273.914 207.953"
              >
                <g id="Series 10">
                  <mask
                    fill="black"
                    height="209"
                    id="path-1-outside-1_1_50"
                    maskUnits="userSpaceOnUse"
                    width="275"
                    x="-0.357858"
                    y="-0.357686"
                  >
                    <rect
                      fill="white"
                      height="209"
                      width="275"
                      x="-0.357858"
                      y="-0.357686"
                    />
                    <path d={svgPaths.p31324700} />
                  </mask>
                  <motion.path
                    d={svgPaths.p31324700}
                    fill="var(--fill-0, #2196F3)"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
                  />
                  <motion.path
                    d={svgPaths.p31324700}
                    mask="url(#path-1-outside-1_1_50)"
                    stroke="var(--stroke-0, white)"
                    strokeWidth="5.28421"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
                  />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div
        className="absolute flex h-[432.455px] items-center justify-center left-[74px] top-[649px] w-[433.103px]"
        style={
          {
            "--transform-inner-width": "1200",
            "--transform-inner-height": "21",
          } as React.CSSProperties
        }
      >
        <div className="flex-none rotate-[-60.42deg] skew-x-[0.01deg]">
          <div
            className="h-[318.202px] relative w-[316.697px]"
            data-name="Series 11"
          >
            <div className="absolute inset-[-0.83%_9.57%_35.48%_-0.83%]">
              <svg
                className="block size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 289.03 207.953"
              >
                <g id="Series 11">
                  <mask
                    fill="black"
                    height="209"
                    id="path-1-outside-1_1_46"
                    maskUnits="userSpaceOnUse"
                    width="290"
                    x="-0.357816"
                    y="-0.35768"
                  >
                    <rect
                      fill="white"
                      height="209"
                      width="290"
                      x="-0.357816"
                      y="-0.35768"
                    />
                    <path d={svgPaths.p3ff21e00} />
                  </mask>
                  <motion.path
                    d={svgPaths.p3ff21e00}
                    fill="var(--fill-0, #2196F3)"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1.5, delay: 1.1, ease: "easeInOut" }}
                  />
                  <motion.path
                    d={svgPaths.p3ff21e00}
                    mask="url(#path-1-outside-1_1_46)"
                    stroke="var(--stroke-0, white)"
                    strokeWidth="5.28421"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1.5, delay: 1.1, ease: "easeInOut" }}
                  />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div
        className="absolute flex h-[434.843px] items-center justify-center left-0 top-[940px] w-[435.449px]"
        style={
          {
            "--transform-inner-width": "1200",
            "--transform-inner-height": "21",
          } as React.CSSProperties
        }
      >
        <div className="flex-none rotate-[120.76deg] skew-x-[0.01deg]">
          <div
            className="h-[318.202px] relative w-[316.697px]"
            data-name="Series 12"
          >
            <div className="absolute inset-[-0.83%_3.14%_35.48%_-0.83%]">
              <svg
                className="block size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 309.393 207.952"
              >
                <g id="Series 12">
                  <mask
                    fill="black"
                    height="209"
                    id="path-1-outside-1_1_48"
                    maskUnits="userSpaceOnUse"
                    width="310"
                    x="-0.357673"
                    y="-0.357871"
                  >
                    <rect
                      fill="white"
                      height="209"
                      width="310"
                      x="-0.357673"
                      y="-0.357871"
                    />
                    <path d={svgPaths.p10140680} />
                  </mask>
                  <motion.path
                    d={svgPaths.p10140680}
                    fill="var(--fill-0, #2196F3)"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1.5, delay: 1.7, ease: "easeInOut" }}
                  />
                  <motion.path
                    d={svgPaths.p10140680}
                    mask="url(#path-1-outside-1_1_48)"
                    stroke="var(--stroke-0, white)"
                    strokeWidth="5.28421"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1.5, delay: 1.7, ease: "easeInOut" }}
                  />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
