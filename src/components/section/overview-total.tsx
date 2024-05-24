import { OverviewCard } from '~/components/common';

export const OverviewTotal = () => {
  return (
    <>
      <OverviewCard title="Unresolved" content="60" />
      <OverviewCard title="Overdue" content="16" />
      <OverviewCard title="Open" content="43" />
      <OverviewCard title="On Hold" content="64" />
    </>
  );
};
