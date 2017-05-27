var os = require('os')
var path = require('path')

var platform = os.platform()
//adding browser, for use case when module is bundled using browserify. and added to html using src.
if (platform !== 'linux' && platform !== 'darwin' && platform !== 'win32' && platform !=="browser") {
  console.error('Unsupported platform.', platform);
  process.exit(1)
}

var arch = os.arch()
if (platform === 'darwin' && arch !== 'x64') {
  console.error('Unsupported architecture.')
  process.exit(1)
}

var ffmpegPath = path.join(
  __dirname,
  'bin',
  platform,
  arch,
  platform === 'win32' ? 'ffmpeg.exe' : 'ffmpeg'
)

exports.path = ffmpegPath;
