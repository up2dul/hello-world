import { Dashboard } from '~/components/layout';
import { TicketsDataTable } from '~/components/section';

export default function Tickets() {
  return (
    <Dashboard>
      <h1 className="text-2xl">All tickets</h1>

      <section className="mt-8">
        <TicketsDataTable />
      </section>
    </Dashboard>
  );
}
