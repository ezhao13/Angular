
export class UserContext {
    public firstName: string ="";
    public lastName: string = "";
    public email: string = "";
    public postalcode: string = "";
    public lang: string = "en";

    public isAddNew: boolean = false;

    public reset() {
        this.firstName = null;
        this.lastName = null;
        this.email = null;
        this.postalcode = null;
    }
}


