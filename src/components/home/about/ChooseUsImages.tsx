export default function ChooseUsImages({ path }: { path: string }) {
  return (
    <div className="h-[22rem] max-h-[22rem] w-full">
      <img className="h-full w-full" src={path} alt="3D Icon" />
    </div>
  );
}
