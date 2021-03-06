import { createStyles, Theme } from '@material-ui/core/styles';
export type MoonSocialLinkStyleProps = {}

export type MoonSocialLinkClassKey = keyof ReturnType<typeof moonSocialLinkStyles>

const moonSocialLinkStyles = ({ palette }: Theme) => createStyles({
  anchor: {
    display: 'inline-flex',
    alignItems: 'center',
    cursor: 'pointer',
    fontSize: 24,
    padding: 12,
    borderRadius: 40,
    border: '1px solid',
    borderColor: palette.divider,
    color: palette.text.secondary,
    transition: '0.3s ease-out',
    '&:not(:first-of-type)': {
      marginLeft: '0.5rem',
    },
    '&:hover, &:focus': {
      transform: 'translateY(-4px)',
      borderColor: palette.text.secondary,
      color: palette.type === 'dark' ? '#fff' : palette.text.primary,
    },
  },
  icon: {},
})

export default moonSocialLinkStyles
