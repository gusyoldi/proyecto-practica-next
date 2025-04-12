import { Button } from '@/components/ui/Button';
import { GET } from './api/route';

export default async function Page() {
  const data = await GET();
  console.log(data);

  return (
    <div>
      <h1 className="text-red-500">Home</h1>
      <Button>Button</Button>
    </div>
  );
}
