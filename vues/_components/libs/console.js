/* eslint-disable */
export default {
  methods: {
    $log(...res) { console.log('[LOG]', ...res); },
    $info(...res) { console.info('[INFO]', ...res); },
    $warn(...res) { console.warn('[WARN]', ...res); },
    $error(...res) { console.error('[ERROR]', ...res); },
    $group(...res) { console.group('[LOG]', ...res); },
    $groupEnd(...res) { console.groupEnd('[LOG]', ...res); },
  },
};
/* eslint-enable */
