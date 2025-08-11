import Button from "@/components/common/Button/Button";

export default function SocialLoginButtons() {
  return (
    <div className="flex flex-col gap-2 mt-4">
      <Button>Naver 로그인</Button>
      <Button>Kakao 로그인</Button>
      <Button>Google 로그인</Button>
      <Button>Apple 로그인</Button>
    </div>
  );
}