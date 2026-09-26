import dayjs from 'dayjs'
import type { Specimen } from '../types/domain'

const terminalStates: Specimen['state'][] = ['released', 'disposed']

export const isSpecimenExpired = (specimen: Pick<Specimen, 'expiresAt' | 'state'>) =>
  Boolean(specimen.expiresAt) && !terminalStates.includes(specimen.state) && !dayjs(specimen.expiresAt).isAfter(dayjs())
