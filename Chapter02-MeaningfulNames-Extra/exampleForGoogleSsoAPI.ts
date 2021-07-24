import * as UserDomain from "./Domains/User";

/**
 * Example: Request from Google with SSO
 */

const exampleForGoogleSsoAPI = () => {
  // From Request Body..
  const param = {
    id: "sso-from-google-userID",
    pw: "google-P@SSW04D",
    email: "google-user@gmail.com",
    comment: "glar-glar-glar",
    userTel: "+01 23131-122-8888",
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
