export const provinces = ['CORUÑA, A', 'LUGO', 'OURENSE', 'PONTEVEDRA', 'MONTCADA'] as const;

export type Province = (typeof provinces)[number];
