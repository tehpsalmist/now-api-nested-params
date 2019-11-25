import { NowRequest, NowResponse } from '@now/node'

export default (req: NowRequest, res: NowResponse) => {
  const { level, deep } = req.query

  res.json({ level, deep })
}