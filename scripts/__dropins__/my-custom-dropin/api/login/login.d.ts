export interface GenerateCustomerTokenVariables {
    email: string;
    password: string;
}
export interface GenerateCustomerTokenData {
    generateCustomerToken: {
        token: string;
    } | null;
}
export declare const generateCustomerToken: ({ email, password, }: GenerateCustomerTokenVariables) => Promise<string>;
//# sourceMappingURL=login.d.ts.map