"use client";
import React, { useState } from "react";
import styles from "./FindIdForm.module.css";

function FindIdForm() {
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");

  const [isEmailVerified, setIsEmailVerified] = useState(false);
  const [isCodeVerified, setIsCodeVerified] = useState(false);
  const [showModal, setShowModal] = useState(false);

  // 이메일 인증번호 전송
  const handleSendVerification1 = async () => {
    try {
      const res = await fetch("http://fitlog.iubns.net:8080/api/email", {
        method: "POST",
        body: {"email":int},
      })
      //const res = await fetch("http://fitlog.iubns.net:8080/api/email", {
      //method: "POST",
      //headers: {
      //"Content-Type": "application/json",
      //},
      // body: JSON.stringify({ email }),
      //});


      if (!res.ok) throw new Error(`서버 에러: ${res.status}`);

      const data = await res.json();
      console.log("이메일 전송 응답:", data);
      setIsEmailVerified(true);
    
    
    } catch (err) {
      console.error("이메일 전송 오류:", err);
    }
  }

  // 인증번호 확인
  const handleSendVerification2 = async () => {
    try {
      const res = await fetch("http://fitlog.iubns.net:8080/api/email?code=${code}", {
        method: "GET",
         body: {"code":"String"},
      });

      if (!res.ok) throw new Error(`서버 에러: ${res.status}`);

      const data = await res.json();
      console.log("코드 확인 응답:", data);
      setIsCodeVerified(true);
    } catch (err) {
      console.error("코드 확인 오류:", err);
    }
  };

  // 아이디 찾기
  const handleFindId = async () => {
    try {
      const res = await fetch("http://fitlog.iubns.net:8080/api/users/find-id", {
        method: "POST",
        body:({
        "nickname": "String",
        "email": "String",
        }),
      });

      if (!res.ok) throw new Error(`서버 에러: ${res.status}`);

      const data = await res.json();
      console.log("아이디 찾기 응답:", data);

      setId(data?.customid || "아이디를 찾을 수 없습니다");
      setShowModal(true);
    } catch (err) {
      console.error("아이디 찾기 오류:", err);
    }
  };

  const handleCloseModal = () => setShowModal(false);

  // 🔒 모든 필드 + 인증 완료 조건
  const isFormValid =
    name.trim() &&
    email.trim() &&
    code.trim() &&
    isEmailVerified &&
    isCodeVerified;

  return (
    <div className={styles.container}>
      <input
        type="text"
        placeholder="이름"
        value={name}
        onChange={(e) => setName(e.target.value)}
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
        <div className={styles.verificationMessage}>이메일 인증번호가 전송되었습니다</div>
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
        <div className={styles.verificationMessage}>인증번호 확인이 완료되었습니다</div>
      )}

      <button
        className={styles.findButton}
        onClick={handleFindId}
        disabled={!isFormValid}
      >
        아이디 찾기
      </button>

      {showModal && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalContent}>
            <p>회원님의 아이디는 "<strong>{id}</strong>"입니다</p>
            <button className={styles.modalCloseButton} onClick={handleCloseModal}>
              닫기
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default FindIdForm;



//GPt 돌린 값
// "use client";
// import React, { useState } from "react";
// import styles from "./FindIdForm.module.css";

// function FindIdForm() {
//   const [nickname, setNickname] = useState("");
//   const [email, setEmail] = useState("");
//   const [code, setCode] = useState("");
//   const [isEmailSent, setIsEmailSent] = useState(false);
//   const [isCodeVerified, setIsCodeVerified] = useState(false);
//   const [foundId, setFoundId] = useState("");
//   const [showModal, setShowModal] = useState(false);

//   // 이메일 인증번호 전송
//   const handleSendVerification = async () => {
//     try {
//       const res = await fetch("http://fitlog.iubns.net:8080/api/email", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ email }),
//       });
//       if (!res.ok) throw new Error(`서버 에러: ${res.status}`);

//       const data = await res.json();
//       console.log("이메일 전송 응답:", data);
//       setIsEmailSent(true);
//       alert("인증번호가 이메일로 전송되었습니다.");
//     } catch (err) {
//       console.error("이메일 전송 오류:", err);
//       alert("이메일 전송 실패");
//     }
//   };

//   // 인증번호 확인
//   const handleVerifyCode = async () => {
//     try {
//       const res = await fetch("http://fitlog.iubns.net:8080/api/email", {
//         method: "GET",
//         headers: { "Content-Type": "application/json" },
//         // API 명세서에 따르면 GET 요청에 인증코드 파라미터 전달 필요
//         // fetch GET은 body를 지원하지 않으므로 query string 사용
//       });
//       // 인증코드 확인은 GET /api/email?code=인증번호 형태로 해야 함
//       // 따라서 아래와 같이 수정 필요
//       // 다시 작성:
//     } catch (err) {
//       console.error("코드 확인 오류:", err);
//       alert("인증번호 확인 실패");
//     }
//   };

//   // 올바른 코드 확인용 함수 (재작성)
//   const handleVerifyCodeFixed = async () => {
//     try {
//       const url = new URL("http://fitlog.iubns.net:8080/api/email");
//       url.searchParams.append("code", code);

//       const res = await fetch(url.toString(), {
//         method: "GET",
//       });

//       if (!res.ok) throw new Error(`서버 에러: ${res.status}`);

//       const data = await res.json();
//       console.log("인증번호 확인 응답:", data);

//       if (data.mailcheck) {
//         setIsCodeVerified(true);
//         alert("인증번호 확인 성공");
//       } else {
//         alert("인증번호가 일치하지 않거나 만료되었습니다.");
//       }
//     } catch (err) {
//       console.error("코드 확인 오류:", err);
//       alert("인증번호 확인 실패");
//     }
//   };

//   // 아이디 찾기
//   const handleFindId = async () => {
//     try {
//       const res = await fetch("http://fitlog.iubns.net:8080/api/users/find-id", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ nickname, email }),
//       });
//       if (!res.ok) throw new Error(`서버 에러: ${res.status}`);

//       const data = await res.json();
//       console.log("아이디 찾기 응답:", data);

//       setFoundId(data.customid || "아이디를 찾을 수 없습니다.");
//       setShowModal(true);
//     } catch (err) {
//       console.error("아이디 찾기 오류:", err);
//       alert("아이디 찾기 실패");
//     }
//   };

//   const isFormValid = nickname.trim() && email.trim() && isEmailSent && isCodeVerified;

//   const closeModal = () => setShowModal(false);

//   return (
//     <div className={styles.container}>
//       <input
//         type="text"
//         placeholder="닉네임"
//         value={nickname}
//         onChange={(e) => setNickname(e.target.value)}
//         className={styles.inputFull}
//       />

//       <div className={styles.inputGroup}>
//         <input
//           type="email"
//           placeholder="이메일"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           className={styles.inputHalf}
//         />
//         <button
//           className={styles.smallButton}
//           onClick={handleSendVerification}
//           disabled={!email.trim()}
//         >
//           인증번호 전송
//         </button>
//       </div>

//       {isEmailSent && <div className={styles.verificationMessage}>이메일 인증번호가 전송되었습니다.</div>}

//       <div className={styles.inputGroup}>
//         <input
//           type="text"
//           placeholder="인증번호"
//           value={code}
//           onChange={(e) => setCode(e.target.value)}
//           className={styles.inputHalf}
//         />
//         <button
//           className={styles.smallButton}
//           onClick={handleVerifyCodeFixed}
//           disabled={!code.trim()}
//         >
//           확인
//         </button>
//       </div>

//       {isCodeVerified && <div className={styles.verificationMessage}>인증번호 확인이 완료되었습니다.</div>}

//       <button
//         className={styles.findButton}
//         onClick={handleFindId}
//         disabled={!isFormValid}
//       >
//         아이디 찾기
//       </button>

//       {showModal && (
//         <div className={styles.modalOverlay}>
//           <div className={styles.modalContent}>
//             <p>회원님의 아이디는 "<strong>{foundId}</strong>"입니다</p>
//             <button className={styles.modalCloseButton} onClick={closeModal}>
//               닫기
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default FindIdForm;

