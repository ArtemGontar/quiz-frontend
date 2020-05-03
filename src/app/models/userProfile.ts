import { EnglishLevel } from "./englishLevel";

export class UserProfile {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    englishLevel: EnglishLevel;
    birthDate: string;
    departament: string;
    jobTitle: string;
    systemRole: string;
}