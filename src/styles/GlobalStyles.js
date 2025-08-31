/** @jsxImportSource @emotion/react */
import { Global, css } from "@emotion/react";
import theme from "@/styles/theme";

export default function GlobalStyles() {
  return (
    <Global
      styles={css`
        @font-face {
          font-family: "ChicagoFLF";
          src: url("/fonts/ChicagoFLF.ttf") format("truetype");
          font-weight: 400;
          font-style: normal;
          font-display: swap;
        }

        * { box-sizing: border-box; }
        html, body, #root { height: 100%; }

        body {
          margin: 0;
          font-family: "Lucida Grande","Helvetica Neue",Arial,system-ui,-apple-system,sans-serif;
          color: ${theme.colors.text};

          /* 전역 도트 배경 */
          background:
            radial-gradient(circle at 1px 1px, #bfc5ca 1px, transparent 1.2px) 0 0 / 6px 6px,
            ${theme.colors.bg};
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        h1, h2, h3, .ui-heading, label {
          font-family: "ChicagoFLF","Lucida Grande","Helvetica Neue",Arial,sans-serif;
          letter-spacing: .2px;
        }

        button { font-family: inherit; }
      `}
    />
  );
}
