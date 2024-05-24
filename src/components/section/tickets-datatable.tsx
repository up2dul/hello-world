import type { ColumnDef } from '@tanstack/react-table';
import { capitalize, uid } from 'radash';

import { DataTable } from '~/components/common';
import type { Ticket } from '~/lib/types';
import { cn, formatDate, formatTime } from '~/lib/utils';

// temporary tickets data
const ticketsData: Omit<Ticket, 'assignee'>[] = [
  {
    id: uid(4),
    title: 'Contact email not linked',
    customerName: 'John Doe',
    imgUrl: 'https://placekitten.com/200/300',
    priority: 'high',
    createdAt: '2024-05-24T01:28:06+0700',
    updatedAt: '2024-05-24T01:28:06+0700',
  },
  {
    id: uid(4),
    title: 'Unable to login',
    customerName: 'Jane Doe',
    imgUrl: 'https://placekitten.com/200/300',
    priority: 'normal',
    createdAt: '2024-02-24T01:28:06+0700',
    updatedAt: '2024-02-24T01:28:06+0700',
  },
  {
    id: uid(4),
    title: 'How do I reset my password?',
    customerName: 'Bob Smith',
    imgUrl: 'https://placekitten.com/200/300',
    priority: 'low',
    createdAt: '2024-01-24T01:28:06+0700',
    updatedAt: '2024-01-24T01:28:06+0700',
  },
];

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
