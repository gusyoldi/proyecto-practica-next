import { Button } from '@/components/ui/Button';
import { fetchPerson } from '@/lib/fetchPerson';

export default async function Page() {
  const data = await fetchPerson();
  console.log(data);

  return (
    <div>
      <h1 className="text-red-500">Home</h1>
      <Button>Button</Button>
    </div>
  );
}
