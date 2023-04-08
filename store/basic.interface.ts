export type IProfiles = {
  profile_name: string;
  profile_url: string;
};

export interface IBasicDetailsItem {
  name: string;
  label: string;
  image: string;
  email: string;
  phone: string;
  profiles: IProfiles[];
}

export interface IBasicDetailsState {
  values: IBasicDetailsItem;
  changeValue: (values: IBasicDetailsItem) => void;
}
