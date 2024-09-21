import { WETH } from '@/components/weth';

interface PageProps {
  params: {};
  searchParams: Record<string, string | string[] | undefined>;
}

export default function Page({}: PageProps) {
  return (
    <>
      <section className="py-10">
        <WETH />
      </section>
    </>
  );
}
