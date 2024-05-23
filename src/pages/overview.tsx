import { OverviewCard } from '~/components/common';
import { Dashboard } from '~/components/layout';

export default function Overview() {
  return (
    <Dashboard>
      <h1 className="text-2xl">Overview</h1>

      <section className="mt-8 grid grid-cols-4 gap-8 text-center">
        <OverviewCard title="Unresolved" content="60" />
        <OverviewCard title="Overdue" content="16" />
        <OverviewCard title="Open" content="43" />
        <OverviewCard title="On Hold" content="64" />
      </section>
    </Dashboard>
  );
}
