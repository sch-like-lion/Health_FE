import Link from "next/link";

export default function SelectExercise() {
  return (
    <div>
      <div><Link href="/exercise/bucket/recommend">추천 운동 미리보기</Link></div>
      <div><Link href="/exercise/bucket/custom">내가 운동 정하기</Link></div>
    </div>
  );
}