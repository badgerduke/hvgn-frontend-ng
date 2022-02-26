export class Individual {
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
  portrayAsNaturalChild?: boolean;
  notes?: string[];

  constructor() {
    this.id = '0';
    this.givenName = '';
    this.surname = '';
    this.gender = '';
  }
}
