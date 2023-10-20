import { Badge } from '@mantine/core';
import { useColorScheme } from '@mantine/hooks';

export function FindScheme() {
  const colorScheme = useColorScheme();

  return (
    <Badge color={colorScheme === 'dark' ? 'blue' : 'teal'} variant="filled">
      Your system color scheme is {colorScheme}
    </Badge>
  );
}
