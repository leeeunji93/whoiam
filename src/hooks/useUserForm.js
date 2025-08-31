// src/hooks/useUserForm.js
import { useState } from "react";
import { useAtom } from "jotai";
import { userAtom } from "@/store";

export default function useUserForm(onSuccess) {
  const [user, setUser] = useAtom(userAtom);
  const [local, setLocal] = useState(user);

  const isValid = local.name.trim() && local.ageBand && local.gender;

  const onChange = (key) => (e) => {
    setLocal((prev) => ({ ...prev, [key]: e.target.value }));
  };

  const onSubmit = (e) => {
    e?.preventDefault?.();
    if (!isValid) return;
    setUser(local);
    onSuccess?.();
  };

  return { local, isValid, onChange, onSubmit };
}
