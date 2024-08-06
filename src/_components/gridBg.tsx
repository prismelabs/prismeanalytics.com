export default function () {
  return (
    <div className="absolute w-full h-full">
      <div className="h-full w-full flex justify-center pointer-events-none pt-32 px-16">
        <div
          style="content:&quot;&quot;;background-image:url(/grid.svg)"
          className="absolute h-full w-full radial-gradient-mask top-0 invert dark:invert-0 opacity-50 dark:opacity-100"
        />
        <div
          style="background-image: radial-gradient(at 0% 0%, #a163d0 0px, transparent 30%), radial-gradient(at 50% 30%, #1957e9 0px, transparent 30%), radial-gradient(at 100% 10%, #a163d0 0px, transparent 30%)"
          className="absolute z-10 w-full h-full max-w-7xl mx-auto blur-[100px] opacity-20 saturate-200"
        />
      </div>
    </div>
  );
}
