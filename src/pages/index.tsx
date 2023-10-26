import { Box, Button, Typography } from "@mui/material";
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
        }}
      >
        <Box sx={{ mb: 3 }}>
          <Typography fontSize={40}>Choose a library!</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
            width: 220,
          }}
        >
          <Button
            fullWidth
            variant="outlined"
            onClick={() => {
              router.push("/Libraries/Mantine/pages/");
            }}
          >
            Mantine
          </Button>
          <Button
            fullWidth
            disabled
            variant="outlined"
            onClick={() => {
              router.push("/tailwind");
            }}
          >
            Tailwind
          </Button>
          <Button
            sx={{ mt: 5 }}
            fullWidth
            disabled
            variant="outlined"
            onClick={() => {
              router.push("/randome-cool-things");
            }}
          >
            Randome Cool Things
          </Button>
          <Box sx={{ position: "absolute", bottom: 100 }}>
            <Typography fontSize={18}>
              Click on{" "}
              <Link href="https://github.com/JurieKastelo/mantine">GitHub</Link>{" "}
              to access the repository.
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
}
