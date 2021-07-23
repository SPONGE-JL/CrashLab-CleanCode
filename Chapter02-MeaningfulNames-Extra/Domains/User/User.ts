import GoogleConvertor, { GoogleUserSpec } from "../Utils/GoogleConvertor";
import OriginConvertor, { OriginUserSpec } from "../Utils/OriginConvertor";

/*
 * UserDefaultProps
 */
export type UserDefaultProps = {
  userId: string;
  userPw: string;
  userEmail: string;
  profileComment?: string;
};

/*
 * UserSpecProps
 */
export enum UserFrom {
  Google = "Google", // From Google
  Origin = "Origin",
}
export type AdditionalSpec = GoogleUserSpec | OriginUserSpec;
interface UserAddedProps {
  signFrom: UserFrom;
  additionalSpec: AdditionalSpec;
}

class User implements UserDefaultProps, UserAddedProps {
  // UserDefaultProps
  readonly userId: string;
  readonly userPw: string;
  readonly userEmail: string;
  readonly profileComment?: string;
  // UserSpec
  readonly signFrom: UserFrom;
  readonly additionalSpec: AdditionalSpec; // Set in child class

  // Static Factory Method Pattern
  public static Create = (
    signFrom: UserFrom,
    userProps: { userDefaultProps: UserDefaultProps; additionalSpec: AdditionalSpec }
  ): User => {
    const { userDefaultProps, additionalSpec } = userProps;

    console.log(
      `>  INFO | From ${signFrom} | usedId: ${userDefaultProps.userId}, userEmail: ${userDefaultProps.userEmail}`
    );
    switch (signFrom) {
      case UserFrom.Google:
      case UserFrom.Origin:
        const userInstance: User = new User(signFrom, userProps);
        console.log(`>  INFO | UserFactory has created the UserInstance! 🚀\n`);
        return userInstance;

      default:
        const prefix = `> ERROR | From ${signFrom} cannot handle to create User..!`;
        const appendUserDataProps = `> TRACE | userData: ${JSON.stringify(userDefaultProps)}`;
        const appendUserSpecProps = `> TRACE | userSpec: ${JSON.stringify(additionalSpec)}`;
        throw new Error(`\n${prefix}\n${appendUserDataProps}\n${appendUserSpecProps}`);
    }
  };

  private constructor(
    signFrom: UserFrom,
    userProps: { userDefaultProps: UserDefaultProps; additionalSpec: AdditionalSpec }
  ) {
    const { userDefaultProps, additionalSpec } = userProps;
    // UserData
    this.userId = userDefaultProps.userEmail;
    this.userPw = userDefaultProps.userPw;
    this.userEmail = userDefaultProps.userEmail;
    this.profileComment = userDefaultProps.profileComment ?? "";
    // UserSpec
    this.signFrom = signFrom;
    this.additionalSpec = this.convertAdditionalSpec(additionalSpec);
  }

  private convertAdditionalSpec = (additionalSpec: AdditionalSpec) => {
    switch (this.signFrom.toUpperCase()) {
      case UserFrom.Google.toUpperCase():
        return GoogleConvertor.convertForUser(additionalSpec as GoogleUserSpec);
      case UserFrom.Origin.toUpperCase():
        return OriginConvertor.convertForUser(additionalSpec as OriginUserSpec);

      default:
        const prefix = `> ERROR | From ${this.signFrom} cannot handle to create User..! (at convertAdditionalSpec)`;
        const thisProps = `> TRACE | this: ${JSON.stringify(this)}`;
        throw new Error(`\n${prefix}\n${thisProps}`);
    }
  };

  readonly whereAreYouFrom = () => {
    console.log(`>  INFO | Where are you from? > I'm from ${this.signFrom}`);
  };

  readonly getInformation = () => {
    const prefix = ">  INFO | Get your informations...";
    const tab = "\n        | ";
    const defaultInfo = `${tab}${this.userId} (${this.userEmail}) > comment: ${this.profileComment ?? "(no-comment)"}`;
    const additionalInfo = `${tab}${JSON.stringify(this.additionalSpec)}`;
    console.log(`${prefix}${defaultInfo}${additionalInfo}`);
  };
}

export default User;
