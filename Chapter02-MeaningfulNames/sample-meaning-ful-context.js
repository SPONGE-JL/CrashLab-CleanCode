import UserRepository from "./dummy-user-repository";
import EncryptTool from "./dummy-encrypt-tool";

const signUpNewUser = (submittedUserInfo) => {
  // Default Validation
  const { userId, userPw } = submittedUserInfo;
  if (!userId || !userPw) {
    console.error(
      `SIGN-UP > ERROR > Invalid UserInfo: ${JSON.stringify(submittedUserInfo)}`
    );
    return null;
  }

  // ID Validation
  const isUniqueUserId = UserRepository.findById(userId) == null ? true : false;
  if (!isUniqueUserId) {
    console.error(`SIGN-UP > ERROR > Duplicated ID: ${userId}`);
    return null;
  }

  // Password Encryption
  const encryptedPw = EncryptTool.encrypt(userPw);
  const encryptedUser = { userId, userPw: encryptedPw };

  // Insert New User
  const signedNewUser = UserRepository.save(encryptedUser);
  console.log(`SIGN-UP > INFO > Welcome New User: ${signedNewUser.userId}`);
  return signedNewUser;
};

// ---

// If Submitted..
const paramUserId = "dev-chloe";
const paramUserPw = "#2102103#";

// Signup with submitted User Information
const submittedUserInfo = {
  userId: paramUserId,
  userPw: paramUserPw,
};
const signedNewUser = signUpNewUser(submittedUserInfo);

/*
 * 만약 이 지점(---)을 기준으로 파일이 나누어진다 하더라도,
 * 각각의 함수, 변수의 이름에 의도를 명확히 드러내어 맥락을 전달한다.
 */
