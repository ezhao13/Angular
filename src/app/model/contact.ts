export class Contact {
    title: string;
    title_text: string;
    firstName: string;
    lastName: string;
    middleName: string;
    nameSuffix: string;
    businessName: string;
    jobTitle: string;
    mobile: string;
    phone: string;
    ext: string;
    email: string;
    confirmEmail: string;
    isContactDifferent: boolean = false;
    perferedLang: string;
    perferedLang_text: string;

    public constructor(init?: Partial<Contact>) {
      Object.assign(this, init);
    }    
}