import { z } from 'zod'
import type { CounterSettings } from '@/entities/counter'

const editCounterSettingsSchema: z.ZodType<CounterSettings> = z
  .object({
    start: z.number().min(0).max(1_000_000),
    max: z.number().min(0).max(1_000_000)
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
        message: "Start value can't be more or equal than max",
        path: ['max']
      })
    }
  })

export { editCounterSettingsSchema }