"use client"
import React, { useState } from "react";
import styles from "./FindPwForm.module.css"; //module.css 사용

function FindPwForm() {
  const [name, setName] = useState(""); //이름
  const [id, setId] = useState(""); //아이디
  const [email, setEmail] = useState(""); //이메일
  const [code, setCode] = useState(""); //인증번호

  const [isEmailVerified, setIsEmailVerified] = useState(false);
  const [isCodeVerified, setIsCodeVerified] = useState(false);
  const [showPwReset, setShowPwReset] = useState(false); //입력하지 않았을 떄, 입력이 눌ㄹ리지 않음

  const [newPw, setNewPw] = useState(""); //새로운 비밀번호 입력창
  const [confirmPw, setConfirmPw] = useState(""); //비밀번호 확인 창

  const handleSendVerification1 = () => {
    setIsEmailVerified(true); //이메일을 쳐야 인증번호 전송 버튼 가능
  };

  const handleSendVerification2 = () => {
    setIsCodeVerified(true); //인증번호를 쳐야 확인 버튼 가능
  };

  const isFormValid =
    name.trim() && //trim: 공백 제거 &&: 참
    id.trim() &&
    email.trim() &&
    code.trim() &&
    isEmailVerified &&
    isCodeVerified;

  const handleFindPassword = () => {
    setShowPwReset(true); // 비밀번호 재설정 창 열기
  };

  const handlePasswordChange = () => {
    alert("비밀번호가 변경되었습니다.");
    window.location.reload(); // 창 닫기 = 새로고침
  };

  const isPwMismatch = newPw && confirmPw && newPw !== confirmPw; //둘 다 입력되었고, 서로 다르면 → true (비밀번호 불일치) 그렇지 않으면 → false (입력 전이거나, 같으면)

  return (
    <div className={styles.container}>
      {!showPwReset ? (
        <>
          <input
            type="text"
            placeholder="이름"
            value={name}
            onChange={(e) => setName(e.target.value)} //치는 순간 쓰게 해주는 코드
            className={styles.inputFull} //inputFull: css에서 칸 
          />

          <input
            type="text"
            placeholder="아이디"
            value={id}
            onChange={(e) => setId(e.target.value)}
            className={styles.inputFull}
          />

          <div className={styles.inputGroup}>
            <input
              type="email"
              placeholder="이메일"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={styles.inputHalf}
            />
            <button
              className={styles.smallButton}
              onClick={handleSendVerification1}
              disabled={!email.trim()} //안치면 안나타남
            >
              인증번호 전송
            </button>
          </div>

          {isEmailVerified && (
            <div className={styles.verificationMessage}>이메일 인증 완료</div> //인증번호 전송 누를시 나오는 문구
          )} 

          <div className={styles.inputGroup}>
            <input
              type="text"
              placeholder="인증번호"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className={styles.inputHalf}
            />
            <button
              className={styles.smallButton}
              onClick={handleSendVerification2}
              disabled={!code.trim()}
            >
              확인
            </button>
          </div>

          {isCodeVerified && (
            <div className={styles.verificationMessage}>인증번호 확인 완료</div>
          )}

          <button
            className={styles.findButton}
            disabled={!isFormValid}
            onClick={handleFindPassword}
          >
            비밀번호 찾기
          </button>
        </>
      ) : (
        <>
          <input
            type="password"
            placeholder="새로운 비밀번호 입력"
            value={newPw}
            onChange={(e) => setNewPw(e.target.value)}
            className={styles.inputFull}
          />

          <input
            type="password"
            placeholder="새로운 비밀번호 확인"
            value={confirmPw}
            onChange={(e) => setConfirmPw(e.target.value)}
            className={styles.inputFull}
          />

          {isPwMismatch && (
            <div className={styles.errorMessage}>비밀번호가 다릅니다.</div> //다르면 에러 메세지
          )}

          <button
            className={styles.findButton}
            onClick={handlePasswordChange}
            disabled={!newPw || !confirmPw || isPwMismatch} //같아야 버튼 누를수 있음
          >
            비밀번호 변경
          </button>
        </>
      )}
    </div>
  );
}

export default FindPwForm;
