export default function () {
  return (
    <div style="width:100vw;height:100%;position:fixed;z-index:1;display:flex;justify-content:center;padding:120px 24px 160px 24px;pointer-events:none">
      <div
        style="background:radial-gradient(circle, rgba(2, 0, 36, 0) 0, #fafafa 100%);position:absolute;content:&quot;&quot;;z-index:2;width:100%;height:100%;top:0"
        className="dark:hidden"
      >
      </div>
      <div
        style="content:&quot;&quot;;background-image:url(/grid.svg);z-index:1;position:absolute;width:100%;height:100%;top:0"
        className="invert dark:invert-0 opacity-40 dark:opacity-70"
      />
      <div
        id="foo"
        style="z-index:3;width:100%;max-width:640px;background-image: radial-gradient(at 27% 37%, #1a5beb 0px, transparent 0%),
radial-gradient(at 97% 21%, #c679da 0px, transparent 50%),
radial-gradient(at 52% 99%, #a060d1 0px, transparent 50%),
radial-gradient(at 10% 29%, #3b95ec 0px, transparent 50%),
radial-gradient(at 97% 96%, #1a5beb 0px, transparent 50%),
radial-gradient(at 33% 50%, #c679da 0px, transparent 50%),
radial-gradient(at 79% 53%, #3b95ec 0px, transparent 50%);position:absolute;height:100%;filter:blur(100px) saturate(150%);top:80px;opacity:0.15"
      >
      </div>
    </div>
  );
}
