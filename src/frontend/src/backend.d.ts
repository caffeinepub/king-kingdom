import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface LeadFormResponse {
    city: string;
    fullName: string;
    requirement: string;
    message?: string;
    phoneNumber: string;
    plotSize?: string;
}
export interface ContactDetails {
    hours: string;
    whatsapp: string;
    email: string;
    address: string;
    phones: Array<string>;
}
export interface backendInterface {
    getAllLeads(): Promise<Array<LeadFormResponse>>;
    getContactDetails(): Promise<ContactDetails>;
    getLeadByPhoneNumber(phoneNumber: string): Promise<LeadFormResponse | null>;
    submitLeadForm(fullName: string, phoneNumber: string, city: string, requirement: string, plotSize: string | null, message: string | null): Promise<boolean>;
}
