import { Box, Button } from "@mantine/core";
import { useRouter } from "next/router";

export default function Display() {
  const router = useRouter();
  return (
    <>
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Box
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <Button
            fullWidth
            onClick={() => {
              router.push("kastelo-home-page");
            }}
          >
            Kastelo Home Page
          </Button>
          <Button
            fullWidth
            onClick={() => {
              router.push("/coolcomp");
            }}
          >
            Some Compnents
          </Button>
        </Box>
      </Box>
    </>
  );
}
