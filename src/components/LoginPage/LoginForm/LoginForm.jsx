"use client";
import { useState } from "react";

import Input from "@/components/common/Input/Input";
import Button from "@/components/common/Button/Button";
import Link from "next/link";

export default function LoginForm() {
  const [loginData, setLoginData] = useState({
    userid: "",
    password: "",
  });
  const loginSubmitHandler = e => {
    e.preventDefault();
  };
  return (
    <>
      <form className="flex flex-col gap-2" onSubmit={loginSubmitHandler}>
        <Input type="text" placeholder="아이디" />
        <Input type="password" placeholder="비밀번호" />
        <Button>로그인</Button>
      </form>
      <div className="flex justify-center gap-2 mt-4">
        <Link href={"/login/id-lost"} className="inline-block p-2 text-sm text-gray-500">아이디 찾기</Link>
        <Link href={"/login/pw-lost"} className="inline-block p-2 text-sm text-gray-500">비밀번호 찾기</Link>
        <Link href={"/signup"} className="inline-block p-2 text-sm text-gray-500">회원가입</Link>
      </div>
    </>
  );
}