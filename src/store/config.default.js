import { omit, keys, has, filter, mergeRight } from 'ramda'

const BaConfig = {
  spaceKey: true,
  upload: false,
}
const savedConfig = JSON.parse(window.localStorage.getItem('_ba_config'))
const config = omit(
  filter((key) => !has(key, BaConfig), keys(savedConfig)),
  savedConfig
)

export default mergeRight(BaConfig, config)
