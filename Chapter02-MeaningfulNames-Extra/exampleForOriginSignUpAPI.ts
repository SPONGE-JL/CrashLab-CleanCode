import * as UserDomain from "./Domains/User";

/**
 * Example: Request from origin (in our homepage)
 *
 * In Origin SignUp API
 */

const exampleForOriginSignUpAPI = () => {
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
  const additionalSpec: UserDomain.OriginUserSpec = {
    userTel: "010-2222-8888",
    userTags: ["org-1", "org-2", "org-3"],
  };

  const userProps = { userDefaultProps, additionalSpec };
  const newUser: UserDomain.User = UserDomain.User.Create(UserDomain.UserFrom.Origin, userProps);

  newUser.whereAreYouFrom();
  newUser.getInformation();
};

export default exampleForOriginSignUpAPI;
