import React from "react";
import { useNavigate } from "react-router-dom";
import { Field, Label, TextInput, Select, TextArea, PrimaryButton } from "@/components/Input";
import { Shell, Window, TitleBar, Body } from "./styled";
import { useUserForm } from "@/hooks";

function IntroPage() {
  const navigate = useNavigate();
  const { local, isValid, onChange, onSubmit } = useUserForm(() => navigate("/qna"));

  return (
    <Shell>
      <Window>
        <TitleBar>Welcome</TitleBar>
        <Body>
          <form onSubmit={onSubmit} noValidate>
            <Field>
              <Label htmlFor="name">이름</Label>
              <TextInput
                id="name"
                placeholder="예: 홍길동"
                value={local.name}
                onChange={onChange("name")}
                autoComplete="name"
              />
            </Field>

            <Field>
              <Label htmlFor="age">나이대</Label>
              <Select id="age" value={local.ageBand} onChange={onChange("ageBand")}>
                <option value="">선택</option>
                <option value="10">10대</option>
                <option value="20">20대</option>
                <option value="30">30대</option>
                <option value="40">40대</option>
                <option value="50+">50대 이상</option>
              </Select>
            </Field>

            <Field>
              <Label htmlFor="gender">성별</Label>
              <Select id="gender" value={local.gender} onChange={onChange("gender")}>
                <option value="">선택</option>
                <option value="woman">여성</option>
                <option value="man">남성</option>
                <option value="nonbinary">논바이너리</option>
                <option value="prefer_not">응답 거부</option>
              </Select>
            </Field>

            <Field>
              <Label htmlFor="bio">추가 정보</Label>
              <TextArea
                id="bio"
                placeholder="좀 더 알려주고 싶은 정보가 있다면 알려주세요."
                maxLength={200}
                value={local.bio}
                onChange={onChange("bio")}
              />
            </Field>

            <PrimaryButton type="submit" disabled={!isValid}>다음</PrimaryButton>
          </form>
        </Body>
      </Window>
    </Shell>
  );
}

export default IntroPage;
