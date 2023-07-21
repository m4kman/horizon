export default function ChooseUsImages({ path }: { path: string }) {
  return (
    <img
      className="max-h-[24rem] min-h-[22rem] w-full"
      src={path}
      alt="3D Icon"
    />
  );
}
