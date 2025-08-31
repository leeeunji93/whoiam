import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Desktop, Window, TitleBar, Body, StatusRow,
  IconGrid, IconButton, IconLabel, IconGlyph
} from "./styled";

export default function DesktopPage() {
  const navigate = useNavigate();

  return (
    <Desktop>
      <Window>
        <TitleBar>System Disk</TitleBar>
        <StatusRow>
          <span>777K in disk</span>
          <span>686K available</span>
        </StatusRow>

        <Body>
          <IconGrid>
            {/* 클릭 가능: Disk Copy */}
            <IconButton $float onClick={() => navigate("/intro")} aria-label="Disk Copy">
              <IconGlyph>💾</IconGlyph>
            <IconLabel>Your Disk</IconLabel>
            </IconButton>

            {/* 비활성/축소 */}
            <IconButton $disabled aria-disabled tabIndex={-1}>
              <IconGlyph $small>📁</IconGlyph>
              <IconLabel $small>Etc</IconLabel>
            </IconButton>

            {/* 비활성/축소 */}
            <IconButton $disabled aria-disabled tabIndex={-1}>
              <IconGlyph $small>🔤</IconGlyph>
              <IconLabel $small>..</IconLabel>
            </IconButton>
          </IconGrid>
        </Body>
      </Window>
    </Desktop>
  );
}
