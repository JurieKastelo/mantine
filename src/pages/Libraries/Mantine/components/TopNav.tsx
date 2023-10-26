import {
  Menu,
  Group,
  Burger,
  Container,
  Button,
  Box,
  Text,
} from "@mantine/core";
import Link from "next/link";
import Image from "next/image";
import { useDisclosure } from "@mantine/hooks";
import { IconArrowNarrowRight } from "@tabler/icons-react";
import Logo from "../public/logo-and-kastelo.svg";

const links = [
  {
    link: "#1",
    label: "Products",
    links: [
      { link: "/intrest-account", label: "Intrest Account" },
      { link: "/foreign-exchange", label: "Foreign Exchange" },
      { link: "/algorithmic-trading", label: "Algorithmic Trading" },
      { link: "/kastelo-cards", label: "Kastelo Cards" },
    ],
  },
  { link: "/team", label: "Team" },
  { link: "/faq", label: "FAQ" },
];

const Mitems = [
  { link: "/intrest-account", label: "Intrest Account" },
  { link: "/foreign-exchange", label: "Foreign Exchange" },
  { link: "/algorithmic-trading", label: "Algorithmic Trading" },
  { link: "/kastelo-cards", label: "Kastelo Cards" },

  { link: "/team", label: "Team" },
  { link: "/faq", label: "FAQ" },
];

export default function TopNav() {
  const [opened, { toggle }] = useDisclosure(false);

  const items = links.map((link) => {
    const menuItems = link.links?.map((item) => (
      <Menu.Item
        key={item.link}
        style={{
          textDecoration: "none",
          fontSize: "16px",
          transition: "all 0.2s ease-in-out",
        }}
      >
        <Link
          href={item.link}
          style={{ color: "#000", textDecoration: "none" }}
        >
          {item.label}
        </Link>
      </Menu.Item>
    ));

    if (menuItems) {
      return (
        <Menu
          key={link.label}
          trigger="hover"
          transitionProps={{ exitDuration: 0 }}
          withinPortal
        >
          <Menu.Target>
            <Link
              href={link.link}
              style={{
                color: "#000",
                textDecoration: "none",
                fontSize: "16px",
                transition: "all 0.2s ease-in-out",
              }}
              onClick={(event) => event.preventDefault()}
            >
              {link.label}
            </Link>
          </Menu.Target>
          <Menu.Dropdown
            style={{
              borderRadius: 20,
              boxShadow:
                "0 8px 10px rgba(0, 0, 0, 0.1), 0 0 0 rgba(0, 0, 0, 0.1)",
              border: "none",
            }}
          >
            {menuItems}
          </Menu.Dropdown>
        </Menu>
      );
    }

    return (
      <Link
        key={link.label}
        href={link.link}
        style={{
          color: "#000",
          textDecoration: "none",
          fontSize: "16px",
          transition: "all 0.2s ease-in-out",
        }}
        onClick={(event) => event.preventDefault()}
      >
        {link.label}
      </Link>
    );
  });

  const mItems = Mitems.map((item) => (
    <Box style={{ marginBlockStart: 10, marginRight: 10 }} key={item.link}>
      <Link href={item.link} style={{ textDecoration: "none" }}>
        <Text style={{ color: "#000" }}>{item.label}</Text>
      </Link>
    </Box>
  ));

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1,
        backgroundColor: "#fff",
      }}
    >
      <Container
        visibleFrom="md"
        style={{
          maxWidth: "1200px",
          display: "flex",
          alignItems: "center",
          padding: "30px 25px",
        }}
      >
        <Box>
          <Image src={Logo} width={247} height={45} quality={100} alt="logo" />
        </Box>
        <Box style={{ flexGrow: 1 }} />
        <Group
          gap={60}
          visibleFrom="sm"
          style={{ marginLeft: 30, marginRight: 30 }}
        >
          {items}
        </Group>

        <Button
          bg="secondary"
          color="white"
          variant="outline"
          style={{
            height: 45,
            width: 130,
            borderRadius: 10,
            marginRight: 30,
            fontWeight: 500,
            border: "1px solid #c4ab6c",
            transition: "all 0.2s ease-in-out",
          }}
        >
          Log In
          <IconArrowNarrowRight style={{ marginLeft: 10 }} />
        </Button>
        <Button
          color="secondary"
          variant="outline"
          style={{
            height: 45,
            width: 130,
            borderRadius: 10,
            fontWeight: 500,
            transition: "all 0.2s ease-in-out",
          }}
        >
          Sign up
          <IconArrowNarrowRight style={{ marginLeft: 10 }} />
        </Button>
      </Container>
      <Container
        hiddenFrom="md"
        style={{
          maxWidth: "1200px",
          display: "flex",
          alignItems: "center",
          padding: "30px 25px",
        }}
      >
        <Box>
          <Image
            src="/logo-and-kastelo.svg"
            width={160}
            height={30}
            quality={100}
            alt="logo"
          />
        </Box>
        <Box style={{ flexGrow: 1 }} />
        <Box>
          <Menu position="bottom" opened={opened} onClose={() => toggle()}>
            <Menu.Target>
              <Burger opened={opened} onClick={toggle} size="sm" />
            </Menu.Target>
            <Menu.Dropdown
              style={{
                borderRadius: 10,
                width: 250,
                height: 400,
              }}
            >
              {mItems}
            </Menu.Dropdown>
          </Menu>
        </Box>
      </Container>
    </header>
  );
}
