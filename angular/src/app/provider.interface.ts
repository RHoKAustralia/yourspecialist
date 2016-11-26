export interface Provider {
    name: string;
    address?: {
        street?: string;
        postcode?: string;
    }
}
