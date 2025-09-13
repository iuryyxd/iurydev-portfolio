import Image from "next/image";

export default function NotFound() {
  return (
    <div className="flex min-h-dvh w-full flex-col items-center justify-center gap-5 px-5 text-center">
      <Image src="/assets/404.png" alt="404" width={300} height={300} />
      <p className="text-sm text-gray-400">
        A página que você está procurando não existe ou foi movida.
      </p>
    </div>
  );
}
