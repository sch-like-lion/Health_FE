import Link from "next/link";
export default function Bucket({ type }) {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">
        {type === 'recommend' ? '추천 운동 미리보기' : '내가 운동 정하기'}
      </h1>
      
      {type === 'recommend' ? (
        <div>
          <p>추천 운동 목록이 여기에 표시됩니다.</p>
          {/* 추천 운동 관련 컴포넌트들 */}
        </div>
      ) : (
        <div>
          <p>사용자 정의 운동 설정이 여기에 표시됩니다.</p>
          {/* 사용자 정의 운동 관련 컴포넌트들 */}
        </div>
      )}
      <div><Link href="/exercise/ex-stat">시작하기</Link></div>
    </div>
  );
}