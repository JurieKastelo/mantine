import { Text, Box, Button, Divider, Grid } from "@mantine/core";
import Image from "next/image";

import kascard from "public/kastelo-card-png.png";

import Animation from "../components/animations/Animation";
import FadeInView from "../components/animations/FadeInView";

export function Home() {
  return (
    <>
      <Box
        visibleFrom="md"
        style={{
          maxWidth: "1200px",
          padding: "15px 25px",
          margin: "auto",
        }}
      >
        <Grid>
          <Grid.Col span={6}>
            <Box mb={20}>
              <Text style={{ fontSize: 16 }}>
                <span style={{ fontWeight: 600 }}>Tech</span> meets{" "}
                <span style={{ fontWeight: 600 }}>money</span>, you meet{" "}
                <span style={{ fontWeight: 600 }}>Kastelo</span>
              </Text>
            </Box>

            <Box>
              <Text style={{ fontSize: 48, fontWeight: 400 }}>
                Maximize your
              </Text>
              <Text style={{ fontSize: 48, fontWeight: 400 }}>
                finance with our
              </Text>
              <Text style={{ fontSize: 48, fontWeight: 600 }}>
                innovative technology.
              </Text>
              <Divider
                w={500}
                color="secondary"
                size={5}
                style={{ borderRadius: 10 }}
              />
              <Box style={{ maxWidth: 550 }}>
                <Animation Ftimeout={3}>
                  <Text mt={30} style={{ fontSize: 22 }}>
                    Welcome to 21st century savings.
                    <br /> Say goodbye to fees and low interest rates, and
                    unleash your financial potential.
                  </Text>
                </Animation>
              </Box>
              <FadeInView top="-30px" timeout={3} Ftimeout={3}>
                <Button
                  mt={30}
                  bg="secondary"
                  style={{ width: 220, borderRadius: 8 }}
                >
                  Get Started Now
                </Button>
              </FadeInView>
            </Box>
          </Grid.Col>
          <Animation Ftimeout={2} Gtimeout={2}>
            <Box
              style={{
                maxWidth: "1200px",
                padding: "15px 25px",
                margin: "auto",
                display: "flex",
              }}
            >
              <Grid>
                <Grid.Col
                  span={12}
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Image
                    src={kascard}
                    alt="card"
                    style={{ maxWidth: 420, height: "auto" }}
                  />
                </Grid.Col>
              </Grid>
            </Box>
          </Animation>
        </Grid>
      </Box>
      <Animation Ftimeout={2} Gtimeout={2}>
        <Box
          hiddenFrom="md"
          style={{
            maxWidth: "1200px",
            padding: "15px 25px",
            margin: "auto",
          }}
        >
          <Grid>
            <Grid.Col
              span={12}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                src={kascard}
                alt="card"
                style={{ maxWidth: 310, height: "auto" }}
              />
            </Grid.Col>
          </Grid>
        </Box>
      </Animation>
      <Box
        hiddenFrom="md"
        style={{
          maxWidth: "1200px",
          padding: "15px 25px",
          margin: "auto",
        }}
      >
        <Grid>
          <Grid.Col span={12}>
            <Box mb={20}>
              <Text style={{ fontSize: 14 }}>
                <span style={{ fontWeight: 600 }}>Tech</span> meets{" "}
                <span style={{ fontWeight: 600 }}>money</span>, you meet{" "}
                <span style={{ fontWeight: 600 }}>Kastelo</span>
              </Text>
            </Box>
            <Box>
              <Text style={{ fontSize: 28, fontWeight: 400 }}>
                Maximize your
              </Text>
              <Text style={{ fontSize: 28, fontWeight: 400 }}>
                finance with our
              </Text>
              <Text style={{ fontSize: 28, fontWeight: 600 }}>
                innovative technology.
              </Text>
              <Divider
                w={500}
                color="secondary"
                size={5}
                style={{ borderRadius: 10 }}
              />
              <Box>
                <Text mt={30} style={{ fontSize: 16 }}>
                  Welcome to 21st century savings.
                  <br /> Say goodbye to fees and low interest rates, and unleash
                  your financial potential.
                </Text>
              </Box>
              <Button
                mt={30}
                bg="secondary"
                style={{ width: 220, borderRadius: 8 }}
              >
                Get Started Now
              </Button>
            </Box>
          </Grid.Col>
        </Grid>
      </Box>

      <Box
        visibleFrom="md"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          backgroundColor: "#FAFAFA",
          paddingTop: 70,
          paddingBottom: 70,
          paddingLeft: 4,
          paddingRight: 4,
          marginTop: 70,
        }}
      >
        <Image src="/wallet.svg" alt="Wallet" width={50} height={50} />
        <Text
          variant="h2"
          style={{
            "& .secondary": { color: "secondary.main" },
            fontSize: 40,
            marginBottom: 30,
            marginTop: 30,
          }}
        >
          <span style={{ fontWeight: 500 }}>Pay</span>{" "}
          <span style={{ fontWeight: 700 }}>anywhere, anytime</span>
        </Text>
        <Text
          style={{
            fontSize: 21,
          }}
        >
          You can have collective gains and individual benefits. <br /> The
          Kastelo multi-currency card in partnership with Mastercard brings you
          an African first. <br /> Our card converts almost anything.
        </Text>
      </Box>
      <Box
        hiddenFrom="md"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          backgroundColor: "#FAFAFA",
          paddingTop: 70,
          paddingBottom: 70,
          paddingLeft: 30,
          paddingRight: 30,
        }}
      >
        <Image src="/wallet.svg" alt="Wallet" width={50} height={50} />
        <Text
          variant="h2"
          style={{
            "& .secondary": { color: "secondary.main" },
            fontSize: 28,
            marginBottom: 30,
            marginTop: 30,
          }}
        >
          <span style={{ fontWeight: 500 }}>Pay</span>{" "}
          <span style={{ fontWeight: 700 }}>anywhere, anytime</span>
        </Text>
        <Text
          style={{
            fontSize: 16,
          }}
        >
          You can have collective gains and individual benefits. <br /> The
          Kastelo multi-currency card in partnership with Mastercard brings you
          an African first. <br /> Our card converts almost anything.
        </Text>
      </Box>
    </>
  );
}
