import { Box, Button } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";

export default function HomePage() {
  const router = useRouter();
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          gap: "10px",
        }}
      >
        <Button
          variant="outlined"
          onClick={() => {
            router.push("/kastelo-home-page");
          }}
        >
          Kastelo Home Page
        </Button>
        <Button
          variant="outlined"
          onClick={() => {
            router.push("/mantine");
          }}
        >
          Mantine
        </Button>
        <Box sx={{ position: "absolute", bottom: 100 }}>
          Click on{" "}
          <Link href="https://github.com/JurieKastelo/mantine">GitHub</Link> to
          access the repository.
        </Box>
      </Box>
    </>
  );
}
