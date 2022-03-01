import { OtherFamily } from './other-family';
export interface Individual {
  id: string;
  givenName: string;
  surname: string;
  gender: string;
  birthdate?: string;
  birthLocation?: string;
  deathdate?: string;
  deathLocation?: string;
  familyOfOrigin?: number;
  firstFamilyStarted?: number;
  notes?: string[];
}
