const BaConfig = {
  spaceKey: true,
  demo: false,
}
const savedConfig = JSON.parse(window.localStorage.getItem('_ba_config'))

export default savedConfig || BaConfig
