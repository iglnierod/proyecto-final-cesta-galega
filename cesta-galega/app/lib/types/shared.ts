export const provinces = ['CORUÑA, A', 'LUGO', 'OURENSE', 'PONTEVEDRA'] as const;

export type Province = (typeof provinces)[number];
