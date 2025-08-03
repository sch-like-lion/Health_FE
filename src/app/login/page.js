import Link from "next/link"

export default function LoginPage() {
  return (
    <>
      <div>여기 로그인 페이지</div>
      <button>로그인</button>
      <div><Link href={"/login/id-lost"}>아이디 찾기</Link></div>
      <div><Link href={"/login/pw-lost"}>비밀번호 찾기</Link></div>
    </>
  )
}