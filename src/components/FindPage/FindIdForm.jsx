"use client"
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

  const handleSendVerification1 = () => {
    setIsEmailVerified(true);
  };

  const handleSendVerification2 = () => {
    setIsCodeVerified(true);
  };

  const handleFindId = () => {
    setId("SchUniversity");
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

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
        <div className={styles.verificationMessage}>이메일 인증이 완료되었습니다</div>
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
