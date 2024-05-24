import { Card, CardContent, CardHeader, CardTitle } from '~/components/ui/card';

type OverviewCardProps = {
  title: string;
  content: string;
};

export const OverviewCard = ({ title, content }: OverviewCardProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg text-primary/80">{title}</CardTitle>
      </CardHeader>
      <CardContent className="-mt-4 text-5xl">{content}</CardContent>
    </Card>
  );
};
