import { getColors } from './primer'
import { VitesseThemes } from './colors'

export default function getTheme({ style, name }) {
  // Usage: `pick({ light: "lightblue", dark: "darkblue" })`
  const pick = options => options[style]

  const vitesse = (key: keyof typeof VitesseThemes) => pick({ light: VitesseThemes[key][1], dark: VitesseThemes[key][0] })

  const primer = getColors(style)

  const foreground = vitesse('foreground')
  const background = vitesse('background')
  const border = pick({ light: primer.gray[2], dark: primer.white })
  const activeForeground = vitesse('activeForeground')
  const activeBackground = vitesse('activeBackground')
  const primary = vitesse('primary')

  return {
    name,
    colors: {
      focusBorder: '#00000000',
      foreground,
      descriptionForeground: primer.gray[5],
      errorForeground: primer.red[6],

      'textLink.foreground': pick({ light: primer.blue[5], dark: primer.blue[6] }),
      'textLink.activeForeground': pick({ light: primer.blue[6], dark: primer.blue[7] }),
      'textBlockQuote.background': background,
      'textBlockQuote.border': primer.gray[2],
      'textCodeBlock.background': background,
      'textPreformat.foreground': primer.gray[6],
      'textSeparator.foreground': primer.gray[3],

      'button.background': primary,
      'button.foreground': background,
      'button.hoverBackground': primary,

      'checkbox.background': activeBackground,
      'checkbox.border': pick({ light: primer.gray[3], dark: primer.white }),

      'dropdown.background': background,
      'dropdown.border': border,
      'dropdown.foreground': foreground,
      'dropdown.listBackground': pick({ light: primer.white, dark: primer.gray[0] }),

      'input.background': activeBackground,
      'input.border': border,
      'input.foreground': foreground,
      'input.placeholderForeground': pick({ light: primer.gray[4], dark: primer.gray[5] }),

      'badge.foreground': background,
      'badge.background': vitesse('secondaryForeground'),

      'progressBar.background': primer.blue[4],

      'titleBar.activeForeground': foreground,
      'titleBar.activeBackground': activeBackground,
      'titleBar.inactiveForeground': primer.gray[5],
      'titleBar.inactiveBackground': background,
      'titleBar.border': border,

      'activityBar.foreground': foreground,
      'activityBar.inactiveForeground': vitesse('secondaryForeground'),
      'activityBar.background': background,
      'activityBarBadge.foreground': background,
      'activityBarBadge.background': activeForeground,
      'activityBar.activeBorder': primary,
      'activityBar.border': border,

      'sideBar.foreground': foreground,
      'sideBar.background': background,
      'sideBar.border': border,
      'sideBarTitle.foreground': foreground,
      'sideBarSectionHeader.foreground': foreground,
      'sideBarSectionHeader.background': background,
      'sideBarSectionHeader.border': border,

      'list.hoverForeground': foreground,
      'list.inactiveSelectionForeground': foreground,
      'list.activeSelectionForeground': foreground,
      'list.hoverBackground': activeBackground,
      'list.inactiveSelectionBackground': background,
      'list.activeSelectionBackground': activeBackground,
      'list.inactiveFocusBackground': background,
      'list.focusBackground': activeBackground,

      'tree.indentGuidesStroke': pick({ light: primer.gray[2], dark: primer.gray[1] }),

      'notificationCenterHeader.foreground': primer.gray[5],
      'notificationCenterHeader.background': background,
      'notifications.foreground': foreground,
      'notifications.background': background,
      'notifications.border': border,
      'notificationsErrorIcon.foreground': primer.red[5],
      'notificationsWarningIcon.foreground': primer.orange[6],
      'notificationsInfoIcon.foreground': primer.blue[6],

      'pickerGroup.border': primer.gray[2],
      'pickerGroup.foreground': foreground,
      'quickInput.background': background,
      'quickInput.foreground': foreground,

      'statusBar.foreground': foreground,
      'statusBar.background': background,
      'statusBar.border': border,
      'statusBar.noFolderBackground': background,
      'statusBar.debuggingBackground': activeBackground,
      'statusBar.debuggingForeground': foreground,
      'statusBarItem.prominentBackground': activeBackground,

      'editorGroupHeader.tabsBackground': background,
      'editorGroupHeader.tabsBorder': border,
      'editorGroup.border': border,

      'tab.activeForeground': foreground,
      'tab.inactiveForeground': primer.gray[5],
      'tab.inactiveBackground': background,
      'tab.activeBackground': background,
      'tab.hoverBackground': activeBackground,
      'tab.unfocusedHoverBackground': background,
      'tab.border': border,
      'tab.unfocusedActiveBorderTop': border,
      'tab.activeBorder': border,
      'tab.unfocusedActiveBorder': border,
      'tab.activeBorderTop': background,

      'breadcrumb.foreground': primer.gray[5],
      'breadcrumb.focusForeground': foreground,
      'breadcrumb.activeSelectionForeground': primer.gray[6],
      'breadcrumbPicker.background': background,

      'editor.foreground': foreground,
      'editor.background': background,
      'editorWidget.background': background,
      'editor.foldBackground': background,
      'editor.lineHighlightBackground': activeBackground,
      'editorLineNumber.foreground': pick({ light: '#1b1f234d', dark: primer.gray[2] }),
      'editorLineNumber.activeForeground': foreground,
      'editorIndentGuide.background': pick({ light: '#eff2f6', dark: primer.gray[1] }),
      'editorIndentGuide.activeBackground': pick({ light: '#d7dbe0', dark: primer.gray[2] }),
      'editorWhitespace.foreground': pick({ light: primer.gray[3], dark: primer.gray[2] }),
      // 'editorCursor.foreground': primary,

      'editor.findMatchBackground': pick({ light: primer.yellow[4], dark: '#ffd33d44' }),
      'editor.findMatchHighlightBackground': pick({ light: '#ffdf5d66', dark: '#ffd33d22' }),
      'editor.inactiveSelectionBackground': pick({ light: '#0366d611', dark: '#3392FF22' }),
      'editor.selectionBackground': pick({ light: '#1c6b4820', dark: '#4d937520' }),
      'editor.selectionHighlightBackground': pick({ light: '#1c6b4830', dark: '#4d937530' }),
      'editor.wordHighlightBackground': pick({ light: '#1c6b4805', dark: '#1c6b4805' }),
      'editor.wordHighlightStrongBackground': pick({ light: '#1c6b4810', dark: '#1c6b4810' }),
      'editorBracketMatch.background': pick({ light: '#1c6b4820', dark: '#4d937520' }),

      'editorGutter.modifiedBackground': pick({ light: primer.blue[4], dark: primer.blue[5] }),
      'editorGutter.addedBackground': pick({ light: primer.green[5], dark: primer.green[4] }),
      'editorGutter.deletedBackground': primer.red[5],

      'diffEditor.insertedTextBackground': pick({ light: '#34d05822', dark: '#28a74530' }),
      'diffEditor.removedTextBackground': pick({ light: '#d73a4922', dark: '#d73a4930' }),

      'scrollbar.shadow': pick({ light: '#6a737d33', dark: '#0008' }),
      'scrollbarSlider.background': activeBackground,
      'scrollbarSlider.hoverBackground': activeBackground,
      'scrollbarSlider.activeBackground': activeBackground,
      'editorOverviewRuler.border': primer.white,

      'panel.background': background,
      'panel.border': border,
      'panelTitle.activeBorder': 'transparent',
      'panelTitle.activeForeground': foreground,
      'panelTitle.inactiveForeground': primer.gray[5],
      'panelInput.border': pick({ light: primer.gray[2], dark: primer.gray[1] }),

      'terminal.foreground': foreground,
      'terminal.ansiBrightBlack': pick({ light: VitesseThemes.background[0], dark: VitesseThemes.foreground[1] }),
      'terminal.ansiBrightBlue': vitesse('blue'),
      'terminal.ansiBrightCyan': vitesse('cyan'),
      'terminal.ansiBrightGreen': vitesse('green'),
      'terminal.ansiBrightMagenta': vitesse('magenta'),
      'terminal.ansiBrightRed': vitesse('red'),
      'terminal.ansiBrightWhite': pick({ light: VitesseThemes.foreground[0], dark: VitesseThemes.background[1] }),
      'terminal.ansiBrightYellow': vitesse('yellow'),
      'terminal.ansiBlack': pick({ light: VitesseThemes.background[0], dark: VitesseThemes.foreground[1] }),
      'terminal.ansiBlue': vitesse('blue'),
      'terminal.ansiCyan': vitesse('cyan'),
      'terminal.ansiGreen': vitesse('green'),
      'terminal.ansiMagenta': vitesse('magenta'),
      'terminal.ansiRed': vitesse('red'),
      'terminal.ansiWhite': pick({ light: VitesseThemes.foreground[0], dark: VitesseThemes.background[1] }),
      'terminal.ansiYellow': vitesse('yellow'),

      'gitDecoration.addedResourceForeground': vitesse('green'),
      'gitDecoration.modifiedResourceForeground': vitesse('blue'),
      'gitDecoration.deletedResourceForeground': vitesse('red'),
      'gitDecoration.untrackedResourceForeground': vitesse('green'),
      'gitDecoration.ignoredResourceForeground': vitesse('secondaryForeground'),
      'gitDecoration.conflictingResourceForeground': vitesse('orange'),
      'gitDecoration.submoduleResourceForeground': vitesse('secondaryForeground'),

      'debugToolBar.background': background,
      'editor.stackFrameHighlightBackground': pick({ light: primer.yellow[1], dark: '#a707' }),
      'editor.focusedStackFrameHighlightBackground': pick({ light: primer.yellow[2], dark: '#b808' }),

      'peekViewEditor.matchHighlightBackground': pick({ dark: '#ffd33d33' }),
      'peekViewResult.matchHighlightBackground': pick({ dark: '#ffd33d33' }),
      'peekViewEditor.background': background,
      'peekViewResult.background': background,

      'settings.headerForeground': foreground,
      'settings.modifiedItemIndicator': primer.blue[4],
      'welcomePage.buttonBackground': primer.gray[1],
      'welcomePage.buttonHoverBackground': primer.gray[2],
    },
    semanticHighlighting: true,
    tokenColors: [
      {
        scope: ['comment', 'punctuation.definition.comment', 'string.comment'],
        settings: {
          foreground: vitesse('comment'),
        },
      },
      {
        scope: ['punctuation', 'meta.tag.block.any.html', 'meta.brace.round'],
        settings: {
          foreground: vitesse('punctuation'),
        },
      },
      {
        scope: [
          'constant',
          'entity.name.constant',
          'variable.other.constant',
          'variable.language',
          'meta.definition.variable',
        ],
        settings: {
          foreground: vitesse('variable'),
        },
      },
      {
        scope: ['entity', 'entity.name'],
        settings: {
          foreground: vitesse('function'),
        },
      },
      {
        scope: 'variable.parameter.function',
        settings: {
          foreground,
        },
      },
      {
        scope: 'entity.name.tag',
        settings: {
          foreground: vitesse('function'),
        },
      },
      {
        scope: 'entity.name.function',
        settings: {
          foreground: vitesse('function'),
        },
      },
      {
        scope: 'keyword',
        settings: {
          foreground: vitesse('keyword'),
        },
      },
      {
        scope: ['storage', 'storage.type'],
        settings: {
          foreground: vitesse('builtin'),
        },
      },
      {
        scope: [
          'storage.modifier.package',
          'storage.modifier.import',
          'storage.type.java',
        ],
        settings: {
          foreground,
        },
      },
      {
        scope: [
          'string',
          'punctuation.definition.string',
          'string punctuation.section.embedded source',
        ],
        settings: {
          foreground: vitesse('string'),
        },
      },
      {
        scope: 'support',
        settings: {
          foreground: vitesse('property'),
        },
      },
      {
        scope: [
          'meta.property-name',
          'entity.other.attribute-name',
        ],
        settings: {
          foreground: vitesse('property'),
        },
      },
      {
        scope: 'variable',
        settings: {
          foreground: vitesse('variable'),
        },
      },
      {
        scope: 'variable.other',
        settings: {
          foreground: vitesse('variable'),
        },
      },
      {
        scope: 'invalid.broken',
        settings: {
          fontStyle: 'italic',
          foreground: primer.red[7],
        },
      },
      {
        scope: 'invalid.deprecated',
        settings: {
          fontStyle: 'italic',
          foreground: primer.red[7],
        },
      },
      {
        scope: 'invalid.illegal',
        settings: {
          fontStyle: 'italic',
          foreground: primer.red[7],
        },
      },
      {
        scope: 'invalid.unimplemented',
        settings: {
          fontStyle: 'italic',
          foreground: primer.red[7],
        },
      },
      {
        scope: 'carriage-return',
        settings: {
          fontStyle: 'italic underline',
          background: pick({ light: primer.red[5], dark: primer.red[6] }),
          foreground: primer.gray[0],
          content: '^M',
        },
      },
      {
        scope: 'message.error',
        settings: {
          foreground: primer.red[7],
        },
      },
      {
        scope: 'string source',
        settings: {
          foreground,
        },
      },
      {
        scope: 'string variable',
        settings: {
          foreground: vitesse('string'),
        },
      },
      {
        scope: ['source.regexp', 'string.regexp'],
        settings: {
          foreground: vitesse('regex'),
        },
      },
      {
        scope: [
          'string.regexp.character-class',
          'string.regexp constant.character.escape',
          'string.regexp source.ruby.embedded',
          'string.regexp string.regexp.arbitrary-repitition',
        ],
        settings: {
          foreground: vitesse('string'),
        },
      },
      {
        scope: 'string.regexp constant.character.escape',
        settings: {
          fontStyle: 'bold',
          foreground: primer.green[6],
        },
      },
      {
        scope: 'support.constant',
        settings: {
          foreground: primer.blue[6],
        },
      },
      {
        scope: 'support.variable',
        settings: {
          foreground: vitesse('literal'),
        },
      },
      {
        scope: 'meta.module-reference',
        settings: {
          foreground: primer.blue[6],
        },
      },
      {
        scope: 'punctuation.definition.list.begin.markdown',
        settings: {
          foreground: primer.orange[6],
        },
      },
      {
        scope: ['markup.heading', 'markup.heading entity.name'],
        settings: {
          fontStyle: 'bold',
          foreground: primer.blue[6],
        },
      },
      {
        scope: 'markup.quote',
        settings: {
          foreground: primer.green[6],
        },
      },
      {
        scope: 'markup.italic',
        settings: {
          fontStyle: 'italic',
          foreground,
        },
      },
      {
        scope: 'markup.bold',
        settings: {
          fontStyle: 'bold',
          foreground,
        },
      },
      {
        scope: 'markup.raw',
        settings: {
          foreground: primer.blue[6],
        },
      },
      {
        scope: [
          'markup.deleted',
          'meta.diff.header.from-file',
          'punctuation.definition.deleted',
        ],
        settings: {
          background: primer.red[0],
          foreground: primer.red[7],
        },
      },
      {
        scope: [
          'markup.inserted',
          'meta.diff.header.to-file',
          'punctuation.definition.inserted',
        ],
        settings: {
          background: primer.green[0],
          foreground: primer.green[6],
        },
      },
      {
        scope: ['markup.changed', 'punctuation.definition.changed'],
        settings: {
          background: primer.orange[1],
          foreground: primer.orange[6],
        },
      },
      {
        scope: ['markup.ignored', 'markup.untracked'],
        settings: {
          foreground: primer.gray[1],
          background: primer.blue[6],
        },
      },
      {
        scope: 'meta.diff.range',
        settings: {
          foreground: pick({ light: primer.purple[5], dark: primer.purple[6] }),
          fontStyle: 'bold',
        },
      },
      {
        scope: 'meta.diff.header',
        settings: {
          foreground: primer.blue[6],
        },
      },
      {
        scope: 'meta.separator',
        settings: {
          fontStyle: 'bold',
          foreground: primer.blue[6],
        },
      },
      {
        scope: 'meta.output',
        settings: {
          foreground: primer.blue[6],
        },
      },
      {
        scope: [
          'brackethighlighter.tag',
          'brackethighlighter.curly',
          'brackethighlighter.round',
          'brackethighlighter.square',
          'brackethighlighter.angle',
          'brackethighlighter.quote',
        ],
        settings: {
          foreground: primer.gray[6],
        },
      },
      {
        scope: 'brackethighlighter.unmatched',
        settings: {
          foreground: primer.red[7],
        },
      },
      {
        scope: ['constant.other.reference.link', 'string.other.link'],
        settings: {
          foreground: primer.blue[8],
          fontStyle: 'underline',
        },
      },
    ],
  }
}
