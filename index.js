const { main, moon, dawn } = require('./palette');

module.exports.themes = [
  {
    name: 'rose-pine',
    displayName: 'Rosé Pine',
    theme: {
      background: {
        default: main.base,
        success: main.foam,
        notice: main.gold,
        warning: main.rose,
        danger: main.love,
        surprise: main.iris,
        info: main.pine,
      },
      foreground: {
        default: main.text,
        success: main.highlightLow,
        notice: main.highlightLow,
        warning: main.highlightLow,
        danger: main.text,
        surprise: main.highlightLow,
        info: main.text,
      },
      highlight: {
        default: main.subtle,
        styles: {
          appHeader: {
            foreground: {
              surprise: main.overlay,
            },
          },
          paneHeader: {
            foreground: {
              surprise: main.overlay,
              info: main.overlay,
            },
          },
          editor: {
            foreground: {
              default: main.text,
              surprise: main.text,
              info: main.text,
            },
          },
          dialog: {
            background: {
              default: main.surface,
            },
            foreground: {
              default: main.text,
            },
          },
        },
      },
    },
  },
  {
    name: 'rose-pin-moon',
    displayName: 'Rosé Pine Moon',
    theme: {
      background: {
        default: moon.base,
        success: moon.foam,
        notice: moon.gold,
        warning: moon.rose,
        danger: moon.love,
        surprise: moon.iris,
        info: moon.pine,
      },
      foreground: {
        default: moon.text,
        success: moon.highlightLow,
        notice: moon.highlightLow,
        warning: moon.highlightLow,
        danger: moon.text,
        surprise: moon.highlightLow,
        info: moon.text,
      },
      highlight: {
        default: moon.subtle,
        styles: {
          appHeader: {
            foreground: {
              surprise: moon.overlay,
            },
          },
          paneHeader: {
            foreground: {
              surprise: moon.overlay,
              info: moon.overlay,
            },
          },
          editor: {
            foreground: {
              default: moon.text,
              surprise: moon.text,
              info: moon.text,
            },
          },
          dialog: {
            background: {
              default: moon.surface,
            },
            foreground: {
              default: moon.text,
            },
          },
        },
      },
    },
  },
  {
    name: 'rose-pine-dawn',
    displayName: 'Rosé Pine Dawn',
    theme: {
      background: {
        default: dawn.base,
        success: dawn.foam,
        notice: dawn.gold,
        warning: dawn.rose,
        danger: dawn.love,
        surprise: dawn.iris,
        info: dawn.pine,
      },
      foreground: {
        default: dawn.text,
        success: dawn.highlightLow,
        notice: dawn.highlightLow,
        warning: dawn.highlightLow,
        danger: dawn.text,
        surprise: dawn.highlightLow,
        info: dawn.text,
      },
      highlight: {
        default: dawn.subtle,
        styles: {
          appHeader: {
            foreground: {
              surprise: dawn.overlay,
            },
          },
          paneHeader: {
            foreground: {
              surprise: dawn.overlay,
              info: dawn.overlay,
            },
          },
          editor: {
            foreground: {
              default: dawn.text,
              surprise: dawn.text,
              info: dawn.text,
            },
          },
          dialog: {
            background: {
              default: dawn.surface,
            },
            foreground: {
              default: dawn.text,
            },
          },
        },
      },
    },
  },
];
