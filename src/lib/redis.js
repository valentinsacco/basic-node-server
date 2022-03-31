import Redis from 'ioredis'

const REDIS_URL = process.env.NODE_ENV !== 'development' ? process.env.REDIS_URL : null

export const redis = new Redis(REDIS_URL)