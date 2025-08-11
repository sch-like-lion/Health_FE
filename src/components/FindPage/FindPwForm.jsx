"use client"
import React, { useState } from "react";
import styles from "./FindPwForm.module.css";

function FindPwForm() {
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");

  const [isEmailVerified, setIsEmailVerified] = useState(false);
  const [isCodeVerified, setIsCodeVerified] = useState(false);
  const [showPwReset, setShowPwReset] = useState(false);

  const [newPw, setNewPw] = useState("");
  const [confirmPw, setConfirmPw] = useState("");

  // 이메일 인증번호 요청
  const handleSendVerification1 = async () => {
    try {
      const res = await fetch("http://fitlog.iubns.net:8080/api/email", {
        method: "POST",
        body: {"email":int},
        // body: JSON.stringify({ email }),
        // headers: { "Content-Type": "application/json" },

      });

      if (!res.ok) throw new Error(`서버 에러: ${res.status}`);

      const data = await res.json();
      console.log("이메일 전송 응답:", data);
      setIsEmailVerified(true);
    } catch (err) {
      console.error("이메일 전송 오류:", err);
    }
  };

  // 인증번호 확인
  const handleSendVerification2 = async () => {
    try {
      const res = await fetch("http://fitlog.iubns.net:8080/api/users/password/verify-code", {
        method: "POST",
       body : {"email": "String", "verificationCode": "String"}
      });

      if (!res.ok) throw new Error(`서버 에러: ${res.status}`);

      const data = await res.json();
      console.log("코드 확인 응답:", data);
      setIsCodeVerified(true);
    } catch (err) {
      console.error("코드 확인 오류:", err);
    }
  };

  const isFormValid =
    name.trim() &&
    id.trim() &&
    email.trim() &&
    code.trim() &&
    isEmailVerified &&
    isCodeVerified;

  // 비밀번호 재설정 버튼 클릭 시
  const handleFindPassword = () => {
    setShowPwReset(true);
  };

  //비밀번호 변경 API
  const handlePasswordChange = async () => {
    try {
      const res = await fetch(`http://fitlog.iubns.net:8080/api/password/reset`, {
        method: "PATCH",
        header parameter :
        -authorization bearer
        {reset token}
        {"newpassword" : "String"}
        // body: JSON.stringify({
        //   id,
        //   name,
        //   email,
        //   newPassword: newPw,
        // }),
      });

      if (!res.ok) throw new Error(`서버 오류: ${res.status}`);

      const data = await res.json();
      console.log("비밀번호 변경 응답:", data);

      alert("비밀번호가 변경되었습니다.");
      window.location.reload();
    } catch (err) {
      console.error("비밀번호 변경 실패:", err);
      alert("비밀번호 변경에 실패했습니다.");
    }
  };

  const isPwMismatch = newPw && confirmPw && newPw !== confirmPw;

  return (
    <div className={styles.container}>
      {!showPwReset ? (
        <>
          <input
            type="text"
            placeholder="이름"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={styles.inputFull}
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
              disabled={!email.trim()}
            >
              인증번호 전송
            </button>
          </div>

          {isEmailVerified && (
            <div className={styles.verificationMessage}>이메일 인증 완료</div>
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
            <div className={styles.errorMessage}>비밀번호가 다릅니다.</div>
          )}

          <button
            className={styles.findButton}
            onClick={handlePasswordChange}
            disabled={!newPw || !confirmPw || isPwMismatch}
          >
            비밀번호 변경
          </button>
        </>
      )}
    </div>
  );
}

export default FindPwForm;





//GPT 돌린 값
// "use client";
// import React, { useState } from "react";
// import styles from "./FindPwForm.module.css";

// function FindPwForm() {
//   const [email, setEmail] = useState("");
//   const [code, setCode] = useState("");
//   const [isEmailVerified, setIsEmailVerified] = useState(false);
//   const [isCodeVerified, setIsCodeVerified] = useState(false);
//   const [showPwReset, setShowPwReset] = useState(false);
//   const [resetToken, setResetToken] = useState("");
//   const [newPw, setNewPw] = useState("");
//   const [confirmPw, setConfirmPw] = useState("");

//   // 이메일 인증번호 요청
//   const handleSendVerification1 = async () => {
//     try {
//       const res = await fetch("http://fitlog.iubns.net:8080/api/email", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ email }),
//       });
//       if (!res.ok) throw new Error(`서버 에러: ${res.status}`);

//       const data = await res.json();
//       console.log("이메일 전송 응답:", data);
//       setIsEmailVerified(true);
//       alert("인증번호가 이메일로 전송되었습니다.");
//     } catch (err) {
//       console.error("이메일 전송 오류:", err);
//       alert("이메일 전송 실패");
//     }
//   };

//   // 인증번호 확인
//   const handleSendVerification2 = async () => {
//     try {
//       const res = await fetch(
//         "http://fitlog.iubns.net:8080/api/users/password/verify-code",
//         {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify({ email, verificationCode: code }),
//         }
//       );
//       if (!res.ok) throw new Error(`서버 에러: ${res.status}`);

//       const data = await res.json();
//       console.log("코드 확인 응답:", data);

//       if (data.mailcheck) {
//         setIsCodeVerified(true);
//         setResetToken(data.resetToken);
//         alert("인증번호 확인 성공");
//       } else {
//         alert("인증번호가 일치하지 않거나 만료되었습니다.");
//       }
//     } catch (err) {
//       console.error("코드 확인 오류:", err);
//       alert("인증번호 확인 실패");
//     }
//   };

//   const isFormValid =
//     email.trim() && code.trim() && isEmailVerified && isCodeVerified;

//   // 비밀번호 찾기 버튼 클릭
//   const handleFindPassword = () => {
//     if (isFormValid) setShowPwReset(true);
//     else alert("이메일과 인증번호를 올바르게 입력해주세요.");
//   };

//   const isPwMismatch = newPw && confirmPw && newPw !== confirmPw;

//   // 비밀번호 변경 API 호출
//   const handlePasswordChange = async () => {
//     if (isPwMismatch) {
//       alert("비밀번호가 일치하지 않습니다.");
//       return;
//     }
//     try {
//       const res = await fetch(
//         "http://fitlog.iubns.net:8080/api/users/password/reset",
//         {
//           method: "PATCH",
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${resetToken}`,
//           },
//           body: JSON.stringify({ newpassword: newPw }),
//         }
//       );

//       if (!res.ok) throw new Error(`서버 오류: ${res.status}`);

//       const data = await res.json();
//       console.log("비밀번호 변경 응답:", data);

//       alert("비밀번호가 성공적으로 변경되었습니다.");
//       window.location.reload();
//     } catch (err) {
//       console.error("비밀번호 변경 실패:", err);
//       alert("비밀번호 변경에 실패했습니다.");
//     }
//   };

//   return (
//     <div className={styles.container}>
//       {!showPwReset ? (
//         <>
//           <input
//             type="email"
//             placeholder="이메일"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             className={styles.inputFull}
//           />
//           <button
//             className={styles.smallButton}
//             onClick={handleSendVerification1}
//             disabled={!email.trim()}
//           >
//             인증번호 전송
//           </button>

//           <div className={styles.inputGroup}>
//             <input
//               type="text"
//               placeholder="인증번호"
//               value={code}
//               onChange={(e) => setCode(e.target.value)}
//               className={styles.inputHalf}
//             />
//             <button
//               className={styles.smallButton}
//               onClick={handleSendVerification2}
//               disabled={!code.trim()}
//             >
//               확인
//             </button>
//           </div>

//           {isEmailVerified && (
//             <div className={styles.verificationMessage}>이메일 인증 완료</div>
//           )}
//           {isCodeVerified && (
//             <div className={styles.verificationMessage}>인증번호 확인 완료</div>
//           )}

//           <button
//             className={styles.findButton}
//             disabled={!isFormValid}
//             onClick={handleFindPassword}
//           >
//             비밀번호 찾기
//           </button>
//         </>
//       ) : (
//         <>
//           <input
//             type="password"
//             placeholder="새로운 비밀번호 입력"
//             value={newPw}
//             onChange={(e) => setNewPw(e.target.value)}
//             className={styles.inputFull}
//           />
//           <input
//             type="password"
//             placeholder="새로운 비밀번호 확인"
//             value={confirmPw}
//             onChange={(e) => setConfirmPw(e.target.value)}
//             className={styles.inputFull}
//           />
//           {isPwMismatch && (
//             <div className={styles.errorMessage}>비밀번호가 다릅니다.</div>
//           )}
//           <button
//             className={styles.findButton}
//             onClick={handlePasswordChange}
//             disabled={!newPw || !confirmPw || isPwMismatch}
//           >
//             비밀번호 변경
//           </button>
//         </>
//       )}
//     </div>
//   );
// }

// export default FindPwForm;

