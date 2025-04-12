import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '.';

export const MovieCard = () => {
  return (
    <Card>
      <CardContent>
        <CardHeader>
          <CardTitle>Title</CardTitle>
        </CardHeader>

        <CardDescription>Descripcion</CardDescription>
      </CardContent>
    </Card>
  );
};
