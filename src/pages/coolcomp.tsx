import { Box, Container, MantineProvider, Text } from "@mantine/core";

import { RichTextEdditor } from "@/components/CoolComponents/RichTextEdditor";
import { Carouself } from "@/components/CoolComponents/Carousel";
import { Dropfile } from "@/components/CoolComponents/Dropfile";
import { DatePicker } from "@/components/CoolComponents/Datepicker";
import { ColorSchemeToggle } from "../components/CoolComponents/CoulerScheme/ColorSchemeToggle";
import { DemDropfilePreviewo } from "@/components/CoolComponents/DropfilePreview";
import { Spotlights } from "@/components/CoolComponents/Spotlight";
import { FormValidation } from "@/components/CoolComponents/Forms/FormValidation";
import { NestedArrays } from "@/components/CoolComponents/Forms/NestedArrays";
import { NestedObjects } from "@/components/CoolComponents/Forms/NestedObjects";
import { ListItems } from "@/components/CoolComponents/ListItems";
import { FormWithMultipleSteps } from "@/components/CoolComponents/Forms/FormWithMultipleSteps";
import { FindScheme } from "@/components/CoolComponents/CoulerScheme/FindScheme";

export default function HomePage() {
  return (
    <MantineProvider>
      <Container>
        <Text mt={100} fw={600} ta="center" style={{ fontSize: 48 }}>
          Mantine Component Demo?
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
