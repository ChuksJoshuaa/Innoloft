export type FetchProps = {
  endpoint?: string;
  key?: string;
};

export interface ConfigProps {
  id: number;
  logo: string;
  mainColor: string;
  hasUserSection: boolean;
}

export type TrlProps = {
  id: string;
  name: string;
  description: string | null;
};

export type IProps = {
  id: number;
  name: string;
};

export interface CompanyProps {
  name: string;
  logo: string;
  address: {
    country: {
      name: string;
    };
    city: {
      name: string;
    };
    street: string;
    house: string;
    zipCode: string;
    longitute: string;
    latitude: string;
  };
}

export interface UserProfile {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  sex: number;
  profilePicture: string;
  position: string;
}

export interface IIProps {
  id: number;
  name: string;
  description: string;
  picture: string;
  type: IProps;
  categories: IProps[];
  implementationEffortText: null | string;
  trl: TrlProps;
  video: string;
  user: UserProfile;
  company: CompanyProps;
  businessModels: IProps[];
  investmentEffort: string | null;
}

export interface ProductProps {
  isSidebarOpen: boolean;
  isLoading: boolean;
  isError: boolean;
  userProfile: UserProfile;
}

export interface ProfileProps {
  user: UserProfile;
  company: CompanyProps;
  type: string;
}

export type VideoProps = {
  video: string;
  type: string;
};

export type HeroProps = {
  data: IIProps;
  type: string;
};
