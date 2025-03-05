import Image from "next/image";
import Link from "next/link";
import { Box } from "@mui/material";
import { SponsorFragment } from "@/actions/sponsors/sponsors.generated";

interface SponsorCardProps {
  sponsor: SponsorFragment;
}

export default function SponsorCard({ sponsor }: SponsorCardProps) {
  const imageUrl = sponsor.image?.srcset?.split(", ")[0].split(" ")[0];

  const content = (
    <Box
      sx={{
        width: "100%",
        aspectRatio: "3/2",
        position: "relative",
        borderRadius: 2,
        overflow: "hidden",
        cursor: sponsor.homepageUrl ? "pointer" : "default",
        backgroundColor: "white",
        transition: "transform 0.2s ease-in-out",
        "&:hover": {
          transform: sponsor.homepageUrl ? "scale(1.02)" : "none",
        },
      }}
    >
      {imageUrl && (
        <Image
          src={imageUrl}
          alt={sponsor.name}
          fill
          sizes="(max-width: 768px) 50vw, 33vw"
          style={{
            objectFit: "contain",
            padding: "1rem",
          }}
        />
      )}
    </Box>
  );

  if (sponsor.homepageUrl) {
    return (
      <Link href={sponsor.homepageUrl} target="_blank" rel="noopener noreferrer">
        {content}
      </Link>
    );
  }

  return content;
}

