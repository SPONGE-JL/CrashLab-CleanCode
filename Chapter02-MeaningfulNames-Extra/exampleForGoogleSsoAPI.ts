import * as UserDomain from "./Domains/User";

/**
 * Example: Request from Google with SSO
 */

const exampleForGoogleSsoAPI = () => {
  // From Request Body..
  const param = {
    id: "sign-in-origin-userID",
    pw: "origin-P@SSW04D",
    email: "origin-user@email.com",
    comment: "blar-blar-blar",
    userTel: "010-2222-8888",
  };

  const userDefaultProps: UserDomain.UserDefaultProps = {
    userId: param.id,
    userPw: param.pw,
    userEmail: param.email,
    profileComment: param.comment,
  };
  const additionalSpec: UserDomain.GoogleUserSpec = {
    googleEmail: "dev2sponge@gmail.com",
    googleNickName: "SPONGE-JL",
  };

  const userProps = { userDefaultProps, additionalSpec };
  const newUser: UserDomain.User = UserDomain.User.Create(UserDomain.UserFrom.Google, userProps);

  newUser.whereAreYouFrom();
  newUser.getInformation();
};

export default exampleForGoogleSsoAPI;
