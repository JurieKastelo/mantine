import { Box, Container, MantineProvider, Text } from "@mantine/core";

import { RichTextEdditor } from "../components/RichTextEdditor";
import { Carouself } from "../components/Carousel";
import { Dropfile } from "../components/Dropfile";
import { DatePicker } from "../components/Datepicker";
import { ColorSchemeToggle } from "../components/CoulerScheme/ColorSchemeToggle";
import { DemDropfilePreviewo } from "../components/DropfilePreview";
import { Spotlights } from "../components/Spotlight";
import { FormValidation } from "../components/Forms/FormValidation";
import { NestedArrays } from "../components/Forms/NestedArrays";
import { NestedObjects } from "../components/Forms/NestedObjects";
import { ListItems } from "../components/ListItems";
import { FormWithMultipleSteps } from "../components/Forms/FormWithMultipleSteps";
import { FindScheme } from "../components/CoulerScheme/FindScheme";

export default function HomePage() {
  return (
    <MantineProvider>
      <Container>
        <Text mt={100} fw={600} ta="center" style={{ fontSize: 48 }}>
          Mantine Component Demo.
        </Text>
      </Container>
      <Text mb={30} mt={100} fw={600} ta="center" bg="grey" c="gold">
        Date Picker
      </Text>
      <Container>
        <DatePicker />
      </Container>

      <Text mb={30} mt={200} fw={600} ta="center" bg="grey" c="gold">
        Dropfile Preview
      </Text>
      <Container>
        <DemDropfilePreviewo />
      </Container>

      <Text mb={30} mt={200} fw={600} ta="center" bg="grey" c="gold">
        Dropfile
      </Text>
      <Container>
        <Dropfile />
      </Container>

      <Text mb={30} mt={200} fw={600} ta="center" bg="grey" c="gold">
        Spotlight
      </Text>
      <Container ta="center">
        <Spotlights />
      </Container>

      <Text mb={30} mt={200} fw={600} ta="center" bg="grey" c="gold">
        RichTextEdditor
      </Text>
      <Container>
        <RichTextEdditor />
      </Container>

      <Text mb={30} mt={200} fw={600} ta="center" bg="grey" c="gold">
        Carousel
      </Text>
      <Container>
        <Carouself />
      </Container>
      <Text mb={30} mt={200} fw={600} ta="center" bg="grey" c="gold">
        Form validation
      </Text>
      <Container>
        <FormValidation />
      </Container>
      <Text mb={30} mt={200} fw={600} ta="center" bg="grey" c="gold">
        Nested arrays
      </Text>
      <Container>
        <NestedArrays />
      </Container>
      <Text mb={30} mt={200} fw={600} ta="center" bg="grey" c="gold">
        Nested objects
      </Text>
      <Container>
        <ListItems />
      </Container>
      <Text mb={30} mt={200} fw={600} ta="center" bg="grey" c="gold">
        List items recording. &ldquo;(items are draggable to change order of
        list.)&rdquo;
      </Text>
      <Container>
        <ListItems />
      </Container>
      <Text mb={30} mt={200} fw={600} ta="center" bg="grey" c="gold">
        Form with multiple steps
      </Text>
      <Container>
        <FormWithMultipleSteps />
      </Container>

      <Text mb={30} mt={200} fw={600} ta="center" bg="grey" c="gold">
        Color scheme toggle
      </Text>
      <Container>
        <ColorSchemeToggle />
      </Container>
      <Text mb={30} mt={200} fw={600} ta="center" bg="grey" c="gold">
        System color scheme
      </Text>
      <Container ta="center">
        <FindScheme />
      </Container>
      <Box h={300} />
    </MantineProvider>
  );
}
