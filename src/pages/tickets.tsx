import { useTranslation } from 'react-i18next';

import { Dashboard } from '~/components/layout';
import { TicketsDataTable } from '~/components/section';

export default function Tickets() {
  const { t } = useTranslation();
  return (
    <Dashboard>
      <h1 className="text-2xl">{t('tickets.all')}</h1>

      <section className="mt-8">
        <TicketsDataTable />
      </section>
    </Dashboard>
  );
}
