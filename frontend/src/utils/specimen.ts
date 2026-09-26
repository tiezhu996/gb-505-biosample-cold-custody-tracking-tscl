import type { Specimen } from '../types/domain'

/**
 * 过期以后端在查询时计算的 `expired` 为准；若字段缺失（旧数据/缓存），
 * 以前端当前时间兜底判断。已出库/已销毁的终态样本不再视为待处置的过期样本。
 */
export function isExpired(specimen: Specimen, now: Date = new Date()): boolean {
  if (specimen.state === 'released' || specimen.state === 'disposed') return false
  if (typeof specimen.expired === 'boolean') return specimen.expired
  return Boolean(specimen.expiresAt && new Date(specimen.expiresAt).getTime() <= now.getTime())
}
