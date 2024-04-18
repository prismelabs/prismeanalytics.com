export const layout = "blank.tsx";

export default () => {
  return (
    <main className="py-32 bg-background text-foreground min-h-screen">
      <h1 className="text-4xl font-bold text-center">Release</h1>
      <div className="flex flex-row justify-center items-center gap-8">
        <img src="/images/logo.jpg" className="size-32"></img>
        <p className="text-[9rem] font-bold">0.14</p>
      </div>
    </main>
  );
};
