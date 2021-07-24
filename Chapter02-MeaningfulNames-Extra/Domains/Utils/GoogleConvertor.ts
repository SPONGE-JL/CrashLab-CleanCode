import { UserFrom } from "../User/User";

export type GoogleUserSpec = {
  googleEmail: string;
  googleNickName: string;
};

const convertForUser = (additionalSpec: GoogleUserSpec): GoogleUserSpec => {
  console.log(`>  INFO | In ${UserFrom.Google} Convertor For User >> ${JSON.stringify(additionalSpec)}`);
  return additionalSpec;
};

// Expose on Here
const GoogleConvertor = {
  convertForUser,
};

export default GoogleConvertor;
