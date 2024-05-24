import type { ColumnDef } from '@tanstack/react-table';
import { capitalize } from 'radash';

import { DataTable } from '~/components/common';
import { ticketsData } from '~/lib/data';
import type { Ticket } from '~/lib/types';
import { cn, formatDate, formatTime } from '~/lib/utils';

const columns: ColumnDef<Omit<Ticket, 'assignee'>>[] = [
  {
    accessorKey: 'imgUrl',
    header: '',
    cell: ({ row }) => {
      return (
        <img
          className="rounded-full w-10 h-10 object-cover"
          src={row.getValue('imgUrl')}
          alt="Customer avatar"
        />
      );
    },
  },
  {
    accessorKey: 'title',
    header: 'Ticket details',
  },
  {
    accessorKey: 'customerName',
    header: 'Customer name',
  },
  {
    accessorKey: 'createdAt',
    header: 'Date',
    cell: ({ row }) => {
      return (
        <>
          <p>{formatDate(row.getValue('createdAt'))}</p>
          <p className="text-muted-foreground">
            {formatTime(row.getValue('createdAt'))}
          </p>
        </>
      );
    },
  },
  {
    accessorKey: 'priority',
    header: 'Priority',
    cell: ({ row }) => {
      const priority = row.getValue('priority') as string;
      return (
        <p
          className={cn('px-2 py-1 rounded-xl text-center text-white', {
            'bg-yellow-500': priority === 'low',
            'bg-green-600': priority === 'normal',
            'bg-red-600': priority === 'high',
          })}
        >
          {capitalize(priority)}
        </p>
      );
    },
  },
];

export const TicketsDataTable = () => {
  return <DataTable columns={columns} data={ticketsData} />;
};
