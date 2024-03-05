import type { z } from 'zod'

import type { editCounterSettingsSchema } from '../validation'

type EditCounterSettingsValues = z.infer<typeof editCounterSettingsSchema>

export type { EditCounterSettingsValues }
