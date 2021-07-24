import { UserFrom } from "../User/User";

export type OriginUserSpec = {
  userTel: string;
  userTags?: string[];
};

const convertForUser = (additionalSpec: OriginUserSpec): OriginUserSpec => {
  console.log(`>  INFO | In ${UserFrom.Origin} Convertor For User >> ${JSON.stringify(additionalSpec)}`);
  return additionalSpec;
};

// Expose on Here
const OriginConvertor = {
  convertForUser,
};

export default OriginConvertor;
