const blobs = [
  { x: "2%", y: "8%", w: 320, h: 320, color: "#FF7A59", delay: 0 },
  { x: "82%", y: "6%", w: 300, h: 300, color: "#D4A27F", delay: 1 },
  { x: "85%", y: "22%", w: 340, h: 340, color: "#4B5EFC", delay: 2.5 },
  { x: "1%", y: "28%", w: 280, h: 280, color: "#6C5CE7", delay: 3.5 },
  { x: "78%", y: "38%", w: 320, h: 320, color: "#6D00CC", delay: 1.5 },
  { x: "4%", y: "45%", w: 300, h: 300, color: "#FF7A59", delay: 4 },
  { x: "82%", y: "52%", w: 320, h: 320, color: "#22C55E", delay: 0.5 },
  { x: "0%", y: "60%", w: 340, h: 340, color: "#4B5EFC", delay: 3 },
  { x: "80%", y: "68%", w: 300, h: 300, color: "#D4A27F", delay: 2 },
  { x: "3%", y: "76%", w: 280, h: 280, color: "#6C5CE7", delay: 4.5 },
  { x: "78%", y: "84%", w: 320, h: 320, color: "#6D00CC", delay: 1 },
  { x: "2%", y: "92%", w: 300, h: 300, color: "#22C55E", delay: 3.5 },
];

export default function Blobs() {
  return (
    <>
      {blobs.map((b, i) => (
        <div
          key={i}
          className="hidden lg:block fixed pointer-events-none"
          style={{
            left: b.x,
            top: b.y,
            width: b.w,
            height: b.h,
            borderRadius: "50%",
            background: b.color,
            opacity: 0.15,
            filter: "blur(70px)",
            animation: `blobFloat 10s ${b.delay}s ease-in-out infinite`,
          }}
        />
      ))}
    </>
  );
}
