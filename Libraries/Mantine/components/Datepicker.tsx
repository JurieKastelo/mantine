import { DateTimePicker } from '@mantine/dates';
import '@mantine/dates/styles.css';

export function DatePicker() {
  return (
    <DateTimePicker
      variant="filled"
      size="md"
      radius="md"
      label="Input label"
      withAsterisk
      description="Input description"
      // error="select correct input"
      placeholder="Input placeholder"
    />
  );
}
