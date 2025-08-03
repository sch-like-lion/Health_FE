import Link from "next/link";
export default function Settings() {
  return (
    <div>
      <h1>설정컴포넌트</h1>
      <div><Link href="/settings/app-setting">앱설정</Link></div>
      <div><Link href="/settings/profile-setting">프로필설정</Link></div>
    </div>
  );
}