import { WETH } from '@/components/weth';

interface PageProps {
  params: {};
  searchParams: Record<string, string | string[] | undefined>;
}

export default function Page({}: PageProps) {
  return (
    <>
      <section className="h-full py-10">
        <div className="container">
          <WETH />
        </div>
      </section>
    </>
  );
}
