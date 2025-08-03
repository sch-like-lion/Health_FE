import Link from "next/link";

export default function NavigationBar() {
  return (
    <>
      <nav>
        <div><Link href={"/callender"}>달력</Link></div>
        <div><Link href={"/exercise"}>운동</Link></div>
        <div><Link href={"/"}>홈고민중</Link></div>
        <div><Link href={"/ranking"}>랭킹</Link></div>
        <div><Link href={"/settings"}>설정</Link></div>
        <div><Link href={"/shop"}>캐릭터</Link></div>

      </nav>
    </>
  );
}