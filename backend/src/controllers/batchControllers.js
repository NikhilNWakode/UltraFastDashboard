const batchService = require('../services/batchServices')

async function handleBatch(req, res, next){
  try{
    const requested = Array.isArray(req.body?.widgets) && req.body.widgets.length > 0
      ? req.body.widgets
      : null

    const data = await batchService.getBatchPayload(requested)
    res.json({ ok: true, data })
  }catch(err){
    next(err)
  }
}

module.exports = { handleBatch }
