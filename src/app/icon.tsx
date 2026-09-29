import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#1E4FD8",
          color: "#FFFFFF",
          fontSize: 18,
          fontWeight: 800,
          letterSpacing: "-0.03em",
        }}
      >
        YG
      </div>
    ),
    { ...size },
  );
}
