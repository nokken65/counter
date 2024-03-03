import { z } from 'zod'

import { editCounterSettingsSchema } from '../validation'

type EditCounterSettingsValues = z.infer<typeof editCounterSettingsSchema>

export type { EditCounterSettingsValues }
