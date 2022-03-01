import { OtherFamily } from './other-family';
export interface Parent {
  id: string;
  surname?: string;
  givenName?: string;
  suffix?: string;
  gender?: string;
  birthdate?: string;
  birthLocation?: string;
  deathdate?: string;
  deathLocation?: string;
  familyOfOrigin?: string;
  otherFamilies?: OtherFamily[];
}
