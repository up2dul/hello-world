import { Dashboard } from '~/components/layout';
import { OverviewCharts, OverviewTotal } from '~/components/section';

export default function Overview() {
  return (
    <Dashboard>
      <h1 className="text-2xl">Overview</h1>

      <section className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
        <OverviewTotal />
      </section>

      <section className="mt-8">
        <h2 className="text-xl">Tickets graph in 1 year</h2>
        <OverviewCharts />
      </section>
    </Dashboard>
  );
}
