export type Event = { lat: number; lon: number; type: string };
export type Interest = { lat: number; lon: number; name: string };
export type InterestOutput = Interest & { imp: number; click: number };
