import Image from 'next/image'
import Link from 'next/link'
export const HeroSection = () => {
return (
    <section className="py-8 ">
            <div className="mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5">
                <div className="mx-auto text-center max-w-xl">
                    <h1 className="relative font-semibold max-w-max mx-auto pb-2 font-display text-3xl sm:text-4xl md:text-5xl text-gray-800 dark:text-white after:absolute
                        after:bottom-0 after:left-0 after:h-0.5 after:rounded-lg after:bg-gray-800 dark:after:bg-gray-100 after:w-4">
                        HAIDA Wissal
                    </h1>
                </div>
                <div className="mt-10 grid md:grid-cols-2 gap-x-6 lg:gap-x-14 gap-y-8 md:items-center">
                    <div className="space-y-4 md:space-y-6 md:col-span-1 lg:col-span-1 w-full max-w-3xl lg:max-w-none mx-auto lg:mx-0 text-left">
                      <h1 className="font-display font-semibold text-2xl md:text-3xl text-gray-900 dark:text-white">
                            Software Engineer & AI Enthusiast
                        </h1>
                        <div className="text-gray-700 dark:text-gray-300 space-y-3 mx-auto max-w-2xl lg:max-w-none">
                            <p>Technology should serve people — that’s why I create applications where AI meets human needs.</p>
                            {/* <p>With a strong foundation in software engineering and a passion for AI, I build solutions that are not only innovative but also user-centric.</p> */}
                        </div>
                        <div className="flex justify-center lg:justify-start">
                            <Link href="#" className="px-6 h-11 flex items-center rounded-lg bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-sm transition ease-linear hover:bg-gray-900">Hire me</Link>
                        </div>
                        <div className="grid lg:grid-cols-4 md:grid-cols-3 w-full gap-y-3">
                            <div className='lg:col-span-2'>
                                <h2 className="text-xl md:text-2xl font-display font-semibold text-gray-800 dark:text-gray-200">5 years</h2>
                                <span className="text-gray-600">Engineering Background</span>
                            </div>
                            <div>
                                <h2 className="text-xl md:text-2xl font-display font-semibold text-gray-800 dark:text-gray-200">+10</h2>
                                <span className="text-gray-600">Projects</span>
                            </div>
                            <div>
                                <h2 className="text-xl md:text-2xl font-display font-semibold text-gray-800 dark:text-gray-200">90%</h2>
                                <span className="text-gray-600">Positive Feedback</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center mt-4 md:mt-6">
                      <div className="relative max-w-full sm:max-w-lg md:max-w-xl ">
                        {/* Background gradient layer */}
                        <span className="absolute inset-0 rounded-xl scale-[1.06] bg-gradient-to-b from-gray-200 to-transparent dark:from-gray-900 z-0" />

                        {/* Solid background layer */}
                        <span className="absolute inset-0 rounded-xl scale-[1.05] bg-gray-100 dark:bg-gray-900 z-0" />

                        {/* Your image */}
                        <Image
                          src="/Untitled design (2).png"
                          width={1400}
                          height={1376}
                          alt="Portrait"
                          className="
                            relative z-10 w-full h-auto object-contain rounded-xl
                            lg:max-h-[26rem]
                          "
                        />
                      </div>
                    </div>
               </div>
            </div>
        </section>
);
}