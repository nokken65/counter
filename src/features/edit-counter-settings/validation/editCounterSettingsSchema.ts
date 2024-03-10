import { z } from 'zod'
import type { CounterSettings } from '@/entities/counter'

const editCounterSettingsSchema: z.ZodType<CounterSettings> = z
  .object({
    start: z.number().min(0).max(1_000_000).int(),
    max: z.number().min(0).max(1_000_000).int(),
    step: z.number().min(1).max(100_000).int()
  })
  .superRefine((values, ctx) => {
    if (values.start >= values.max) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Start value can't be more or equal than max",
        path: ['start']
      })
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Max value can't be less or equal than start",
        path: ['max']
      })
    }
  })

export { editCounterSettingsSchema }
