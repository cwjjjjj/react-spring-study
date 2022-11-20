import { useEffect } from "react";
import { useSpring, animated } from "@react-spring/web";
import { css } from "@emotion/react";

const params = new URL(document.location.toString()).searchParams;
const url = params.get("url");
const bgColor = params.get("color");

export default function Home() {
  const springs = useSpring({
    from: { x: 0 },
    to: { x: 100 },
  });

  return (
    <div
      style={{
        minHeight: "100vh",
        minWidth: "100vw",
        backgroundColor: `${bgColor ?? "transparent"}`,
      }}
      css={css`
        color: red;
      `}
    >
      即刻中转页
      <animated.div
        style={{
          width: 80,
          height: 80,
          background: "#ff6d6d",
          borderRadius: 8,
          ...springs,
        }}
      />
    </div>
  );
}
