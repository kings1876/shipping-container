import { ContainerSpecRow } from '../types/seo';

export type SizeKey = '10' | '20' | '20hc' | '40' | '40hc' | '53hc';

type SizeBase = Omit<ContainerSpecRow, 'model' | 'grade' | 'priceFrom'>;

// Standard ISO dry-van dimensions. Verify against the physical stock sheet before launch.
export const SIZES: Record<SizeKey, SizeBase> = {
  '10': {
    extDimensions: `10'0" × 8'0" × 8'6"`,
    intDimensions: `9'3" × 7'8" × 7'10"`,
    doorOpening: `7'8" × 7'5"`,
    cubicVolume: '560 cu ft',
    tareWeight: '2,890 lbs',
    maxPayload: '22,050 lbs',
  },
  '20': {
    extDimensions: `20'0" × 8'0" × 8'6"`,
    intDimensions: `19'4" × 7'8" × 7'10"`,
    doorOpening: `7'8" × 7'5"`,
    cubicVolume: '1,172 cu ft',
    tareWeight: '4,916 lbs',
    maxPayload: '62,280 lbs',
  },
  '20hc': {
    extDimensions: `20'0" × 8'0" × 9'6"`,
    intDimensions: `19'4" × 7'8" × 8'10"`,
    doorOpening: `7'8" × 8'5"`,
    cubicVolume: '1,320 cu ft',
    tareWeight: '5,070 lbs',
    maxPayload: '61,930 lbs',
  },
  '40': {
    extDimensions: `40'0" × 8'0" × 8'6"`,
    intDimensions: `39'5" × 7'8" × 7'10"`,
    doorOpening: `7'8" × 7'5"`,
    cubicVolume: '2,390 cu ft',
    tareWeight: '8,267 lbs',
    maxPayload: '58,930 lbs',
  },
  '40hc': {
    extDimensions: `40'0" × 8'0" × 9'6"`,
    intDimensions: `39'5" × 7'8" × 8'10"`,
    doorOpening: `7'8" × 8'5"`,
    cubicVolume: '2,700 cu ft',
    tareWeight: '8,775 lbs',
    maxPayload: '58,425 lbs',
  },
  '53hc': {
    extDimensions: `53'0" × 8'6" × 9'6"`,
    intDimensions: `52'5" × 8'2" × 8'10"`,
    doorOpening: `8'2" × 8'5"`,
    cubicVolume: '3,800 cu ft',
    tareWeight: '12,300 lbs',
    maxPayload: '42,700 lbs',
  },
};

export function specRow(model: string, grade: string, size: SizeKey, priceFrom: number): ContainerSpecRow {
  return { model, grade, ...SIZES[size], priceFrom };
}
